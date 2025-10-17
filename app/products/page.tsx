"use client";

import { motion } from "framer-motion";
import { Package, Coffee, Factory, Shield, Target, Cog, Wrench, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

const ProductsPage = () => {
  // Set page title dynamically
  useEffect(() => {
    document.title = "Our Products - Hadaf Industrial Cups";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our comprehensive range of industrial cups and manufacturing solutions. From standard products to custom solutions, we deliver quality and precision.");
    }
  }, []);
  const allProducts = [
    {
      id: 1,
      title: "Standard Industrial Cups",
      description: "Our flagship product line featuring high-quality, durable industrial cups designed for everyday use in manufacturing environments.",
      features: ["Food-grade materials", "Temperature resistant", "Easy to clean", "Stackable design"],
      image: "/Products/product_1.jpg",
      icon: Coffee,
      category: "Standard",
      price: "Starting from $0.50",
    },
    {
      id: 2,
      title: "Premium Manufacturing Solutions",
      description: "Advanced manufacturing processes with precision engineering for specialized industrial applications.",
      features: ["Precision molding", "Custom specifications", "Quality testing", "ISO certified"],
      image: "/Products/product_2.jpg",
      icon: Factory,
      category: "Premium",
      price: "Custom pricing",
    },
    {
      id: 3,
      title: "Custom Solutions",
      description: "Tailored industrial cup solutions designed to meet your specific business requirements and specifications.",
      features: ["Custom sizing", "Branded options", "Special materials", "Flexible quantities"],
      image: "/Products/product_3.jpg",
      icon: Cog,
      category: "Custom",
      price: "Quote on request",
    },
    {
      id: 4,
      title: "Quality Assurance Products",
      description: "Rigorous testing and quality control ensure every product meets the highest standards of industrial use.",
      features: ["Quality tested", "Certified materials", "Documentation provided", "Warranty included"],
      image: "/Products/product_4.jpg",
      icon: Shield,
      category: "Quality",
      price: "Starting from $0.75",
    },
    {
      id: 5,
      title: "Precision Manufacturing",
      description: "Exact specifications and reliable manufacturing processes for critical industrial applications.",
      features: ["Tight tolerances", "Consistent quality", "Fast production", "Reliable delivery"],
      image: "/Products/product_5.jpg",
      icon: Target,
      category: "Precision",
      price: "Starting from $0.60",
    },
    {
      id: 6,
      title: "Heavy-Duty Solutions",
      description: "Robust industrial cups designed for demanding environments and extended use cycles.",
      features: ["Extra durability", "Impact resistant", "Chemical resistant", "Long lifespan"],
      image: "/Products/product_6.jpg",
      icon: Wrench,
      category: "Heavy-Duty",
      price: "Starting from $1.00",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Package className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">Our Products</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Industrial Cups </span>
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">That Deliver</span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              From standard solutions to custom manufacturing, we provide industrial cups that meet the highest standards of quality, durability, and precision for your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Product Image */}
                  <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-orange-400" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <span className="text-orange-500 font-semibold text-lg">{product.price}</span>
                      <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-sm">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              We specialize in creating custom industrial cup solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Request Custom Quote
              </a>
              <a
                href="tel:+252615091123"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-500 transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
