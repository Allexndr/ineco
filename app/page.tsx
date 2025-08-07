'use client';

import { useState, useMemo, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Leaf, 
  Heart,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  TreePine,
  Flower2
} from 'lucide-react';
import { festivalInfo } from '@/data/festival-data';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CountdownTimer from '@/components/CountdownTimer';
import OptimizedSection from '@/components/ui/OptimizedSection';

// Ленивая загрузка тяжелых компонентов
const About = lazy(() => import('@/components/About'));
const Program = lazy(() => import('@/components/Program'));
const InteractiveMap = lazy(() => import('@/components/InteractiveMap'));
const Partners = lazy(() => import('@/components/Partners'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

function HomeContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Оптимизированные анимированные элементы - красиво, но не нагружает
  const leaves = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      type: ['leaf', 'flower', 'sparkle'][i % 3]
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-cream via-white to-eco-sage/20 relative overflow-x-hidden">
      {/* Красивые анимированные элементы фона */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className={`absolute ${leaf.type === 'leaf' ? 'leaf' : leaf.type === 'flower' ? 'flower' : 'sparkle'}`}
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${18 + Math.random() * 12}s`
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: leaf.delay * 0.15 }}
        />
      ))}

      {/* Плавающие декоративные элементы */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 text-eco-green/15"
      >
        <TreePine size={50} />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-40 right-20 text-eco-orange/15"
      >
        <Leaf size={45} />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, 12, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-32 left-32 text-eco-sky-blue/15"
      >
        <Sparkles size={40} />
      </motion.div>

      {/* Мобильное меню */}
      <div className={`mobile-menu fixed inset-0 z-50 lg:hidden ${isMenuOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center p-6 border-b border-eco-green/20">
          <h2 className="text-2xl font-bold text-gradient">
            InEco Fest
          </h2>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full bg-eco-green/10 hover:bg-eco-green/20 transition-colors"
          >
            <X className="h-6 w-6 text-eco-green" />
          </button>
        </div>
        <nav className="p-6 space-y-4">
          {[
            { href: '#about', label: 'О фестивале' },
            { href: '#program', label: 'Программа' },
            { href: '#map', label: 'Карта' },
            { href: '#partners', label: 'Партнеры' },
            { href: '#contact', label: 'Контакты' }
          ].map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="block py-3 px-4 text-lg font-medium rounded-2xl hover:bg-eco-green/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </div>

      {/* Основной контент */}
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      
      <main>
        <Hero />
        
        <section id="countdown" className="section-padding bg-gradient-to-br from-white/80 to-eco-sage/10 backdrop-blur-sm pt-32">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gradient mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                До фестиваля осталось
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Присоединяйтесь к нам в создании экологичного будущего
              </motion.p>
              <CountdownTimer targetDate="2025-08-15T09:00:00" />
            </motion.div>
          </div>
        </section>

        <OptimizedSection id="about" className="section-padding" delay={0.2}>
          <About />
        </OptimizedSection>
        
        <OptimizedSection id="program" className="section-padding bg-gradient-to-br from-eco-sage/5 to-white/80" delay={0.3}>
          <Program />
        </OptimizedSection>
        
        <OptimizedSection id="map" className="section-padding" delay={0.4}>
          <InteractiveMap />
        </OptimizedSection>
        
        <OptimizedSection id="partners" className="section-padding bg-gradient-to-br from-eco-cream/30 to-white/80" delay={0.5}>
          <Partners />
        </OptimizedSection>
        
        <OptimizedSection id="contact" className="section-padding" delay={0.6}>
          <Contact />
        </OptimizedSection>
      </main>

      <Suspense fallback={
        <div className="flex items-center justify-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-eco-green"></div>
        </div>
      }>
        <Footer />
      </Suspense>
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
} 