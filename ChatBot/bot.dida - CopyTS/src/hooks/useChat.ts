import { useState, useCallback } from 'react';
import { Message, ChatState } from '../types/chat';
import { sendChatMessage } from '../services/api/chat';
import { handleFunctionCall } from '../services/api/functions';
import { ApiError, NetworkError, FunctionCallError } from '../services/api/errors';

export function useChat() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
  });

  const handleError = (error: unknown): Message => ({
    id: Date.now().toString(),
    role: 'assistant',
    content: error instanceof ApiError
      ? `I apologize, but there was an API error: ${error.message}`
      : error instanceof NetworkError
      ? 'I apologize, but there seems to be a network connectivity issue. Please check your connection and try again.'
      : error instanceof FunctionCallError
      ? `I apologize, but there was an error processing the function call: ${error.message}`
      : 'I apologize, but an unexpected error occurred. Please try again.',
    timestamp: Date.now(),
  });

  // Function to check for greetings and send appropriate response
  const getGreetingResponse = (content: string): string => {
    const greetings = ['hi', 'hello', 'hey', 'greetings'];
    const lowerContent = content.toLowerCase();

    if (greetings.some(greeting => lowerContent.includes(greeting))) {
      return 'Hello! How can I assist you today?';
    }
    return ''; // Return empty if no greeting is found
  };

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: Date.now(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));

    // Check if the message contains a greeting
    const greetingResponse = getGreetingResponse(content);
    if (greetingResponse) {
      const assistantGreetingMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: greetingResponse,
        timestamp: Date.now(),
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantGreetingMessage],
        isLoading: false,
      }));
      return;
    }

    try {
      const response = await sendChatMessage([...state.messages, userMessage]);
      const message = response.choices[0].message;
      
      let functionResult = null;
      if (message.function_call) {
        try {
          functionResult = await handleFunctionCall(
            message.function_call.name,
            message.function_call.arguments
          );
        } catch (error) {
          throw new FunctionCallError(
            error instanceof Error ? error.message : 'Unknown function error',
            message.function_call.name
          );
        }
      }

      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: functionResult 
          ? `${message.content}\n\nData retrieved:\n\`\`\`json\n${JSON.stringify(functionResult, null, 2)}\n\`\`\``
          : message.content,
        timestamp: Date.now(),
        references: message.references,
        images: message.images,
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
      }));
    } catch (error) {
      console.error('Chat error:', error);
      
      setState(prev => ({
        ...prev,
        messages: [...prev.messages, handleError(error)],
        isLoading: false,
      }));
    }
  }, [state.messages]);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    sendMessage,
  };
}