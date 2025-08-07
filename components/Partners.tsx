'use client';

import { motion } from 'framer-motion';
import { festivalInfo } from '@/data/festival-data';
import Image from 'next/image';

export default function Partners() {
  return (
    <section id="partners" className="section-padding bg-eco-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши партнеры
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Благодарим наших партнеров за поддержку в организации фестиваля
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {festivalInfo.partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="card p-8 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {partner.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Призыв к партнерству */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-eco-green/10 to-eco-orange/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Станьте партнером
            </h3>
            <p className="text-gray-600 mb-6">
              Присоединяйтесь к нам в создании экологичного и инклюзивного будущего
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Связаться с нами
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 