"use client";

import { motion } from "framer-motion";
import { 
  Factory, 
  Shield, 
  Award, 
  ArrowRight,
  MapPin,
  Target,
  Heart,
  Eye,
  Zap,
  Cog
} from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  // Company History Timeline
  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Hadaf Industrial Cups was established with a vision to revolutionize industrial cup manufacturing in Somalia.",
      icon: Factory,
    },
    {
      year: "2020",
      title: "First Production Facility",
      description: "Opened our first manufacturing facility with state-of-the-art equipment and quality control systems.",
      icon: Cog,
    },
    {
      year: "2021",
      title: "Market Expansion",
      description: "Expanded operations to serve businesses across Somalia and neighboring regions.",
      icon: MapPin,
    },
    {
      year: "2022",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification, demonstrating our commitment to quality standards.",
      icon: Award,
    },
    {
      year: "2023",
      title: "Technology Upgrade",
      description: "Invested in advanced manufacturing technology and automated production processes.",
      icon: Zap,
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Continuing to innovate and expand our product range to meet growing market demands.",
      icon: Target,
    },
  ];

  // Manufacturing Process Steps
  const processSteps = [
    {
      step: "01",
      title: "Raw Material Selection",
      description: "Carefully sourced high-quality materials from trusted suppliers",
      image: "/images/img_2.jpg",
    },
    {
      step: "02", 
      title: "Precision Molding",
      description: "Advanced molding technology ensures consistent shape and durability",
      image: "/images/img_3.jpg",
    },
    {
      step: "03",
      title: "Quality Control",
      description: "Rigorous testing at every stage to maintain our high standards",
      image: "/images/img_4.jpg",
    },
    {
      step: "04",
      title: "Packaging & Delivery",
      description: "Secure packaging and efficient delivery to our customers",
      image: "/images/img_1.jpg",
    },
  ];

  // Mission & Vision
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We never compromise on quality, ensuring every cup meets our high standards.",
    },
    {
      icon: Factory,
      title: "Customer Focus",
      description: "Our customers&apos; success is our success. We build lasting partnerships.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent delivery and dependable products that businesses can count on.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously improving our processes and embracing new technologies.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Factory className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">Our Story</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">About </span>
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Hadaf</span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
              Building Somalia&apos;s industrial future, one cup at a time. Discover our journey, 
              our process, and the people behind our success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              From humble beginnings to becoming Somalia&apos;s leading industrial cup manufacturer
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-blue-400 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                      <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                            <Icon className="w-5 h-5 text-orange-400" />
                          </div>
                          <span className="text-2xl font-bold text-orange-400">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex w-8 h-8 bg-orange-400 rounded-full border-4 border-white dark:border-gray-800 items-center justify-center z-10">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              From raw materials to finished products, every step is carefully controlled for quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-3xl font-bold text-white">{step.step}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-200 text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Mission & <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Vision</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Our values drive everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-orange-500/20 rounded-2xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-8 text-center text-white"
          >
            <Eye className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Our Vision for 2030</h3>
            <p className="text-lg max-w-3xl mx-auto">
              To become the leading industrial cup manufacturer in East Africa, expanding our reach 
              to serve businesses across the continent while maintaining our commitment to quality, 
              innovation, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Work <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Together?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Let&apos;s discuss how Hadaf Industrial Cups can support your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-orange-500 text-orange-500 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
