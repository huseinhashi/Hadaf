"use client";

import { motion } from "framer-motion";
import { 
  Coffee, 
  Cog, 
  Wrench, 
  Package, 
  Factory, 
  Zap,
  Shield,
  Target
} from "lucide-react";

const IndustrialBackground = () => {
  // Industrial icons with different sizes and animations
  const icons = [
    { Icon: Coffee, size: "w-4 h-4", delay: 0, duration: 8 },
    { Icon: Cog, size: "w-3 h-3", delay: 1, duration: 12 },
    { Icon: Wrench, size: "w-5 h-5", delay: 2, duration: 10 },
    { Icon: Package, size: "w-4 h-4", delay: 0.5, duration: 9 },
    { Icon: Factory, size: "w-6 h-6", delay: 1.5, duration: 15 },
    { Icon: Zap, size: "w-3 h-3", delay: 3, duration: 7 },
    { Icon: Shield, size: "w-4 h-4", delay: 2.5, duration: 11 },
    { Icon: Target, size: "w-5 h-5", delay: 4, duration: 13 },
  ];

  // Generate random positions for icons
  const generateIconPositions = () => {
    return icons.map((icon, index) => ({
      ...icon,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
    }));
  };

  const iconPositions = generateIconPositions();

  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent" />
      
      {/* Animated industrial icons */}
      {iconPositions.map((item, index) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={index}
            className={`absolute ${item.size} text-gray-300/20 dark:text-gray-600/30`}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [item.rotation, item.rotation + 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        );
      })}

      {/* Additional floating particles */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-orange-400/30 dark:bg-blue-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(219, 116, 71, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(7, 138, 168, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Corner accent glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-orange-400/10 to-transparent dark:from-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-blue-400/10 to-transparent dark:from-orange-400/10 rounded-full blur-3xl" />
    </div>
  );
};

export default IndustrialBackground;
