'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, MapPin, Clock, Users, Sparkles, TreePine } from 'lucide-react';
import { festivalZones } from '@/data/festival-data';

export default function InteractiveMap() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  // Схема зон на основе реальной карты фестиваля
  const zonePositions = [
    { id: 'iteachme', x: 15, y: 15, label: '1', color: '#22c55e', size: 'large' },
    { id: 'eco-city', x: 75, y: 15, label: '2', color: '#16a34a', size: 'large' },
    { id: 'plant-transplant', x: 85, y: 35, label: '3', color: '#4ade80', size: 'medium' },
    { id: 'floristics', x: 15, y: 65, label: '4', color: '#f97316', size: 'medium' },
    { id: 'steam', x: 75, y: 65, label: '5', color: '#ea580c', size: 'large' },
    { id: 'mobile-photography', x: 85, y: 85, label: '6', color: '#dc2626', size: 'medium' },
    { id: 'eco-lifestyle', x: 45, y: 85, label: '7', color: '#059669', size: 'medium' },
    { id: 'fashion-show', x: 25, y: 45, label: '8', color: '#8b5cf6', size: 'small' },
    { id: 'eco-quest', x: 35, y: 25, label: '9', color: '#06b6d4', size: 'small' },
    { id: 'drawing', x: 55, y: 25, label: '10', color: '#f59e0b', size: 'medium' },
    { id: 'charity-fair', x: 5, y: 45, label: '11', color: '#10b981', size: 'large' },
    { id: 'art-exhibition', x: 95, y: 45, label: '12', color: '#ef4444', size: 'medium' },
    { id: 'movie-screening', x: 25, y: 75, label: '13', color: '#6366f1', size: 'medium' },
    { id: 'book-club', x: 55, y: 55, label: '14', color: '#84cc16', size: 'small' },
    { id: 'national-games', x: 65, y: 45, label: '15', color: '#f97316', size: 'small' },
    { id: 'labyrinth', x: 45, y: 65, label: '16', color: '#8b5cf6', size: 'small' },
    { id: 'botanical-tour', x: 35, y: 55, label: '17', color: '#059669', size: 'medium' },
    { id: 'npo-exhibition', x: 75, y: 35, label: '18', color: '#06b6d4', size: 'medium' },
  ];

  const handleZoneClick = (zoneId: string) => {
    setSelectedZone(zoneId);
  };

  const handleDownloadMap = () => {
    // Здесь будет логика скачивания PDF карты
    alert('Скачивание карты...');
  };

  const getZoneSize = (size: string) => {
    switch (size) {
      case 'large': return 'w-20 h-20 text-lg';
      case 'medium': return 'w-16 h-16 text-base';
      case 'small': return 'w-12 h-12 text-sm';
      default: return 'w-16 h-16 text-base';
    }
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Интерактивная карта */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-gradient-to-br from-eco-green/5 to-eco-orange/5 rounded-3xl p-8 min-h-[600px] border border-white/20 backdrop-blur-sm"
            >
              {/* Заголовок карты */}
              <div className="text-center mb-8">
                <motion.h3 
                  className="text-3xl font-black text-gradient mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  InEco Fest 2025
                </motion.h3>
                <motion.p 
                  className="text-lg text-gray-700 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Главный Ботанический Сад
                </motion.p>
              </div>

              {/* Зоны на карте */}
              <div className="relative w-full h-96">
                {zonePositions.map((zone) => {
                  const zoneData = festivalZones.find(z => z.id === zone.id);
                  return (
                    <motion.button
                      key={zone.id}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleZoneClick(zone.id)}
                      className={`map-zone absolute ${getZoneSize(zone.size)} rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2 border-white/20 backdrop-blur-sm transition-all duration-300`}
                      style={{
                        left: `${zone.x}%`,
                        top: `${zone.y}%`,
                        backgroundColor: zone.color,
                        transform: 'translate(-50%, -50%)'
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + zonePositions.indexOf(zone) * 0.1 }}
                    >
                      {zone.label}
                    </motion.button>
                  );
                })}

                {/* Центральная сцена */}
                <motion.div 
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="w-24 h-24 bg-eco-orange rounded-full flex items-center justify-center text-white font-bold shadow-xl border-2 border-white/20 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-sm">СЦЕНА</div>
                      <div className="text-xs">STAGE</div>
                    </div>
                  </div>
                </motion.div>

                {/* Вход */}
                <motion.div 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="bg-gray-800 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg border border-white/20">
                    <div className="text-center">
                      <div>ВХОД</div>
                      <div className="text-xs">ENTRANCE</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Легенда */}
              <motion.div 
                className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                {zonePositions.map((zone, index) => {
                  const zoneData = festivalZones.find(z => z.id === zone.id);
                  return (
                    <motion.div 
                      key={zone.id} 
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                      onClick={() => handleZoneClick(zone.id)}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div 
                        className="w-4 h-4 rounded-full shadow-sm"
                        style={{ backgroundColor: zone.color }}
                      />
                      <span className="text-sm text-gray-700 font-medium">
                        {zone.label}. {zoneData?.name || 'Зона'}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* Информация о выбранной зоне */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {selectedZone ? (
                <motion.div
                  key={selectedZone}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                  className="card-eco p-8"
                >
                  <div className="flex justify-between items-start mb-6">
                    <motion.h3 
                      className="text-2xl font-bold text-gradient"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {festivalZones.find(z => z.id === selectedZone)?.name}
                    </motion.h3>
                    <motion.button
                      onClick={() => setSelectedZone(null)}
                      className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.button>
                  </div>
                  
                  <motion.p 
                    className="text-gray-700 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {festivalZones.find(z => z.id === selectedZone)?.description}
                  </motion.p>
                  
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <h4 className="font-bold text-gray-900 flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-eco-green" />
                      Активности:
                    </h4>
                    {festivalZones.find(z => z.id === selectedZone)?.activities.map((activity, index) => (
                      <motion.div 
                        key={activity.id} 
                        className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="font-semibold text-gray-900 mb-2">{activity.title}</div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {activity.time}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {activity.duration}
                          </div>
                        </div>
                        {activity.speaker && (
                          <div className="text-sm text-gray-500 mt-2">
                            Ведущий: {activity.speaker}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-eco p-8 text-center"
                >
                  <motion.div 
                    className="text-eco-green/40 mb-6"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <MapPin className="w-20 h-20 mx-auto" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Выберите зону
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Кликните на любую зону на карте, чтобы узнать подробности о мероприятиях и расписании
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Кнопка скачивания */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadMap}
                className="w-full btn-primary flex items-center justify-center space-x-3 text-lg font-bold py-4"
              >
                <Download className="h-6 w-6" />
                <span>Скачать карту (PDF)</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 