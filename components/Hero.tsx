'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ChevronDown, Leaf, Sparkles, TreePine } from 'lucide-react';
import { festivalInfo } from '@/data/festival-data';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/data/translations';
import OptimizedImage from './ui/OptimizedImage';

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-eco-green/10 via-eco-orange/5 to-eco-sky-blue/5 eco-pattern" />
      
      {/* Красивые анимированные элементы фона */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.25, 1],
            rotate: [0, 90, 180],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-36 h-36 bg-eco-gradient rounded-full blur-2xl opacity-25"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [180, 90, 0],
            opacity: [0.15, 0.4, 0.15]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-sunset-gradient rounded-full blur-2xl opacity-20"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-nature-gradient rounded-full blur-3xl opacity-15"
        />
      </div>

      {/* Плавающие иконки природы */}
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 8, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 left-16 text-eco-green/25"
      >
        <TreePine size={70} />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -12, 0]
        }}
        transition={{ 
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-48 right-24 text-eco-orange/25"
      >
        <Leaf size={55} />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-32 left-32 text-eco-sky-blue/25"
      >
        <Sparkles size={45} />
      </motion.div>

      {/* Декоративные изображения */}


      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-40 left-10 w-28 h-28 opacity-20"
      >
        <OptimizedImage
          src="/images/hero/hero-man.png"
          alt="Парень"
          width={112}
          height={112}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Логотип InEco Fest */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <OptimizedImage
              src="/images/logos/ineco.png"
              alt="InEco Fest Logo"
              width={300}
              height={150}
              className="max-w-xs md:max-w-sm lg:max-w-md"
              priority={true}
            />
          </motion.div>

          {/* Основной заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="mb-12"
          >
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            >
              <span className="text-gradient block mb-2">InEco</span>
              <span className="text-gradient-sunset block">Fest</span>
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {getTranslation('hero.subtitle', language)}
            </motion.p>
          </motion.div>

          {/* Информация о фестивале */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div 
              className="glass-effect p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 bg-eco-green/20 rounded-2xl">
                  <Calendar className="h-8 w-8 text-eco-green" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-lg">{festivalInfo.date}</p>
                  <p className="text-sm text-gray-600">{getTranslation('hero.date', language)}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-effect p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 bg-eco-orange/20 rounded-2xl">
                  <MapPin className="h-8 w-8 text-eco-orange" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-lg">{festivalInfo.location}</p>
                  <p className="text-sm text-gray-600">{getTranslation('hero.location', language)}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-effect p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 bg-eco-sky-blue/20 rounded-2xl">
                  <Clock className="h-8 w-8 text-eco-sky-blue" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-lg">{festivalInfo.time}</p>
                  <p className="text-sm text-gray-600">{getTranslation('hero.time', language)}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Кнопки действий */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-xl px-10 py-5 font-bold"
            >
              {getTranslation('hero.download', language)}
            </motion.button>
          </motion.div>

          {/* Описание */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              {festivalInfo.description}
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="inline-flex items-center space-x-2 bg-eco-green/10 px-6 py-3 rounded-2xl"
            >
              <Leaf className="h-5 w-5 text-eco-green" />
              <span className="text-eco-green font-semibold">{getTranslation('hero.platforms', language)}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Кнопка прокрутки вниз */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="block p-4 rounded-full glass-effect hover:bg-white/30 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown className="h-8 w-8 text-gray-700" />
        </motion.a>
      </motion.div>
    </section>
  );
} 