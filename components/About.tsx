"use client";

import { motion } from "framer-motion";
import { Code2, Github, Terminal, Heart } from "lucide-react";
import Image from "next/image";

const About = () => {
  const stats = [
    { value: "3+", label: "Years Experience", icon: Terminal },
    { value: "50+", label: "Projects Completed", icon: Code2 },
    { value: "95%", label: "Client Satisfaction", icon: Heart },
    { value: "40+", label: "Github Repos", icon: Github },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center lg:justify-between">
        {/* Image Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-full lg:w-[45%] hidden md:flex justify-center mb-8 md:mb-12"
        >
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[384px] md:h-[384px]">
            {/* Gradient Containers */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/40 to-purple-400/40 transform rotate-6" />
            <div className="absolute inset-0 rounded-lg border-4 border-purple-400/50 transform -rotate-6" />

            {/* Image Container */}
            <div className="absolute inset-0 rounded-lg overflow-hidden border-4 border-blue-400">
              <Image
                src="/images/about.jpg" // Replace with your image path
                alt="Husein Hashi"
                width={384} // Match the original width
                height={384} // Match the original height
                className="object-cover w-full h-full "
              />
            </div>

            {/* Floating Badges (Pure Colors) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-[#DB7447] rounded-xl border-2 border-white/20 shadow-lg"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-[#DB7447] to-purple-400 rounded-xl border-2 border-white/20 shadow-lg"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-full lg:w-[50%] px-4 md:px-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
            I&apos;m{" "}
            <span className="font-semibold text-white">Husein Hashi</span>, a
            full-stack developer with 3+ years of experience building scalable
            web and mobile apps. Based in Somalia, I offer affordable,
            high-quality solutions for startups and small businesses.
          </p>
          <p className="text-gray-400 italic text-sm sm:text-base mb-8">
            Fun Fact: I debug code faster than I brew my coffee, but both are
            essential for my day!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {stat.value}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
