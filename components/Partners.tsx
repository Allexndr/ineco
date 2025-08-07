'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Globe, Leaf, Sparkles, TreePine, Heart, Users, BookOpen } from 'lucide-react';
import OptimizedImage from './ui/OptimizedImage';

const partners = [
  {
    name: 'Chevron',
    description: 'Главный партнер фестиваля',
    logo: '/images/logos/chevron.png',
    color: 'from-blue-500 to-red-500',
    delay: 0
  },
  {
    name: 'ITeachMe',
    description: 'Образовательные технологии',
    logo: '/images/logos/iteachme.png',
    color: 'from-purple-500 to-blue-500',
    delay: 0.1
  },
  {
    name: 'InEco',
    description: 'Организатор фестиваля',
    logo: '/images/logos/ineco.png',
    color: 'from-eco-green to-eco-forest-green',
    delay: 0.2
  },
  {
    name: 'Ботанический сад',
    description: 'Площадка проведения',
    logo: '/images/logos/botsad.png',
    color: 'from-eco-sage to-eco-green',
    delay: 0.3
  },
  {
    name: 'Институт',
    description: 'Научные исследования',
    logo: '/images/logos/institute.png',
    color: 'from-eco-orange to-eco-sun-yellow',
    delay: 0.4
  }
];

export default function Partners() {
  return (
    <section id="partners" className="section-padding bg-gradient-to-br from-white/90 to-eco-sage/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gradient mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Наши партнеры
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Вместе с нашими партнерами мы создаем уникальный опыт, 
            объединяющий экологию, технологии и инклюзию
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: partner.delay }}
              className="card-eco p-8 text-center group"
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.25)'
              }}
            >
              <motion.div
                className={`w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                whileHover={{ 
                  rotate: 5,
                  scale: 1.1
                }}
              >
                <OptimizedImage
                  src={partner.logo}
                  alt={partner.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-eco-green transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {partner.name}
              </motion.h3>
              
              <p className="text-gray-600 leading-relaxed">
                {partner.description}
              </p>
              
              <motion.div
                className="mt-6 inline-flex items-center space-x-2 text-eco-green font-semibold"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span>Узнать больше</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Дополнительная информация о партнерстве */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-eco-green/10 to-eco-orange/10 rounded-3xl p-8 backdrop-blur-sm border border-eco-green/20">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Станьте партнером фестиваля
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Присоединяйтесь к нам в создании экологичного будущего. 
              Вместе мы можем сделать больше для планеты и общества.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Связаться с нами
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 