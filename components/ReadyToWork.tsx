"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";

const ReadyToWork = () => {
  const benefits = [
    "Free consultation",
    "Custom solutions", 
    "Fast delivery",
    "Quality guarantee",
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-6 sm:p-8 text-white w-full">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-4 sm:mb-6">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white mr-2" />
              <span className="text-white text-xs sm:text-sm font-medium">Ready to Start</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Ready to Get Started?
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90 max-w-2xl mx-auto leading-relaxed px-2">
              Contact us today for a quote or to discuss your industrial cup requirements
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center sm:justify-start space-x-2 p-2 sm:p-3 bg-white/10 rounded-lg"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span className="text-white font-medium text-xs sm:text-sm text-center sm:text-left">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-500 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Get Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+252615091123"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-500 transition-all duration-300 text-sm sm:text-base text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadyToWork;
