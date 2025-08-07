'use client';

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
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
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {timeUnits.map((unit, index) => {
        const IconComponent = unit.icon;
        return (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="countdown-item group"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="flex flex-col items-center"
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${unit.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <IconComponent className="h-8 w-8 text-white" />
              </motion.div>
              
              <motion.div
                key={unit.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
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