'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Leaf, Sparkles } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-eco-green/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-6">
          {/* Логотип */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <motion.div 
              className="w-12 h-12 bg-eco-gradient rounded-2xl flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Leaf className="text-white h-6 w-6" />
            </motion.div>
            <div>
              <motion.h1 
                className="text-2xl font-black text-gradient"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                InEco Fest
              </motion.h1>
              <motion.p 
                className="text-xs text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                19 июля 2025
              </motion.p>
            </div>
          </motion.div>

          {/* Десктопная навигация */}
          <nav className="hidden lg:flex items-center space-x-8">
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
                className="text-gray-700 hover:text-eco-green transition-all duration-300 font-semibold relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-eco-gradient transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Регистрация
            </motion.button>
          </nav>

          {/* Мобильная кнопка меню */}
          <motion.button
            onClick={onMenuClick}
            className="lg:hidden p-3 rounded-2xl bg-eco-green/10 hover:bg-eco-green/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Menu className="h-6 w-6 text-eco-green" />
          </motion.button>
        </div>
      </div>

      {/* Декоративные элементы */}
      {!isScrolled && (
        <>
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-4 right-20 text-eco-green/20"
          >
            <Sparkles size={20} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-6 right-32 text-eco-orange/20"
          >
            <Leaf size={16} />
          </motion.div>
        </>
      )}
    </motion.header>
  );
} 