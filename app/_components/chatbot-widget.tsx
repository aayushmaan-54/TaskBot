import { Logo } from '@/assets/svg/svg';
import React, { useState } from 'react';

export default function ChatbotWidget({
  isChatbotOpen
}: {
  isChatbotOpen: boolean;
}) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    isChatbotOpen && (
      <div className="fixed bottom-24 right-6 w-80 md:w-96 rounded-lg shadow-xl flex flex-col z-50 bg-primary-light dark:bg-primary-dark h-[500px]">
        {/* Header */}
        <div className="p-4 bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark rounded-t-lg flex items-center gap-2">
          <Logo className="size-8" />
          <h2 className="text-lg font-semibold">AI Agent</h2>
        </div>

        {/* Messages Area */}
        <div className="flex-1 h-96 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-sm">
              <Logo className="size-14 bg-secondary-light rounded-full p-2" />
              <p className="text-lg font-semibold mt-4">Send a message to start the AI Agent</p>
              <p className="mt-2">You can ask the chatbot anything about todo and it will give you relevant answers</p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isBot 
                      ? 'bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark rounded-bl-none' 
                      : 'bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark rounded-br-none'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input Area */}
        <form 
          onSubmit={handleSubmit}
          className="border-t border-gray-200 dark:border-gray-700 p-4"
        >
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none dark:bg-gray-700 dark:text-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-secondary-light dark:bg-secondary-dark rounded-lg hover:bg-secondary-hover-light dark:hover:bg-secondary-hover-dark focus:outline-none text-text-light dark:text-text-dark"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    )
  );
}