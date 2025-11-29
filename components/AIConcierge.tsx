import React, { useState, useRef, useEffect } from 'react';
import { generateResponse } from '../services/geminiService';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I am Sareer, your AI concierge. Ask me about our rooms, dining, or the beautiful sights of Quetta.", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInput('');
    setLoading(true);

    const botResponse = await generateResponse(userMsg);
    setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    setLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-pomegranate-800 text-white p-4 rounded-full shadow-lg hover:bg-pomegranate-900 transition-all hover:scale-105 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-pomegranate-800 text-white p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot size={20} />
              <div>
                <h3 className="font-bold">Sareer Concierge</h3>
                <p className="text-xs text-pomegranate-100">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-pomegranate-700 p-1 rounded"><X size={20} /></button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-sand-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.sender === 'user' ? 'bg-pomegranate-800 text-white rounded-br-none' : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-lg border border-gray-200 rounded-bl-none shadow-sm">
                   <div className="flex space-x-1">
                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                   </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white rounded-b-xl flex space-x-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about rooms, Sajji, or Ziarat..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-pomegranate-600"
            />
            <button onClick={handleSend} disabled={loading} className="bg-pomegranate-800 text-white p-2 rounded-full hover:bg-pomegranate-900 disabled:opacity-50">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};