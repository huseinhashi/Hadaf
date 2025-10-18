"use client";

import { motion } from "framer-motion";
import { Coffee, Cog, Wrench, Package, Factory, Zap, Shield, Target } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const backgroundIcons = [
    { Icon: Factory, position: "top-10 left-10", size: "w-8 h-8", delay: 0 },
    { Icon: Cog, position: "top-20 right-16", size: "w-10 h-10", delay: 0.2 },
    { Icon: Wrench, position: "top-32 left-20", size: "w-6 h-6", delay: 0.4 },
    { Icon: Package, position: "top-16 right-8", size: "w-12 h-12", delay: 0.6 },
    { Icon: Coffee, position: "bottom-20 left-12", size: "w-14 h-14", delay: 0.8 },
    { Icon: Zap, position: "bottom-32 right-20", size: "w-8 h-8", delay: 1.0 },
    { Icon: Shield, position: "bottom-16 left-24", size: "w-10 h-10", delay: 1.2 },
    { Icon: Target, position: "bottom-24 right-12", size: "w-6 h-6", delay: 1.4 },
  ];

  return (
    <section className="pt-16 sm:pt-20 md:pt-24 pb-2 sm:pb-3 md:pb-4 lg:pb-8 relative overflow-hidden ">
      {/* Background Icons */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {backgroundIcons.map((item, index) => {
          const Icon = item.Icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ delay: item.delay, duration: 0.8 }}
              className={`absolute ${item.position} ${item.size} text-gray-400 dark:text-gray-600`}
            >
              <Icon className="w-full h-full" />
            </motion.div>
          );
        })}
      </div>

      {/* Video Background - Card style with margins */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center px-2 sm:px-4 md:px-6 py-2 sm:py-4 md:py-6">
        <div className="w-full max-w-[98%] sm:max-w-[95%] md:max-w-[92%] lg:max-w-[90%] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover"
            poster="/images/img_1.jpg"
            onLoadStart={() => {
              // Start loading video when user interacts or after a delay
              setTimeout(() => {
                const video = document.querySelector('video');
                if (video) {
                  video.preload = 'auto';
                  video.load();
                }
              }, 1000);
            }}
          >
            <source src="/Intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Blur Background - Extended beyond video edges */}
     {/* Blur overlay for screens below 1024px (top-bottom gradient) */}
     <div className=" absolute inset-0 w-full h-full flex items-center justify-center px-2 sm:px-4 md:px-6 py-2 sm:py-4 md:py-6">
       <div className="w-full max-w-[98%] sm:max-w-[95%] md:max-w-[92%] lg:max-w-[90%] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] rounded-xl sm:rounded-2xl overflow-hidden relative">
         {/* Extended blur overlay - covers video + extra space */}
         <div
           className="absolute -inset-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md lg:hidden"
           style={{
             WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
             maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
           }}
         ></div>
       </div>
     </div>
     
     {/* Blur overlay for screens 1024px and above (left-right gradient) */}
     <div className="absolute inset-0 w-full h-full flex items-center justify-center px-2 sm:px-4 md:px-6 py-2 sm:py-4 md:py-6">
       <div className="w-full max-w-[98%] sm:max-w-[95%] md:max-w-[92%] lg:max-w-[90%] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] rounded-xl sm:rounded-2xl overflow-hidden relative">
         {/* Extended blur overlay - covers video + extra space */}
         <div
           className="absolute -inset-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md hidden lg:block"
           style={{
             WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
             maskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
           }}
         ></div>
       </div>
     </div>



      {/* Content overlay */}
      <div className=" relative z-10 w-full flex items-center justify-center px-2 sm:px-4 md:px-6">
        <div className="w-full max-w-[98%] sm:max-w-[95%] md:max-w-[92%] lg:max-w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-end lg:items-center h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
        {/* Left Content - 1/2 of hero, positioned to the left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 relative flex justify-start items-end lg:items-center"
        >
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 w-full pl-4 sm:pl-6 md:pl-8 lg:pl-10 pb-0 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-medium">
                Industrial Cup Manufacturing Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight"
            >
<span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Hadaf Industrial Cups</span>
<br />
              <span className="text-gray-700 dark:text-gray-300">Where precision meets production</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xs sm:text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              From concept to container, we manufacture industrial cups that exceed expectations with uncompromising quality for Somali businesses.
            </motion.p>
 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4"
            >
             
              <Link 
                href="/contact"
                className="group px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-2.5 rounded-full bg-white dark:bg-gray-800 border border-orange-500 text-orange-600 dark:text-orange-400 font-semibold hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-300 text-xs sm:text-sm md:text-sm shadow-lg hover:shadow-xl"
              >
                Order Now
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - 1/2 of hero, video shows through without blur */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="lg:col-span-1 relative"
        >
          {/* This area shows the video clearly without any blur overlay */}
          <div className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] rounded-xl sm:rounded-2xl overflow-hidden">
            {/* Video shows through clearly on the right half */}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};
 
export default Hero;

