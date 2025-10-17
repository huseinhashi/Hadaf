"use client";

import { motion } from "framer-motion";
import { Factory, Shield, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const About = () => {
  const features = [
    {
      icon: Factory,
      title: "State-of-the-Art Manufacturing",
      description: "Advanced production facilities with precision machinery"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes"
    },
    {
      icon: Award,
      title: "Industry Standards",
      description: "Meeting international manufacturing standards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of experience"
    }
  ];

  const stats = [
    { value: "5+", label: "Years of Excellence", suffix: "" },
    { value: "1000+", label: "Daily Production", suffix: " cups" },
    { value: "98%", label: "Quality Rate", suffix: "" },
    { value: "50+", label: "Business Partners", suffix: "" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Factory className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-400 text-sm font-medium">Manufacturing Excellence</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">About </span>
            <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Hadaf</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Leading Somalia&apos;s industrial cup manufacturing with precision, quality, and innovation. 
            We transform raw materials into reliable containers that power businesses across the region.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Side - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                  src="/images/img_4.jpg"
                  alt="Hadaf Industrial Manufacturing Facility"
                  width={600}
                  height={400}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-800 font-semibold">ISO Certified</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
            <motion.div
                  key={index}
              initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-4 text-center shadow-sm dark:shadow-none"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                    <span className="text-orange-400">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
          </div>
        </motion.div>

          {/* Right Side - Content */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Precision Manufacturing for <span className="text-orange-400">Modern Business</span>
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  At Hadaf Industrial Cups, we combine traditional craftsmanship with modern manufacturing techniques 
                  to produce industrial cups that exceed expectations. Our commitment to quality and precision has 
                  made us the trusted choice for businesses across Somalia.
                </p>
                
                <p>
                  From small startups to large enterprises, we understand that every business needs reliable, 
                  durable containers. That&apos;s why we&apos;ve invested in state-of-the-art equipment and trained 
                  our team to deliver products that meet the highest standards.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="/about"
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More About Our Process
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
