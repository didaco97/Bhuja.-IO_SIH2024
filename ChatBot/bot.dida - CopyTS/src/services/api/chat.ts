import { Message } from '../../types/chat';  // Importing Message type from the correct path
import { ApiResponse } from '../../types/api';  // Importing ApiResponse type
import { API_ENDPOINTS } from './config';  // API endpoint configuration
import { API_FUNCTIONS } from './functions';  // Functions defined in another module
import { SYSTEM_PROMPT, MAX_TOKENS, TEMPERATURE } from '../../config/constants';  // Constants for system prompt, max tokens, and temperature
import { apiRequest } from './client';  // The apiRequest function to handle API calls
import type { ChatMessages } from './types';  // Type for the formatted messages

// Function to format messages into the required format
function formatMessages(messages: Message[]): ChatMessages {
  return [
    { role: 'system', content: SYSTEM_PROMPT },  // Adding system prompt as the first message
    ...messages.map(msg => ({
      role: msg.role,
      content: msg.content,
    }))  // Mapping each message from the user into the required format
  ];
}

// Function to send chat messages to the API
export async function sendChatMessage(messages: Message[]): Promise<ApiResponse> {
  try {
    // Sending a request to the API with the formatted messages and other necessary parameters
    const response = await apiRequest(API_ENDPOINTS.chat, {
      model: 'llama-3.1-sonar-small-128k-online',  // Specify the model to use
      messages: formatMessages(messages),  // Format the messages as required
      max_tokens: MAX_TOKENS,  // Maximum number of tokens for the response
      temperature: TEMPERATURE,  // Temperature value for randomness in responses
      functions: API_FUNCTIONS,  // Functions that the model can call
    });
    
    return response;  // Return the response from the API
  } catch (error) {
    console.error('Error sending chat message:', error);  // Error handling
    throw error;  // Rethrow the error for further handling in the caller
  }
}