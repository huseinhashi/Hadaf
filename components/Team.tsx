"use client";

import { motion } from "framer-motion";
import { Users, Phone, Mail } from "lucide-react";
import Image from "next/image";

const Team = () => {
  const teamMembers = [
    {
      name: "Ahmed Hassan",
      position: "CEO & Founder",
      expertise: "Manufacturing Strategy",
      image: "/images/img_5.jpg",
      contact: "+252 61 123 4567",
      email: "ahmed@hadaf.com",
    },
    {
      name: "Fatima Ali",
      position: "Production Manager",
      expertise: "Quality Control",
      image: "/images/img_6.jpg", 
      contact: "+252 61 234 5678",
      email: "fatima@hadaf.com",
    },
    {
      name: "Omar Mohamed",
      position: "Technical Director",
      expertise: "Process Engineering",
      image: "/images/img_7.jpg",
      contact: "+252 61 345 6789",
      email: "omar@hadaf.com",
    },
    {
      name: "Aisha Ibrahim",
      position: "Sales Director",
      expertise: "Market Development",
      image: "/images/img_8.jpg",
      contact: "+252 61 456 7890",
      email: "aisha@hadaf.com",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Meet the experts behind Hadaf&apos;s success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-orange-400 font-semibold mb-2">{member.position}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{member.expertise}</p>
              <div className="space-y-1">
                <a 
                  href={`tel:${member.contact}`}
                  className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-xs hover:text-orange-400 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  {member.contact}
                </a>
                <a 
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-xs hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  {member.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
