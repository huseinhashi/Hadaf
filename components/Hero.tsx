"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-6 md:pb-8 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Video Background - Card style with margins */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center px-2 sm:px-4 md:px-6 py-2 sm:py-4 md:py-6">
        <div className="w-full max-w-[98%] sm:max-w-[95%] md:max-w-[92%] h-[350px] sm:h-[450px] md:h-[550px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Blur Background - Same size as video, pushed from corners */}
     {/* Left overlay with blur */}
     <div className="absolute inset-0 w-full h-full flex items-center justify-center px-2 sm:px-4 md:px-6 py-2 sm:py-4 md:py-6">
  <div className="w-full max-w-[98%] sm:max-w-[95%] md:max-w-[92%] h-[350px] sm:h-[450px] md:h-[550px] rounded-xl sm:rounded-2xl overflow-hidden relative">
    <div
      className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md"
      style={{
        WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
        maskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
      }}
    ></div>
  </div>
</div>



      {/* Content overlay */}
      <div className="relative z-10 w-full flex items-center justify-center px-2 sm:px-4 md:px-6">
        <div className="w-full max-w-[98%] sm:max-w-[95%] md:max-w-[92%] grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start lg:items-center min-h-[350px] sm:min-h-[450px] md:min-h-[550px]">
        {/* Left Content - 1/2 of hero, positioned to the left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 relative flex justify-start items-start lg:items-center"
        >
          <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full pl-6 sm:pl-8 md:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-medium">
                More than a video editor tools
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight"
            >
Hadaf Industrial Cups
<br />
              <span className="text-gray-700 dark:text-gray-300">Where precision meets production
              .</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              From concept to container, we manufacture industrial cups that exceed expectations with uncompromising quality for Somali businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-sm sm:text-base">
                Download
              </button>
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white dark:bg-gray-800 border border-orange-500 text-orange-600 dark:text-orange-400 font-semibold hover:bg-orange-50 dark:hover:bg-orange-900/20 transition text-sm sm:text-base">
                Sign Up for free
              </button>
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
          <div className="h-[350px] sm:h-[450px] md:h-[550px] rounded-xl sm:rounded-2xl overflow-hidden">
            {/* Video shows through clearly on the right half */}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
