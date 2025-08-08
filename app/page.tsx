'use client';

import { useState, useEffect } from 'react';
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
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Program from '@/components/Program';
import InteractiveMap from '@/components/InteractiveMap';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [leaves, setLeaves] = useState<Array<{id: number, left: number, delay: number, type: string}>>([]);

  useEffect(() => {
    // Создаем анимированные листья разных типов
    const newLeaves = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      type: ['leaf', 'flower', 'sparkle'][Math.floor(Math.random() * 3)]
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-cream via-white to-eco-sage/20 relative overflow-x-hidden">
      {/* Анимированные элементы фона */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className={`absolute ${leaf.type === 'leaf' ? 'leaf' : leaf.type === 'flower' ? 'flower' : 'sparkle'}`}
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${12 + Math.random() * 8}s`
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: leaf.delay * 0.1 }}
        />
      ))}

      {/* Плавающие элементы природы */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 text-eco-green/20"
      >
        <TreePine size={60} />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-40 right-20 text-eco-orange/20"
      >
        <Flower2 size={50} />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-40 left-20 text-eco-sky-blue/20"
      >
        <Sparkles size={40} />
      </motion.div>

      {/* Мобильное меню */}
      <div className={`mobile-menu fixed inset-0 z-50 lg:hidden ${isMenuOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center p-6 border-b border-eco-green/20">
          <motion.h2 
            className="text-2xl font-bold text-gradient"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            InEco Fest
          </motion.h2>
          <motion.button 
            onClick={() => setIsMenuOpen(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-eco-green/10 hover:bg-eco-green/20 transition-colors"
          >
            <X className="h-6 w-6 text-eco-green" />
          </motion.button>
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

        <About />
        
        <Program />
        
        <InteractiveMap />
        
        <Partners />
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
} 