'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Clock, Users } from 'lucide-react';
import { festivalZones } from '@/data/festival-data';
import OptimizedImage from './ui/OptimizedImage';

export default function InteractiveMap() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const handleZoneClick = (zoneId: string) => {
    setSelectedZone(zoneId);
  };

  const handleDownloadMap = () => {
    const link = document.createElement('a');
    link.href = '/festival-map.pdf';
    link.download = 'InEco_Fest_2025_Карта.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="map" className="section-padding bg-gradient-to-br from-white/80 to-eco-sage/10 backdrop-blur-sm relative overflow-hidden">
      {/* Декоративные элементы */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
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
          scale: [1.1, 1, 1.1]
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
            Карта фестиваля
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Изучите расположение 18 зон и спланируйте свой идеальный маршрут
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Карта */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* Официальная карта фестиваля */}
              <div className="relative mb-6">
                <OptimizedImage
                  src="/images/festival-map.svg"
                  alt="Карта фестиваля InEco Fest"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                  priority={true}
                />
              </div>

              {/* Кнопка скачивания */}
              <motion.button
                onClick={handleDownloadMap}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary flex items-center justify-center space-x-3 text-lg font-bold py-4"
              >
                <Download className="h-6 w-6" />
                <span>Скачать карту (PDF)</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Информация о зонах */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Выберите зону</h3>
              <p className="text-gray-600 mb-8">
                Кликните на любую зону на карте, чтобы узнать подробности о мероприятиях и расписании
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {festivalZones.slice(0, 8).map((zone) => (
                  <motion.button
                    key={zone.id}
                    onClick={() => handleZoneClick(zone.id)}
                    className="text-left p-4 rounded-2xl bg-gradient-to-br from-white/60 to-white/40 hover:from-white/80 hover:to-white/60 transition-all duration-300 border border-white/20 hover:border-eco-green/30"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: zone.color }}
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{zone.name}</p>
                        <p className="text-xs text-gray-600">{zone.activities.length} активность</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Модальное окно с деталями зоны */}
        <AnimatePresence>
          {selectedZone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedZone(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const zone = festivalZones.find(z => z.id === selectedZone);
                  if (!zone) return null;

                  return (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">{zone.name}</h3>
                        <motion.button
                          onClick={() => setSelectedZone(null)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <X className="h-6 w-6 text-gray-600" />
                        </motion.button>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{zone.description}</p>
                      
                      <div className="space-y-4">
                        {zone.activities.map((activity) => (
                          <motion.div
                            key={activity.id}
                            className="p-4 rounded-2xl bg-gradient-to-br from-eco-green/10 to-eco-sage/10 border border-eco-green/20"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                              <span className="text-sm text-gray-600">{activity.time}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{activity.duration}</span>
                              </span>
                              {activity.speaker && (
                                <span className="flex items-center space-x-1">
                                  <Users className="h-3 w-3" />
                                  <span>{activity.speaker}</span>
                                </span>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 