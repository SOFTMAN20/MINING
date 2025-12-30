
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const phoneNumber = "255753392262";
    const message = "Hello, I would like to inquire about your mining explosive solutions.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        <div className="absolute inset-0 bg-[url('/images/newimages/team44.jpeg')] bg-cover bg-center opacity-30"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-red-500/20 border border-yellow-500/30 rounded-full px-6 py-2 mb-8"
          >
            <Phone className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm">Get In Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            Contact <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">Us</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Get in touch with our experts for all your mining explosive solutions needs
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-yellow-500 p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Mobile</h3>
                    <button 
                      onClick={handleWhatsAppClick}
                      className="text-yellow-400 font-semibold mb-1 hover:text-yellow-300 transition-colors cursor-pointer underline"
                    >
                      +255753392262
                    </button>
                    <p className="text-gray-300 text-sm">Click to chat on WhatsApp - Available for all your mining explosive needs</p>
                  </div>
                </motion.div>

                {[
                  {
                    icon: Mail,
                    title: "Email",
                    info: "imanimwaisunga@hda-company.com",
                    description: "We'll respond within 24 hours"
                  },
                  {
                    icon: MapPin,
                    title: "Physical Address",
                    info: "HDA Company Limited\nP.O. Box 1113, Mbeya\nStreet: Maendeleo\nWard: Iyunga\nJasma Cash & Carry building",
                    description: "Visit our headquarters"
                  },
                  {
                    icon: MapPin,
                    title: "Postal Address",
                    info: "P.O. Box 1113, Mbeya",
                    description: "For correspondence"
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-yellow-500 p-3 rounded-lg flex-shrink-0">
                      <contact.icon className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{contact.title}</h3>
                      <div className="text-yellow-400 font-semibold mb-1 whitespace-pre-line">{contact.info}</div>
                      <p className="text-gray-300 text-sm">{contact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Company Registration Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 p-6 bg-slate-700 rounded-lg border border-yellow-400/30"
              >
                <h3 className="text-xl font-bold text-white mb-4">Company Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-yellow-400 font-semibold">Certificate Incorporation Number:</span> 143611604</p>
                  <p><span className="text-yellow-400 font-semibold">Headquarters:</span> Mbeya, Tanzania</p>
                  <p><span className="text-yellow-400 font-semibold">Ownership:</span> Owned by Tanzanians in the United Republic of Tanzania</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-700 border-yellow-400/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                  <form className="space-y-6" action=""  method="POST">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">First Name</label>
                        <Input 
                          className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Last Name</label>
                        <Input 
                          className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <Input 
                        type="email"
                        className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Phone</label>
                      <Input 
                        className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                        placeholder="+255 XXX XXX XXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Subject</label>
                      <Input 
                        className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                        placeholder="Mining explosive inquiry"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Message</label>
                      <Textarea 
                        className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50 min-h-[120px]"
                        placeholder="Tell us about your mining project requirements..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Visit Our Location
            </h2>
            <p className="text-xl text-gray-300">
              Find us in Mbeya, Tanzania
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800 p-4 rounded-lg"
          >
            <div className="bg-slate-600 h-96 rounded-lg flex items-center justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6628.239874767934!2d33.43705395207903!3d-8.956016011272013!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1753400457114!5m2!1sen!2stz"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem', minHeight: '24rem', minWidth: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
