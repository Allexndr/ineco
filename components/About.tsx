'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Leaf, Target, Sparkles, TreePine, Flower2, Globe } from 'lucide-react';
import { festivalInfo } from '@/data/festival-data';

export default function About() {
  const features = [
    {
      icon: Users,
      title: 'Инклюзивность',
      description: 'Создаем пространство, доступное для всех, независимо от возможностей',
      gradient: 'from-eco-green to-eco-leaf-green',
      color: 'text-eco-green'
    },
    {
      icon: Leaf,
      title: 'Экология',
      description: 'Продвигаем экологичные решения и устойчивое развитие',
      gradient: 'from-eco-orange to-eco-sun-yellow',
      color: 'text-eco-orange'
    },
    {
      icon: Heart,
      title: 'Сообщество',
      description: 'Объединяем людей для создания лучшего будущего',
      gradient: 'from-eco-sky-blue to-eco-forest-green',
      color: 'text-eco-sky-blue'
    },
    {
      icon: Target,
      title: 'Образование',
      description: 'Обучаем практическим навыкам экологичного образа жизни',
      gradient: 'from-eco-earth-brown to-eco-orange',
      color: 'text-eco-earth-brown'
    }
  ];

  const stats = [
    { number: '18', label: 'Площадок', icon: TreePine },
    { number: '50+', label: 'Мастер-классов', icon: Flower2 },
    { number: '2000+', label: 'Ожидаемых гостей', icon: Users },
    { number: '24', label: 'Часа активности', icon: Globe }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white/80 to-eco-sage/10 backdrop-blur-sm relative overflow-hidden">
      {/* Декоративные элементы */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-eco-green/5 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-eco-orange/5 rounded-full blur-2xl"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-gradient mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            О фестивале
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {festivalInfo.description}
          </motion.p>
        </motion.div>

        {/* Миссия */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-eco p-12 md:p-16 mb-20 relative overflow-hidden"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-8 right-8 text-eco-green/20"
          >
            <Sparkles size={40} />
          </motion.div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.h3 
              className="text-4xl md:text-5xl font-black text-gradient mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Наша миссия
            </motion.h3>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {festivalInfo.mission}
            </motion.p>
          </div>
        </motion.div>

        {/* Особенности */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="card-eco p-8 text-center group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <IconComponent className="h-10 w-10 text-white" />
                </motion.div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 bg-eco-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div 
                  className="text-5xl font-black text-gradient mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-semibold text-lg">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 