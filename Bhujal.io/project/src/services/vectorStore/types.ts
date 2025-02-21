export interface Document {
  pageContent: string;
  metadata: {
    source: string;
    score?: number;
  };
}

export interface VectorStoreConfig {
  maxResults?: number;
  similarityThreshold?: number;
}

export interface SearchResult {
  document: Document;
  score: number;
}