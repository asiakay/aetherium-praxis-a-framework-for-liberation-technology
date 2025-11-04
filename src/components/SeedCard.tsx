import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { ValueSeed } from '@/data/value-seeds';
interface SeedCardProps {
  seed: ValueSeed;
  index: number;
}
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};
export function SeedCard({ seed, index }: SeedCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
      className="h-full"
    >
      <Link to={`/seed/${seed.seed_id}`} className="block h-full group">
        <Card className="h-full flex flex-col bg-background/80 backdrop-blur-sm border-border/50 transition-all duration-300 group-hover:border-primary">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {seed.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between">
            <CardDescription className="text-lg text-muted-foreground mb-6">
              {seed.core_principle}
            </CardDescription>
            <div className="flex items-center justify-end text-sm font-semibold text-primary">
              Explore
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}