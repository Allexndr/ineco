'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, MapPin, Leaf } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [serverTimeOffset, setServerTimeOffset] = useState(0);



  // Обновляем время каждую секунду
  useEffect(() => {
    const updateTime = () => {
      const now = Date.now() + serverTimeOffset;
      const target = new Date(targetDate).getTime();
      const difference = target - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        console.log('Countdown update:', { days, hours, minutes, seconds, difference });
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        console.log('Countdown finished');
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Обновляем сразу
    updateTime();
    
    // Затем каждую секунду
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate, serverTimeOffset]);

  // Синхронизация с сервером каждые 10 минут
  useEffect(() => {
    const syncWithServer = async () => {
      try {
        const response = await fetch('/api/time');
        const data = await response.json();
        const serverTime = data.timestamp;
        const clientTime = Date.now();
        setServerTimeOffset(serverTime - clientTime);
      } catch (error) {
        console.warn('Failed to sync with server time:', error);
      }
    };

    syncWithServer();
    const syncInterval = setInterval(syncWithServer, 600000); // 10 минут

    return () => clearInterval(syncInterval);
  }, []);

  const timeUnits = useMemo(() => [
    { 
      value: timeLeft.days, 
      label: 'Дней', 
      icon: Calendar,
      gradient: 'from-eco-green to-eco-leaf-green'
    },
    { 
      value: timeLeft.hours, 
      label: 'Часов', 
      icon: Clock,
      gradient: 'from-eco-orange to-eco-sun-yellow'
    },
    { 
      value: timeLeft.minutes, 
      label: 'Минут', 
      icon: MapPin,
      gradient: 'from-eco-sky-blue to-eco-forest-green'
    },
    { 
      value: timeLeft.seconds, 
      label: 'Секунд', 
      icon: Leaf,
      gradient: 'from-eco-earth-brown to-eco-orange'
    }
  ], [timeLeft]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {timeUnits.map((unit, index) => {
        const IconComponent = unit.icon;
        return (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="countdown-item group"
            whileHover={{ 
              scale: 1.03, 
              y: -3,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              className="flex flex-col items-center"
            >
              <motion.div
                className={`w-14 h-14 bg-gradient-to-br ${unit.gradient} rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                whileHover={{ rotate: 3 }}
              >
                <IconComponent className="h-7 w-7 text-white" />
              </motion.div>
              
              <motion.div
                key={`${unit.label}-${unit.value}`}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="countdown-number mb-2"
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.div>
              
              <div className="countdown-label font-semibold">
                {unit.label}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
} 