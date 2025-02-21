import { PERPLEXITY_CONFIG } from './config';
import { PerplexityMessage, PerplexityResponse } from './types';
import { PerplexityApiError } from './errors';

export class PerplexityClient {
  private static instance: PerplexityClient;

  private constructor() {}

  public static getInstance(): PerplexityClient {
    if (!this.instance) {
      this.instance = new PerplexityClient();
    }
    return this.instance;
  }

  public async generateResponse(messages: PerplexityMessage[], apiKey: string): Promise<string> {
    if (!this.validateApiKey(apiKey)) {
      throw PerplexityApiError.authError('Invalid or missing API key');
    }

    try {
      const response = await fetch(`${PERPLEXITY_CONFIG.baseUrl}${PERPLEXITY_CONFIG.endpoints.chat}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: PERPLEXITY_CONFIG.model,
          messages,
          max_tokens: PERPLEXITY_CONFIG.maxTokens
        })
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw PerplexityApiError.authError('Invalid API key');
        }
        if (response.status === 429) {
          throw PerplexityApiError.rateLimit();
        }
        throw PerplexityApiError.apiError('Failed to generate response');
      }

      const data: PerplexityResponse = await response.json();
      
      if (!data.choices?.[0]?.message?.content) {
        throw PerplexityApiError.apiError('Invalid response format');
      }

      return data.choices[0].message.content;
    } catch (error) {
      if (error instanceof PerplexityApiError) {
        throw error;
      }
      throw PerplexityApiError.apiError('Failed to communicate with API');
    }
  }

  private validateApiKey(apiKey: string): boolean {
    return typeof apiKey === 'string' && apiKey.trim().length > 0;
  }
}