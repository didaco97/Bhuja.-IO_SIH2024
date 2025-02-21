import { WEBSITE_URLS, CHAT_SETTINGS } from '../config/constants';

interface Document {
  pageContent: string;
  metadata: {
    source: string;
  };
}

export class VectorStoreService {
  private static instance: VectorStoreService;
  private documents: Document[] = [];
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): VectorStoreService {
    if (!VectorStoreService.instance) {
      VectorStoreService.instance = new VectorStoreService();
    }
    return VectorStoreService.instance;
  }

  private splitTextIntoChunks(text: string, maxLength: number): string[] {
    const chunks: string[] = [];
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    let currentChunk = '';

    for (const sentence of sentences) {
      if (currentChunk.length + sentence.length <= maxLength) {
        currentChunk += sentence;
      } else {
        if (currentChunk) chunks.push(currentChunk.trim());
        currentChunk = sentence;
      }
    }

    if (currentChunk) chunks.push(currentChunk.trim());
    return chunks;
  }

  private async fetchAndProcessUrl(url: string): Promise<Document[]> {
    try {
      const response = await fetch(url);
      const text = await response.text();
      
      // Remove HTML tags and normalize whitespace
      const cleanText = text
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      const chunks = this.splitTextIntoChunks(cleanText, CHAT_SETTINGS.MAX_CONTEXT_LENGTH);
      
      return chunks.map(chunk => ({
        pageContent: chunk,
        metadata: { source: url }
      }));
    } catch (error) {
      console.error(`Error processing ${url}:`, error);
      return [];
    }
  }

  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      const allDocuments = await Promise.all(
        WEBSITE_URLS.map(url => this.fetchAndProcessUrl(url))
      );

      this.documents = allDocuments.flat();
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize vector store:', error);
      throw error;
    }
  }

  public async similaritySearch(query: string): Promise<Document[]> {
    if (!this.isInitialized) {
      throw new Error('Vector store not initialized');
    }

    try {
      const queryTerms = query.toLowerCase().split(' ').filter(term => term.length > 3);
      
      // Simple TF-IDF-like scoring
      const scoredDocs = this.documents.map(doc => {
        const content = doc.pageContent.toLowerCase();
        const score = queryTerms.reduce((acc, term) => {
          const count = (content.match(new RegExp(term, 'g')) || []).length;
          return acc + (count > 0 ? count : 0);
        }, 0);
        return { doc, score };
      });

      // Sort by score and take top results
      return scoredDocs
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, CHAT_SETTINGS.MAX_RESULTS)
        .map(({ doc }) => doc);
    } catch (error) {
      console.error('Failed to perform similarity search:', error);
      throw error;
    }
  }
}