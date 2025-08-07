'use client';

import { motion } from 'framer-motion';
import { festivalInfo } from '@/data/festival-data';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, Sparkles, TreePine } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    { href: '#about', label: 'О фестивале' },
    { href: '#program', label: 'Программа' },
    { href: '#map', label: 'Карта' },
    { href: '#partners', label: 'Партнеры' },
    { href: '#contact', label: 'Контакты' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-eco-forest-green relative overflow-hidden">
      {/* Декоративные элементы */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-eco-green/5 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 left-10 w-40 h-40 bg-eco-orange/5 rounded-full blur-2xl"
      />

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Логотип и описание */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-eco-gradient rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Leaf className="text-white h-7 w-7" />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-3xl font-black text-gradient"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    InEco Fest
                  </motion.h3>
                  <p className="text-sm text-gray-400 font-medium">19 июля 2025</p>
                </div>
              </motion.div>
              <motion.p 
                className="text-gray-300 leading-relaxed text-lg max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {festivalInfo.description}
              </motion.p>
            </motion.div>

            {/* Социальные сети */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-eco-green/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  >
                    <IconComponent className="h-5 w-5 text-gray-300 group-hover:text-eco-green transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Быстрые ссылки */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <TreePine className="h-5 w-5 text-eco-green mr-2" />
              Навигация
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-eco-green transition-all duration-300 font-medium group flex items-center"
                  >
                    <span className="w-2 h-2 bg-eco-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Контакты */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="h-5 w-5 text-eco-orange mr-2" />
              Контакты
            </h4>
            <ul className="space-y-4 text-gray-300">
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Mail className="h-5 w-5 text-eco-green" />
                <span>iteachme2020@gmail.com</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Phone className="h-5 w-5 text-eco-green" />
                <span>+7 708 970 91 52</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <MapPin className="h-5 w-5 text-eco-green" />
                <span>Главный Ботанический Сад</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Нижняя часть футера */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p 
            className="text-gray-400 text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            © 2025 InEco Fest. Все права защищены.
          </motion.p>
          <motion.div 
            className="flex space-x-6 mt-4 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a href="#" className="text-gray-400 hover:text-eco-green transition-colors duration-300 text-sm font-medium">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-eco-green transition-colors duration-300 text-sm font-medium">
              Условия использования
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
} 