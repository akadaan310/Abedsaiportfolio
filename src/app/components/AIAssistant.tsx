import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Send, Calendar, Phone, Briefcase, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIAssistantProps {
  mode: 'discovery' | 'filter' | 'scope' | 'context' | 'intake';
  onProjectFilter?: (query: string) => void;
  onPackageRecommend?: (packageId: string) => void;
}

export function AIAssistant({ mode, onProjectFilter, onPackageRecommend }: AIAssistantProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCallPrompt, setShowCallPrompt] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const placeholders = {
    discovery: 'Tell me what you\'re building...',
    filter: 'Search projects by tech, industry, or challenge...',
    scope: 'Describe your project needs...',
    context: 'Ask me about my experience...',
    intake: 'How can I help you today?'
  };

  useEffect(() => {
    if (messages.length >= 3) {
      const timer = setTimeout(() => setShowCallPrompt(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = '';
      
      if (mode === 'discovery' || mode === 'filter') {
        response = `I found several relevant projects based on "${input}". Let me show you the best matches.`;
        if (onProjectFilter) {
          onProjectFilter(input);
        }
      } else if (mode === 'scope') {
        if (input.toLowerCase().includes('landing') || input.toLowerCase().includes('page')) {
          response = 'Based on what you\'re describing, our **Landing Page** package ($500, 5-7 days) would be perfect. It includes custom React design, lead capture, and deployment. Would you like to see examples?';
          if (onPackageRecommend) {
            onPackageRecommend('landing-page');
          }
        } else if (input.toLowerCase().includes('shopify') || input.toLowerCase().includes('store')) {
          response = 'It sounds like our **Shopify Store Setup** package ($750, 7-10 days) would fit your needs. I can set up a premium theme with your branding and products. Want to see portfolio examples?';
          if (onPackageRecommend) {
            onPackageRecommend('shopify-store');
          }
        } else if (input.toLowerCase().includes('web app') || input.toLowerCase().includes('saas')) {
          response = 'For a web app with those requirements, I\'d recommend our **Simple Web App** package ($1,500, 10-14 days) with React + FastAPI, auth, and database. I can show you similar projects I\'ve built.';
          if (onPackageRecommend) {
            onPackageRecommend('simple-web-app');
          }
        } else {
          response = 'Thanks for sharing that! To recommend the right solution, can you tell me: 1) What\'s your timeline? 2) Do you have a budget range in mind? 3) Is this for an existing business or a new venture?';
        }
      } else if (mode === 'context') {
        response = 'I have 18 years of engineering experience, including leading teams of up to 80 engineers at companies like Emirates, PlutoTV, and Equinox. I specialize in mobile apps (React Native, Swift, Kotlin), full-stack web development, and eCommerce platforms. What specific aspect interests you?';
      } else {
        response = 'I\'d be happy to help! Can you tell me more about what you\'re looking to build?';
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Collapsed State - Floating Pill */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <motion.button
              onClick={() => setIsExpanded(true)}
              className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(59,130,246,0.4)', '0 0 0 8px rgba(59,130,246,0)', '0 0 0 0 rgba(59,130,246,0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full"
              >
                <MessageCircle className="w-5 h-5 text-[#3B82F6]" />
              </motion.div>
              <span className="text-sm font-medium text-white/90">
                {placeholders[mode]}
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded State - Full Chat */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 w-[420px] max-h-[600px] z-50 flex flex-col"
          >
            <div className="bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1d4ed8] flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">AI Assistant</h3>
                    <p className="text-xs text-white/60">Always here to help</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white/60 hover:text-white"
                    onClick={() => window.open('https://calendly.com', '_blank')}
                  >
                    <Calendar className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white/60 hover:text-white"
                    onClick={() => setIsExpanded(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-[300px] max-h-[400px]">
                {messages.length === 0 && (
                  <div className="text-center text-white/40 text-sm py-8">
                    <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-20" />
                    <p>{placeholders[mode]}</p>
                  </div>
                )}
                
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                        msg.role === 'user'
                          ? 'bg-[#3B82F6] text-white'
                          : 'bg-white/5 text-white/90 border border-white/10'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-white/60 rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-white/60 rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-white/60 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Call Prompt */}
              <AnimatePresence>
                {showCallPrompt && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="px-6 pb-4"
                  >
                    <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#1d4ed8]/10 border border-[#3B82F6]/20 rounded-xl p-3">
                      <p className="text-xs text-white/70 mb-2">Want to jump on a quick call? I'm available —</p>
                      <div className="flex gap-2">
                        <button className="flex-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-white transition-colors">
                          Today at 2pm
                        </button>
                        <button className="flex-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-white transition-colors">
                          Tomorrow at 10am
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]"
                  />
                  <Button
                    onClick={handleSend}
                    size="icon"
                    className="bg-[#3B82F6] hover:bg-[#2563eb] text-white"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
