import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';

interface ExternalChatLinkProps {
  url: string;
}

export default function ExternalChatLink({ url }: ExternalChatLinkProps) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">AI Chatbot Assistant</h3>
            <p className="text-gray-600">Get instant answers to your groundwater queries</p>
          </div>
          <ExternalLink className="h-5 w-5 text-gray-400" />
        </div>
        <div className="mt-4 text-sm text-gray-500">
          Opens in a new window • Available 24/7
        </div>
      </div>
    </a>
  );
}