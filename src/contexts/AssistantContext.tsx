'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface AssistantContextType {
  isOpen: boolean;
  messages: Message[];
  isLoading: boolean;
  currentPage: string;
  open: () => void;
  close: () => void;
  sendMessage: (message: string) => Promise<void>;
  clearMessages: () => void;
  setCurrentPage: (page: string) => void;
}

const AssistantContext = createContext<AssistantContextType | undefined>(undefined);

export function AssistantProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m AfriBridge\'s AI Assistant. How can I help you today? Ask about our services, shipping rates, or anything logistics-related!',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('afriBridgeAIMessages');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        const messages = parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
        setMessages(messages);
      } catch (e) {
        console.error('Failed to load messages:', e);
      }
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('afriBridgeAIMessages', JSON.stringify(messages));
  }, [messages]);

  // Handle keyboard shortcut (Cmd/Ctrl+K)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const sendMessage = useCallback(async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          context: `AfriBridge Clearing & Logistics - providing customs clearing, freight forwarding, and cross-border logistics across African trade corridors. User is currently on: ${currentPage}`,
          currentPage,
        }),
      });

      if (!response.ok) throw new Error('Chat failed');

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: 'Sorry, I encountered an error. Please try again or contact our team at info@afribridge.co.za or +27 83 391 0863',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: '1',
        text: 'Hello! I\'m AfriBridge\'s AI Assistant. How can I help you today? Ask about our services, shipping rates, or anything logistics-related!',
        sender: 'ai',
        timestamp: new Date(),
      },
    ]);
    localStorage.removeItem('afriBridgeAIMessages');
  }, []);

  return (
    <AssistantContext.Provider
      value={{
        isOpen,
        messages,
        isLoading,
        currentPage,
        open,
        close,
        sendMessage,
        clearMessages,
        setCurrentPage,
      }}
    >
      {children}
    </AssistantContext.Provider>
  );
}

export function useAssistant() {
  const context = useContext(AssistantContext);
  if (!context) {
    throw new Error('useAssistant must be used within AssistantProvider');
  }
  return context;
}
