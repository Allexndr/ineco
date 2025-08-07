'use client';

import { memo, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

interface OptimizedSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const OptimizedSection = memo(function OptimizedSection({ 
  id, 
  children, 
  className = '', 
  delay = 0 
}: OptimizedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <Suspense fallback={
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eco-green"></div>
        </div>
      }>
        {children}
      </Suspense>
    </motion.section>
  );
});

export default OptimizedSection; 