'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaComments, FaTimes } from 'react-icons/fa';

interface Message {
  content: string;
  sender: 'user' | 'bot';
  role?: 'user' | 'assistant';
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello! I'm SNEP's virtual assistant. How can I help you today?",
      sender: 'bot',
      role: 'assistant'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { 
      content: input, 
      sender: 'user' as const,
      role: 'user' as const 
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.concat(userMessage).map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      if (data.content) {
        const botResponse = {
          content: data.content,
          sender: 'bot' as const,
          role: 'assistant' as const
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        throw new Error('No response content');
      }
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, {
        content: "I apologize, but I'm having trouble connecting right now. Please try again or contact our support team directly.",
        sender: 'bot',
        role: 'assistant'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full md:w-96 bg-white shadow-xl rounded-lg">
      {/* Chat Header with X button */}
      <div className="bg-[#003366] text-white p-4 flex justify-between items-center rounded-t-lg">
        <h3 className="font-semibold">SNEP Chat Assistant</h3>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="hover:bg-[#004080] p-1 rounded transition-colors"
        >
          <FaTimes size={16} />
        </button>
      </div>

      {/* Collapsible Chat Content */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[600px]' : 'max-h-0'
      }`}>
        <div className="h-[400px] overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-[#003366] text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-800 rounded-lg p-3">
                Typing...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t bg-white rounded-b-lg">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] bg-white text-gray-900 placeholder-gray-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#003366] text-white p-2 rounded-lg hover:bg-[#004080] transition-colors disabled:opacity-50"
            >
              <FaPaperPlane />
            </button>
          </div>
        </form>
      </div>

      {/* Show expand button when collapsed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="absolute -bottom-12 right-0 bg-[#003366] text-white p-2 rounded-lg hover:bg-[#004080] transition-colors"
        >
          <FaComments size={20} />
        </button>
      )}
    </div>
  );
} 
