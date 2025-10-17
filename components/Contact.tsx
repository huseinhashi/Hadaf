"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+252 61 123 4567",
      description: "Speak with our team",
      href: "tel:+252615091123",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "hadafgtc@gmail.com",
      description: "Send us a message",
      href: "mailto:hadafgtc@gmail.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Mogadishu, Somalia",
      description: "Our manufacturing facility",
      href: "#map",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 relative overflow-hidden">
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
            <MessageCircle className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-400 text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Contact </span>
            <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Us</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your industrial cup needs? We&apos;re here to help you find the perfect solution for your business.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Send us a Message</h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                  placeholder="+252 61 123 4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none text-sm sm:text-base"
                  placeholder="Tell us about your industrial cup requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information & Business Hours */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">{contact.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-1 text-sm sm:text-base break-words">{contact.value}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-3">{contact.description}</p>
                        <a
                          href={contact.href}
                          className="inline-flex items-center text-orange-400 hover:text-orange-500 font-semibold transition-colors text-xs sm:text-sm"
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Business Hours</h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <span className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">{schedule.day}</span>
                    <span className="text-gray-900 dark:text-white font-semibold text-sm sm:text-base">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16"
        >
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Our Location</h3>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-48 sm:h-64 flex items-center justify-center">
              <div className="text-center px-4">
                <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-2 sm:mb-3" />
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-medium">Mogadishu, Somalia</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h3>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 opacity-90 max-w-2xl mx-auto">
              Contact us today for a quote or to discuss your industrial cup requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <a
                href="tel:+252615091123"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-500 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Call Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:hadafgtc@gmail.com"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-500 transition-all duration-300 text-sm sm:text-base text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;