"use client";

import { motion } from "framer-motion";
import { Factory, Phone, Mail, MapPin, ArrowRight, Facebook, Youtube, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+252 61 509 1123",
      href: "tel:+252615091123",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hadafgtc@gmail.com",
      href: "mailto:hadafgtc@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Mogadishu, Somalia",
      href: "#",
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100090374946688",
      color: "hover:text-blue-500",
    },
    {
      icon: Youtube,
      name: "YouTube",
      href: "https://youtube.com/@hadafindustrialcups",
      color: "hover:text-red-500",
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com/hadafindustrialcups",
      color: "hover:text-pink-500",
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/hadafindustrialcups",
      color: "hover:text-blue-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/company/hadafindustrialcups",
      color: "hover:text-blue-600",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      href: "https://wa.me/252615091123",
      color: "hover:text-green-500",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 relative">
                <Image
                  src="/Logo/Orange.png"
                  alt="Hadaf Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">Hadaf Industrial Cups</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading Somalia's industrial cup manufacturing with precision, quality, and innovation. 
              We transform raw materials into reliable containers that power businesses across the region.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                <Factory className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">ISO Certified</p>
                <p className="text-xs text-gray-500">Quality Assured</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <div key={index} className="group">
                  <Link
                    href={link.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group-hover:translate-x-1"
                  >
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                      <ArrowRight className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                      {link.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{contact.label}</p>
                      {contact.href !== "#" ? (
                        <a
                          href={contact.href}
                          className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm">{contact.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Reach Us - Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Reach Us</h3>
            <p className="text-gray-400 text-sm mb-6">
              Follow us on social media for updates and news
            </p>
            <div className="grid grid-cols-2 gap-3">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-2 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 ${social.color}`}
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-gray-300 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Hadaf Industrial Cups. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm text-center md:text-right">
            Powered by{" "}
            <a
              href="https://horjeed.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
            >
              Horjeed
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
