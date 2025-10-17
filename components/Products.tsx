"use client";

import { motion } from "framer-motion";
import { ArrowRight, Coffee, Factory, Shield, Target, Cog, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      title: "Standard Industrial Cups",
      description: "High-quality • Durable",
      image: "/Products/product_1.jpg",
      icon: Coffee,
      category: "Standard",
    },
    {
      id: 2,
      title: "Premium Manufacturing",
      description: "Precision • Quality",
      image: "/Products/product_2.jpg",
      icon: Factory,
      category: "Premium",
    },
    {
      id: 3,
      title: "Custom Solutions",
      description: "Tailored • Flexible",
      image: "/Products/product_3.jpg",
      icon: Cog,
      category: "Custom",
    },
    {
      id: 4,
      title: "Quality Assurance",
      description: "Tested • Certified",
      image: "/Products/product_4.jpg",
      icon: Shield,
      category: "Quality",
    },
    {
      id: 5,
      title: "Target Precision",
      description: "Exact • Reliable",
      image: "/Products/product_5.jpg",
      icon: Target,
      category: "Precision",
    },
    {
      id: 6,
      title: "Heavy-Duty Solutions",
      description: "Robust • Strong",
      image: "/Products/product_6.jpg",
      icon: Wrench,
      category: "Heavy-Duty",
    },
  ];

  // Create duplicated products for infinite scroll
  const duplicatedProducts = [...products, ...products, ...products];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed here

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one complete set
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Pattern - Starry effect */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 dark:text-gray-500 text-sm sm:text-base font-medium mb-4">Recent Projects</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Building products that matter
          </h2>
        </motion.div>

        {/* Horizontal Scrolling Products */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 via-white to-transparent dark:from-slate-900 dark:via-gray-900 dark:to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 via-white to-transparent dark:from-slate-900 dark:via-gray-900 dark:to-transparent z-10 pointer-events-none"></div>
          
          <div
            ref={scrollRef}
            className="flex space-x-4 sm:space-x-6 overflow-x-hidden scrollbar-hide py-4 px-4 sm:px-6 lg:px-8"
            style={{
              scrollBehavior: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {duplicatedProducts.map((product, index) => {
              return (
                <motion.div
                  key={`${product.id}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % products.length) * 0.1 }}
                  className="flex-shrink-0 w-64 sm:w-72 md:w-80 group"
                >
                  <Link href="/products" className="block">
                    <div className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-80 sm:h-96">
                      {/* Product Image as Background */}
                      <div className="absolute inset-0">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover"
                        />
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                      </div>
                      
                      {/* Product Info - Bottom Left */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <div className="text-left">
                          <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1 group-hover:text-orange-400 transition-colors">
                            {product.title}
                          </h3>
                          <p className="text-gray-300 text-sm sm:text-base">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center text-orange-400 hover:text-orange-500 font-semibold text-sm sm:text-base transition-colors group"
          >
            View all products
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Products;
