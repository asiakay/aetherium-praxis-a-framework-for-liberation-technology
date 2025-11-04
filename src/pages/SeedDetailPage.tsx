import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ListOrdered, ShieldCheck } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { valueSeeds, ValueSeed } from '@/data/value-seeds';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
const Section = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);
export function SeedDetailPage() {
  const { seedId } = useParams<{ seedId: string }>();
  const seed = valueSeeds.find(s => s.seed_id === seedId);
  if (!seed) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold">Seed Not Found</h1>
          <p className="mt-4 text-lg text-muted-foreground">The requested value seed could not be found.</p>
          <Link to="/" className="mt-8 inline-block text-primary hover:underline">
            &larr; Back to Dashboard
          </Link>
        </div>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{seed.title}</h1>
            <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium">
              {seed.core_principle}
            </p>
          </motion.div>
          <Separator className="my-12" />
          <div className="space-y-12">
            <Section delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Praxis Alignment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  {Object.entries(seed.praxis_alignment).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row">
                      <p className="w-full sm:w-1/4 font-semibold capitalize text-foreground">{key}:</p>
                      <p className="w-full sm:w-3/4 text-muted-foreground">{value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Section>
            <Section delay={0.3}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <ListOrdered className="w-6 h-6 text-primary" />
                    Operational Futurity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg text-muted-foreground italic">"{seed.operational_futurity.definition}"</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {seed.operational_futurity.application.map((app, index) => (
                        <Badge key={index} variant="secondary">{app}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Section>
            <Section delay={0.4}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    Ethical Protocols
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-lg list-none">
                    {Object.entries(seed.ethical_protocols).map(([key, value]) => (
                      <li key={key} className="flex items-start">
                        <span className="mr-4 text-primary font-bold">{key}.</span>
                        <span className="text-muted-foreground">{value}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}