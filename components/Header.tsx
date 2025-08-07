'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Leaf, Sparkles, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/data/translations';
import OptimizedImage from './ui/OptimizedImage';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'kk' : 'ru');
  };

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
        <div className="flex items-center justify-between py-4">
          {/* Логотипы партнеров */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-6"
          >
            {/* Chevron логотип */}
            <motion.div 
              className="w-16 h-16 flex items-center justify-center"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <OptimizedImage
                src="/images/logos/chevron.png"
                alt="Chevron"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            {/* ITeachMe логотип */}
            <motion.div 
              className="w-16 h-16 flex items-center justify-center"
              whileHover={{ rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <OptimizedImage
                src="/images/logos/iteachme.png"
                alt="ITeachMe"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            {/* InEco логотип */}
            <motion.div 
              className="w-16 h-16 flex items-center justify-center"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <OptimizedImage
                src="/images/logos/ineco.png"
                alt="InEco Fest"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            {/* Ботанический сад логотип */}
            <motion.div 
              className="w-16 h-16 flex items-center justify-center"
              whileHover={{ rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <OptimizedImage
                src="/images/logos/botsad.png"
                alt="Ботанический сад"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            {/* Институт логотип */}
            <motion.div 
              className="w-16 h-16 flex items-center justify-center"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <OptimizedImage
                src="/images/logos/institute.png"
                alt="Институт"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Десктопная навигация */}
          <nav className="hidden lg:flex items-center space-x-6">
            {[
              { href: '#home', key: 'nav.home' },
              { href: '#about', key: 'nav.about' },
              { href: '#program', key: 'nav.program' },
              { href: '#map', key: 'nav.map' },
              { href: '#contact', key: 'nav.contact' }
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-eco-green transition-all duration-300 font-semibold relative group px-4 py-2 rounded-xl hover:bg-eco-green/10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {getTranslation(item.key, language)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-eco-gradient transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            
            {/* Языковой переключатель */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-xl hover:bg-eco-green/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="text-gray-700 font-semibold">{language.toUpperCase()}</span>
              <motion.div 
                className="w-6 h-6 bg-eco-gradient rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white text-xs font-bold">
                  {language === 'ru' ? '🇷🇺' : '🇰🇿'}
                </span>
              </motion.div>
            </motion.button>
          </nav>

          {/* Мобильная кнопка меню */}
          <motion.button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
} 