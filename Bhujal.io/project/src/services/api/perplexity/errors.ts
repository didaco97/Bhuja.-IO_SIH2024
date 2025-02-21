import { PerplexityError } from './types';

export class PerplexityApiError extends Error implements PerplexityError {
  constructor(
    message: string,
    public code?: string,
    public status?: number
  ) {
    super(message);
    this.name = 'PerplexityApiError';
  }

  static authError(message: string): PerplexityApiError {
    return new PerplexityApiError(message, 'AUTH_ERROR', 401);
  }

  static rateLimit(): PerplexityApiError {
    return new PerplexityApiError('Rate limit exceeded. Please try again later.', 'RATE_LIMIT', 429);
  }

  static apiError(message: string): PerplexityApiError {
    return new PerplexityApiError(message, 'API_ERROR', 400);
  }
}