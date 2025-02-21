import React, { useState } from 'react';
import { ChatContainer } from './components/Chat/ChatContainer';
import { useChat } from './hooks/useChat';
import { Bot, Droplets } from 'lucide-react';

function App() {
  const { messages, isLoading, sendMessage } = useChat();
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  return (
<div className="flex flex-col h-screen bg-gradient-to-b from-cyan-300 via-blue-200 to-indigo-500">
  {/* Header */}
  <header className="bg-gradient-to-r from-indigo-800 via-purple-700 to-cyan-600 text-white py-6 shadow-2xl animate-slideDown">
    <div className="max-w-3xl mx-auto px-4 flex items-center gap-4">
      <div className="relative animate-pulse">
        <Bot className="w-30 h-10 text-white" />
        <Droplets className="w-6 h-6 text-teal-300 absolute -bottom-2 -right-2 drop-shadow-md" />
      </div>
      <div>
        <h1 className="text-4xl font-extrabold tracking-widest text-white">Bhujal.io</h1>
        <p className="text-md text-cyan-200">Your Groundwater Assistant</p>
      </div>
    </div>
  </header>

  {/* Main Chat Area */}
  <main className="flex-1 flex flex-col items-center justify-center animate-fadeIn">
    {messages.length === 0 ? (
      <div className="text-center space-y-8 max-w-md">
        <div className="relative mx-auto w-fit animate-bounce">
          <Bot className="w-16 h-16 text-indigo-700 shadow-lg" />
          <Droplets className="w-8 h-8 text-blue-400 absolute -bottom-3 -right-3 animate-pulse" />
        </div>
        <h2 className="text-5xl font-extrabold text-white">Welcome to Groundwater Assistant</h2>
        <p className="text-lg text-blue-100 leading-relaxed">
          Ask me anything about groundwater! I can help you with topics like aquifers, water quality, and more.
        </p>
        <div className="grid gap-4 mt-6">
          {['What are the main types of aquifers?',
            'How does groundwater recharge work?',
            'What factors affect groundwater quality?'].map((question, index) => (
            <button
              key={index}
              onClick={() => sendMessage(question)}
              className="w-full p-4 bg-gradient-to-r from-purple-500 to-teal-400 text-white rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all transform"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    ) : (
      <div className="flex-1 w-full max-w-3xl p-4 animate-fadeIn">
        <ChatContainer messages={messages} isLoading={isLoading} />
      </div>
    )}
  </main>

  {/* Input Area */}
  <footer className="bg-gradient-to-r from-white via-gray-100 to-gray-200 py-4 border-t shadow-lg animate-slideUp">
    <div className="max-w-3xl mx-auto px-4 flex items-center gap-4">
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
        className="flex-1 p-3 text-lg rounded-xl bg-white shadow-lg border border-gray-300 focus:ring-4 focus:ring-indigo-500 focus:outline-none resize-none transition-all duration-300 transform hover:scale-105"
        placeholder="Type your message here..."
        disabled={isLoading}
      />
      <button
        onClick={handleSendMessage}
        className={`px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold rounded-full shadow-xl hover:bg-purple-700 transition-transform transform hover:scale-110 disabled:opacity-50 ${
          inputValue.trim() ? '' : 'cursor-not-allowed'
        }`}
        disabled={isLoading || !inputValue.trim()}
      >
        Send
      </button>
    </div>
  </footer>
</div>
  );
}

export default App;