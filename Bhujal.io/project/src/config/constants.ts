// API Configuration
export const API_CONFIG = {
  perplexity: {
    baseUrl: 'https://api.perplexity.ai',
    model: 'llama-3.1-sonar-small-128k-online',
    maxTokens: 2000
  }
};

// Report Generation
export const REPORT_CONFIG = {
  defaultChartColors: {
    primary: 'rgb(0, 84, 143)',
    secondary: 'rgba(0, 84, 143, 0.1)'
  },
  pdfOptions: {
    margin: 1,
    imageType: 'jpeg',
    imageQuality: 0.98,
    scale: 2,
    format: 'a4'
  }
};

// External Services
export const EXTERNAL_SERVICES = {
  chatbot: {
    url: 'https://chat.bhujal.io',
    name: 'Bhujal AI Assistant'
  }
};