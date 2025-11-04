import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { SeedCard } from '@/components/SeedCard';
import { valueSeeds } from '@/data/value-seeds';
import { Button } from '@/components/ui/button';
import { ChatPanel } from '@/components/ChatPanel';
export function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              A Framework for Liberation Technology
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Aetherium Praxis
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              An interactive framework to explore and engage with ethical and liberatory technology design, featuring an integrated AI assistant.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16 md:pb-24 lg:pb-32">
          {valueSeeds.map((seed, index) => (
            <SeedCard key={seed.seed_id} seed={seed} index={index} />
          ))}
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        >
          <Button
            size="lg"
            className="rounded-full h-16 w-16 shadow-lg shadow-primary/30"
            onClick={() => setIsChatOpen(true)}
          >
            <MessageSquare className="h-7 w-7" />
            <span className="sr-only">Open AI Chat</span>
          </Button>
        </motion.div>
      </div>
      <ChatPanel open={isChatOpen} onOpenChange={setIsChatOpen} />
    </MainLayout>
  );
}