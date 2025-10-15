// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
// import { useState } from "react";
// import { useForm, FormProvider, SubmitHandler } from "react-hook-form"; // Import useForm and FormProvider

// const contactInfo = [
//   {
//     icon: Phone,
//     title: "Phone",
//     value: "+252 (612) 995362",
//     description: "All the days of the week from 9am to 5pm",
//     link: "tel:+252612995362",
//   },
//   {
//     icon: Mail,
//     title: "Email",
//     value: "huseinarahman6@gmail.com",
//     description: "Online support",
//     link: "mailto:huseinarahman6@gmail.com",
//   },
//   {
//     icon: MapPin,
//     title: "Office",
//     value: "TBL",
//     description: "to be determined later",
//     link: "https://wa.me/252612995362", // WhatsApp URL with country code and number
//   },
//   {
//     icon: Clock,
//     title: "Working Hours",
//     value: "9:00 AM - 5:00 PM",
//     description: "All the days of the week",
//     link: "https://wa.me/252612995362",
//   },
// ];

// const services = [
//   {
//     title: "Web Development",
//     description: "Full-stack development with modern technologies",
//   },
//   {
//     title: "Payment Integration",
//     description: "User -centered design solutions",
//   },
//   {
//     title: "Consultation",
//     description: "Technical architecture and strategy",
//   },
// ];

// const Contact = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   // Pass the ContactFormData type to useForm
//   const methods = useForm<ContactFormData>(); // Specify the type here

//   interface ContactFormData {
//     name: string;
//     email: string;
//     subject: string;
//     message: string;
//   }

//   const handleSubmit: SubmitHandler<ContactFormData> = async (data) => {
//     // Specify the type here
//     setIsSubmitting(true);
//     // Add your form submission logic here
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log(data);
//     setIsSubmitting(false);
//   };

//   return (
//     <section id="contact" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         {/* Hire Me Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-20"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">
//             Let&apos;s Build Your Success Story
//           </h2>
//           <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
//             I&apos;m currently available for freelance work. Let&apos;s build
//             something amazing together!
//           </p>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <a
//                   href="https://wa.me/252612995362"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Card className="relative overflow-hidden group">
//                     <CardHeader>
//                       <CardTitle>{service.title}</CardTitle>
//                       <CardDescription>{service.description}</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <Button className="mt-4 w-full group-hover:bg-primary/90">
//                         Hire Me
//                       </Button>
//                     </CardContent>
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </Card>{" "}
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Contact Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="space-y-6"
//           >
//             <h3 className="text-2xl font-bold mb-8">You can Reach me at</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
//               {contactInfo.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group"
//                 >
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="flex items-start space-x-4"
//                   >
//                     <div className="p-3 rounded-full bg-primary/10">
//                       <item.icon className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium">{item.title}</h4>
//                       <p className="text-foreground">{item.value}</p>
//                       <p className="text-sm text-muted-foreground">
//                         {item.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 </a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-card p-8 rounded-lg border border-border"
//           >
//             <h3 className="text-2xl font-bold mb-8">Send Message</h3>

//             <FormProvider {...methods}>
//               {" "}
//               {/* Wrap with FormProvider */}
//               <form
//                 onSubmit={methods.handleSubmit(handleSubmit)}
//                 className="space-y-6"
//               >
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <FormItem>
//                     <FormLabel>Name</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Your name"
//                         {...methods.register("name")}
//                       />
//                     </FormControl>
//                   </FormItem>
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input
//                         type="email"
//                         placeholder="your@email.com"
//                         {...methods.register("email")}
//                       />
//                     </FormControl>
//                   </FormItem>
//                 </div>

//                 <FormItem>
//                   <FormLabel>Subject</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Project discussion"
//                       {...methods.register("subject")}
//                     />
//                   </FormControl>
//                 </FormItem>

//                 <FormItem>
//                   <FormLabel>Message</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Tell me about your project..."
//                       className="min-h-[150px]"
//                       {...methods.register("message")}
//                     />
//                   </FormControl>
//                 </FormItem>

//                 <Button
//                   type="submit"
//                   className="w-full"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     "Sending..."
//                   ) : (
//                     <>
//                       Send Message
//                       <Send className="ml-2 h-4 w-4" />
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </FormProvider>
//           </motion.div>
//         </div>

//         {/* FAQ Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mt-20"
//         >
//           <h3 className="text-2xl font-bold text-center mb-12">
//             Frequently Asked Questions
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
//             {[
//               {
//                 q: "What is your typical project timeline?",
//                 a: "Project timelines vary based on scope and complexity. A typical website project takes 4-8 weeks from start to finish.",
//               },
//               {
//                 q: "Do you offer maintenance services?",
//                 a: "Yes, I offer ongoing maintenance and support packages to ensure your project stays up-to-date and secure.",
//               },
//               {
//                 q: "What is your payment structure?",
//                 a: "I typically require a 50% deposit to begin work, with the remaining 50% due upon project completion.",
//               },
//               {
//                 q: "Can you work with existing projects?",
//                 a: "Yes, I'm experienced in working with existing codebases and can help improve or extend your current project.",
//               },
//             ].map((faq, index) => (
//               <Card key={index} className="bg-card">
//                 <CardHeader>
//                   <CardTitle className="text-lg">{faq.q}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">{faq.a}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
