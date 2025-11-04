import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, Clock, Wrench, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { chatService, formatTime, renderToolCall } from '@/lib/chat';
import type { Message } from '../../worker/types';
import { Separator } from './ui/separator';
interface ChatPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export function ChatPanel({ open, onOpenChange }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [streamingMessage, setStreamingMessage] = useState('');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollableView = scrollAreaRef.current.querySelector('div');
      if (scrollableView) {
        scrollableView.scrollTop = scrollableView.scrollHeight;
      }
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingMessage]);
  const loadMessages = useCallback(async () => {
    if (open) {
      setIsLoading(true);
      const response = await chatService.getMessages();
      if (response.success && response.data) {
        setMessages(response.data.messages);
      }
      setIsLoading(false);
    }
  }, [open]);
  useEffect(() => {
    loadMessages();
  }, [open, loadMessages]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const message = input.trim();
    setInput('');
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: message,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setStreamingMessage('');
    setIsLoading(true);
    await chatService.sendMessage(message, undefined, (chunk) => {
      setStreamingMessage((prev) => prev + chunk);
    });
    const response = await chatService.getMessages();
    if (response.success && response.data) {
      setMessages(response.data.messages);
    }
    setStreamingMessage('');
    setIsLoading(false);
  };
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:w-[540px] sm:max-w-none flex flex-col p-0">
        <SheetHeader className="p-6">
          <SheetTitle className="text-2xl font-bold">AI Assistant</SheetTitle>
          <SheetDescription>
            Engage with the Aetherium Praxis framework. Ask questions, explore concepts, and deepen your understanding.
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <ScrollArea className="flex-1" ref={scrollAreaRef}>
          <div className="p-6 space-y-6">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && <Bot className="w-6 h-6 flex-shrink-0 text-primary" />}
                <div className={`max-w-[85%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none'}`}>
                  <p className="whitespace-pre-wrap mb-2">{msg.content}</p>
                  {msg.toolCalls && msg.toolCalls.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-current/20 space-y-2">
                      <div className="flex items-center gap-2 text-xs opacity-80">
                        <Wrench className="w-3 h-3" />
                        <span>Tools used:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {msg.toolCalls.map((tool, idx) => (
                          <Badge key={idx} variant={msg.role === 'user' ? 'secondary' : 'outline'} className="text-xs">
                            {renderToolCall(tool)}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="text-xs opacity-70 mt-2 text-right">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {formatTime(msg.timestamp)}
                  </div>
                </div>
                {msg.role === 'user' && <User className="w-6 h-6 flex-shrink-0" />}
              </motion.div>
            ))}
            {streamingMessage && (
              <div className="flex gap-3 justify-start">
                <Bot className="w-6 h-6 flex-shrink-0 text-primary" />
                <div className="max-w-[85%] p-4 rounded-2xl bg-muted rounded-bl-none">
                  <p className="whitespace-pre-wrap">{streamingMessage}<span className="animate-pulse">|</span></p>
                </div>
              </div>
            )}
            {isLoading && !streamingMessage && messages.length > 0 && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <Separator />
        <div className="p-4 space-y-4">
          <form onSubmit={handleSubmit} className="flex gap-2 items-start">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              placeholder="Ask about the praxis..."
              className="flex-1 min-h-[42px] max-h-48 resize-none"
              rows={1}
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
              <Send className="w-4 h-4" />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground text-center px-4">
            Please note: AI interactions are subject to a shared rate limit across all users. Your patience is appreciated.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}