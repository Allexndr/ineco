'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User, MapPin, Calendar, Sparkles, TreePine, Flower2, Globe } from 'lucide-react';
import { festivalZones, stageEvents, exhibitions } from '@/data/festival-data';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/data/translations';

type TabType = 'zones' | 'stage' | 'exhibitions';

export default function Program() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('zones');

  const tabs = [
    { id: 'zones', labelKey: 'program.tabs.zones', icon: TreePine },
    { id: 'stage', labelKey: 'program.tabs.stage', icon: Sparkles },
    { id: 'exhibitions', labelKey: 'program.tabs.exhibitions', icon: Flower2 }
  ] as const;

  return (
    <section id="program" className="section-padding bg-gradient-to-br from-white/80 to-eco-sage/10 backdrop-blur-sm relative overflow-hidden">
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
        className="absolute top-20 right-20 w-40 h-40 bg-eco-green/5 rounded-full blur-3xl"
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
        className="absolute bottom-20 left-20 w-32 h-32 bg-eco-orange/5 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-gradient mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {getTranslation('program.title', language)}
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {getTranslation('program.subtitle', language)}
          </motion.p>
        </motion.div>

        {/* Вкладки */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`program-tab flex items-center space-x-3 ${activeTab === tab.id ? 'active' : ''}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="h-5 w-5" />
                <span>{getTranslation(tab.labelKey, language)}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Контент вкладок */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'zones' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {festivalZones.map((zone, index) => (
                  <motion.div
                    key={zone.id}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="card-eco p-8 group"
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex items-start mb-6">
                      <motion.div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                        style={{ backgroundColor: `${zone.color}20` }}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        {zone.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gradient transition-all duration-300">
                          {zone.name}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{zone.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {zone.activities.map((activity) => (
                        <motion.div 
                          key={activity.id} 
                          className="border-l-4 border-eco-green/30 pl-4 py-3 bg-white/50 rounded-r-lg"
                          whileHover={{ borderLeftColor: zone.color, backgroundColor: `${zone.color}10` }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 text-lg">{activity.title}</h4>
                              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{activity.description}</p>
                              {activity.speaker && (
                                <div className="flex items-center mt-3 text-sm text-gray-500">
                                  <User className="h-4 w-4 mr-2" />
                                  <span className="font-medium">{activity.speaker}</span>
                                </div>
                              )}
                            </div>
                            <div className="text-right ml-6 pr-2">
                              <motion.div 
                                className="text-xl font-bold text-gradient"
                                whileHover={{ scale: 1.1 }}
                              >
                                {activity.time}
                              </motion.div>
                              <div className="text-xs text-gray-500 mt-1 font-medium">
                                {activity.duration}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'stage' && (
              <div className="max-w-5xl mx-auto">
                <motion.div 
                  className="card-eco p-8 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-black text-gradient mb-4">Главная сцена</h3>
                    <p className="text-lg text-gray-700">Официальные церемонии, лекции и тренинги от спикеров, фильмы, концерт и лечебная музыка</p>
                  </div>
                  <div className="space-y-6">
                    {stageEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
                            <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>
                            <div className="flex items-center text-sm text-gray-600">
                              <User className="h-4 w-4 mr-2" />
                              <span className="font-medium">{event.speaker}</span>
                            </div>
                          </div>
                          <div className="text-right ml-6 pr-4">
                            <motion.div 
                              className="text-3xl font-black text-gradient"
                              whileHover={{ scale: 1.1 }}
                            >
                              {event.time}
                            </motion.div>
                            <div className="text-sm text-gray-600 mt-2 font-medium">
                              {event.duration}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'exhibitions' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {exhibitions.map((exhibition, index) => (
                  <motion.div
                    key={exhibition.id}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card-eco p-8 group"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-all duration-300">
                      {exhibition.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{exhibition.description}</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-3 text-eco-green" />
                        <span className="font-medium">{exhibition.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-3 text-eco-orange" />
                        <span className="font-medium">{exhibition.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Кнопка скачивания программы */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-xl px-12 py-5 font-bold"
          >
            <Calendar className="h-6 w-6 mr-3 inline" />
            Скачать полную программу (PDF)
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 