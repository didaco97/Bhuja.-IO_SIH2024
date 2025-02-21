export const CHAT_SETTINGS = {
  MAX_CONTEXT_LENGTH: 2000,
  MODEL: 'llama-3.1-sonar-small-128k-online'
};

export const CHAT_MESSAGES = {
  WELCOME: "Hello! I'm Bhujal, your groundwater information assistant. How can I help you today?",
  ERROR: {
    API_KEY: 'Invalid or missing API key. Please check your configuration.',
    RATE_LIMIT: 'Rate limit exceeded. Please try again later.',
    GENERAL: 'An unexpected error occurred. Please try again.'
  }
};