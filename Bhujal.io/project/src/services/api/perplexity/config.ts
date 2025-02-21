export const PERPLEXITY_CONFIG = {
  baseUrl: 'https://api.perplexity.ai',
  model: 'llama-3.1-sonar-small-128k-online',
  maxTokens: 2000,
  endpoints: {
    chat: '/chat/completions'
  }
};