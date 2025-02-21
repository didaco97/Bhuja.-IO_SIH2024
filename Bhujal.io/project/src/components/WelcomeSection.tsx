import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { EXTERNAL_SERVICES } from '../config/constants';

export default function WelcomeSection() {
  return (
    <div className="py-6 space-y-6">
      {/* Welcome Text */}
      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Welcome to Bhujal.io
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 mt-2">
          Your comprehensive platform for groundwater information and insights
        </p>
      </div>

      {/* AI Chatbot Link */}
      <a 
        href={EXTERNAL_SERVICES.chatbot.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 border border-gray-100"
      >
        <div className="p-4 flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-800">AI Chatbot Assistant</h2>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </div>
            <p className="text-gray-600">Get instant answers to your groundwater queries</p>
            <p className="text-sm text-gray-500 mt-1">Opens in a new window • Available 24/7</p>
          </div>
        </div>
      </a>
    </div>
  );
}