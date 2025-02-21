import { Document, VectorStoreConfig, SearchResult } from './types';
import { VECTOR_STORE_CONFIG } from './config';
import { ChatServiceError } from '../chat/utils/errorUtils';

export class VectorStoreService {
  private static instance: VectorStoreService;
  private documents: Document[] = [];
  private initialized: boolean = false;
  private config: VectorStoreConfig;

  private constructor() {
    this.config = {
      maxResults: VECTOR_STORE_CONFIG.maxResults,
      similarityThreshold: VECTOR_STORE_CONFIG.similarityThreshold
    };
  }

  public static getInstance(): VectorStoreService {
    if (!VectorStoreService.instance) {
      VectorStoreService.instance = new VectorStoreService();
    }
    return VectorStoreService.instance;
  }

  private splitIntoChunks(text: string): string[] {
    const chunks: string[] = [];
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    let currentChunk = '';

    for (const sentence of sentences) {
      if (currentChunk.length + sentence.length <= VECTOR_STORE_CONFIG.chunkSize) {
        currentChunk += sentence;
      } else {
        if (currentChunk) chunks.push(currentChunk.trim());
        currentChunk = sentence;
      }
    }

    if (currentChunk) chunks.push(currentChunk.trim());
    return chunks;
  }

  public async initialize(): Promise<void> {
    if (this.initialized) return;

    try {
      // Initialize with static groundwater knowledge
      const staticKnowledge = [
        "Groundwater is water present beneath Earth's surface in soil pore spaces and rock formation fractures.",
        "Aquifers are underground layers of water-bearing permeable rock or unconsolidated materials.",
        "Groundwater recharge occurs naturally through precipitation and artificially through human intervention.",
        "Water table is the upper surface of the groundwater zone, where water pressure equals atmospheric pressure.",
        "Sustainable groundwater management involves balancing extraction with natural recharge rates.",
        "Groundwater quality is affected by natural factors and human activities.",
        "Overexploitation of groundwater can lead to declining water levels and land subsidence.",
        "Artificial recharge methods include injection wells, infiltration basins, and rainwater harvesting.",
        "Groundwater monitoring involves measuring water levels, quality parameters, and extraction rates.",
        "Conservation measures include efficient irrigation practices and industrial water reuse."
      ];

      this.documents = staticKnowledge.map(content => ({
        pageContent: content,
        metadata: { source: 'static-knowledge' }
      }));

      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize vector store:', error);
      throw ChatServiceError.initializationError('Failed to initialize vector store');
    }
  }

  private calculateSimilarity(query: string, document: string): number {
    const queryTerms = query.toLowerCase().split(/\W+/).filter(term => term.length > 3);
    const docTerms = document.toLowerCase().split(/\W+/);
    
    let matches = 0;
    for (const term of queryTerms) {
      if (docTerms.includes(term)) matches++;
    }
    
    return matches / queryTerms.length;
  }

  public async similaritySearch(query: string): Promise<Document[]> {
    if (!this.initialized) {
      throw ChatServiceError.processingError('Vector store not initialized');
    }

    try {
      const results: SearchResult[] = this.documents.map(doc => ({
        document: doc,
        score: this.calculateSimilarity(query, doc.pageContent)
      }));

      return results
        .filter(result => result.score >= (this.config.similarityThreshold || 0.3))
        .sort((a, b) => b.score - a.score)
        .slice(0, this.config.maxResults)
        .map(result => ({
          ...result.document,
          metadata: { ...result.document.metadata, score: result.score }
        }));
    } catch (error) {
      console.error('Failed to perform similarity search:', error);
      throw ChatServiceError.processingError('Failed to search context');
    }
  }

  // Method to add new documents to the store
  public addDocuments(contents: string[]): void {
    const newDocs = contents.map(content => ({
      pageContent: content,
      metadata: { source: 'dynamic-content' }
    }));
    this.documents.push(...newDocs);
  }
}