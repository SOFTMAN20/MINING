import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Mountain, Phone, Mail, MapPin, Users, Award, Clock, Target, Wrench, BookOpen, Facebook, Twitter, Linkedin, Instagram, Youtube, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import HeroCarousel from "@/components/HeroCarousel";

const Index = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-16 md:pt-20">

      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-3 md:mb-4">{t('services.title')}</h2>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              {t('services.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                image: "/images/blasting).jpeg",
                title: t('services.blastingServices.title'),
                description: t('services.blastingServices.description'),
                features: [
                  t('services.blastingServices.features.demolition'),
                  t('services.blastingServices.features.excavation'),
                  t('services.blastingServices.features.quarry'),
                  t('services.blastingServices.features.preparation')
                ]
              },
              {
                image: "/lovable-uploads/9a183e14-b805-43a1-97b5-1b4c6c5041ce.png",
                title: t('services.explosiveProducts.title'),
                description: t('services.explosiveProducts.description'),
                features: [
                  t('services.explosiveProducts.features.anfo'),
                  t('services.explosiveProducts.features.emulsion'),
                  t('services.explosiveProducts.features.detonators'),
                  t('services.explosiveProducts.features.safety')
                ]
              },
              {
                image: "/lovable-uploads/2255c8c6-4d6d-487b-8173-5287f24cd5a5.png",
                title: t('services.consultancy.title'),
                description: t('services.consultancy.description'),
                features: [
                  t('services.consultancy.features.design'),
                  t('services.consultancy.features.safety'),
                  t('services.consultancy.features.training'),
                  t('services.consultancy.features.support')
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-slate-700/50 backdrop-blur-sm border-2 border-yellow-400/20 h-full transition-all duration-500 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/30 overflow-hidden">
                  <div className="relative h-56 overflow-hidden bg-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-700 to-transparent z-10 opacity-60"></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-yellow-400 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-400 mb-3 md:mb-4 text-sm leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-center text-sm">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-3 md:mb-4">{t('products.title')}</h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              {t('products.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { 
                name: "TRUNKLINE", 
                description: "Shock tube with millisecond delay detonator. Water resistant with delay timing: 17ms, 25ms, 42ms, and 67ms",
                image: "/lovable-uploads/25cb165f-04e5-4943-818d-dac87349b054.png"
              },
              { 
                name: "VIPER BOOSTERS", 
                description: "High-strength explosive charge for initiation sequence. Weights: 150g to 400g with velocity of detonation: min 8,000 m/s",
                image: "/lovable-uploads/e58b8e3d-8149-428f-a254-b3ae77a6b234.png"
              },
              { 
                name: "LP ASSEMBLIES", 
                description: "Long Period Delay Detonators with shock tube. 20 different delay periods with no overlap, J-hook connector",
                image: "/lovable-uploads/129d6ecb-358d-4e47-a9d9-6c481f29b383.png"
              },
              { 
                name: "PGAN", 
                description: "Porous Granular Ammonium Nitrate for ANFO applications. Ammonium nitrate content > 99.5%",
                image: "/lovable-uploads/b6b46eda-5846-4e56-8c41-dc573283f89d.png"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="bg-slate-700/50 backdrop-blur-sm border-2 border-yellow-400/20 h-full transition-all duration-500 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/30 overflow-hidden">
                  <div className="relative h-48 overflow-hidden bg-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-700 to-transparent z-10 opacity-60"></div>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">{product.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8 md:mt-12"
          >
            <Button 
              onClick={() => navigate('/products')}
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-slate-900 font-bold px-8 py-4 text-lg group transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105"
            >
              {t('common.viewAll')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-yellow-500 to-red-500 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
            {[
              { icon: Users, number: "50+", label: t('stats.expertTeam') },
              { icon: Award, number: "200+", label: t('stats.successfulProjects') },
              { icon: Clock, number: "3+", label: t('stats.yearsExperience') },
              { icon: Shield, number: "100%", label: t('stats.safetyRecord') }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-slate-900"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 transition-all duration-300 hover:bg-white/20">
                  <stat.icon className="h-10 w-10 md:h-14 md:w-14 mx-auto mb-3 md:mb-4 transition-transform duration-300 hover:scale-110" />
                  <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">{stat.number}</div>
                  <div className="text-sm md:text-lg font-semibold">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4 md:mb-6">{t('about.title')}</h2>
              <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed">
                HDA Company Limited is a Tanzanian limited company (Certificate Incorporation Number 143611604) headquartered in Mbeya, Tanzania. We specialize in the importation, distribution, and export of mining explosive products throughout Tanzania and East Africa.
              </p>
              <p className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8">
                Our mission is to enhance the availability of the best explosive products suitable for all weather conditions, providing assorted types of mining explosives for all types of miners, from small-scale to large-scale operations in East Africa.
              </p>
              <div className="space-y-3 md:space-y-4">
                {[
                  "Transparency & Honesty in all our operations",
                  "Reliability in product delivery and quality",
                  "Affordability without compromising on quality",
                  "Innovation in explosive solutions",
                  "Accountability to our customers and environment"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-yellow-100 transition-colors duration-300 group text-sm md:text-base">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3 md:mr-4 transition-colors duration-300 flex-shrink-0"></div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-red-500 rounded-lg p-8 transition-all duration-500 group">
                <div className="text-slate-900 transition-colors duration-500">
                  <h3 className="text-2xl font-bold mb-6">{t('about.whyChoose')}</h3>
                    <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center text-center">
                      <Shield className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">{t('products.features.weatherResistant.title')}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Award className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">{t('products.features.safetyCertified.title')}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Users className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">{t('products.features.eastAfricaCoverage.title')}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Wrench className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">{t('products.features.customSolutions.title')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">{t('about.leadership')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders driving HDA Company Limited's success in East Africa's mining explosive industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-700 border-yellow-400/30 border-2 hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/10 hover:shadow-yellow-400/30 group h-full">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 p-1">
                      <img 
                        src="/lovable-uploads/fd92fd20-6fda-4b9d-8f1d-8d7d46442142.png" 
                        alt="Imani Mwaisunga - Executive Director"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-100 mb-2">Imani Mwaisunga</h3>
                    <p className="text-yellow-300 text-lg mb-4">Executive Director</p>
                  </div>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-yellow-100 font-semibold mb-1">Education</h4>
                        <p className="text-gray-300 text-sm">BSc. Mining Engineering</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Briefcase className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-yellow-100 font-semibold mb-1">Experience</h4>
                        <p className="text-gray-300 text-sm">
                          12 years experience in Mining business, majoring in Explosives dealings, with extensive managerial experience, having led various positions in Explosive companies.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-slate-700 border-yellow-400/30 border-2 hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/10 hover:shadow-yellow-400/30 group h-full">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 p-1">
                      <img 
                        src="/lovable-uploads/9a793414-de7f-4886-9372-f0a2671146f3.png" 
                        alt="Jackline Masangula - Director"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-100 mb-2">Jackline Masangula</h3>
                    <p className="text-yellow-300 text-lg mb-4">Director</p>
                  </div>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-yellow-100 font-semibold mb-1">Education</h4>
                        <p className="text-gray-300 text-sm">Bachelor of Arts in Adult Education</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Briefcase className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-yellow-100 font-semibold mb-1">Experience</h4>
                        <p className="text-gray-300 text-sm">
                          9 years of experience in financial analysis and management.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">{t('contact.getInTouch')}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4 bg-slate-800 p-4 rounded-lg transition-colors duration-300 group">
                <MapPin className="h-6 w-6 text-yellow-300 mt-1 transition-colors duration-300" />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-100 mb-2 transition-colors duration-300">{t('contact.physicalAddress')}</h3>
                  <p className="text-gray-300 font-semibold">HDA Company Limited</p>
                  <p className="text-gray-300">P.O. Box 1113, Mbeya</p>
                  <p className="text-gray-300">Street: Maendeleo</p>
                  <p className="text-gray-300">Ward: Iyunga</p>
                  <p className="text-gray-300">Jasma Cash & Carry building</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-slate-800 p-4 rounded-lg transition-colors duration-300 group">
                <Phone className="h-6 w-6 text-yellow-300 mt-1 transition-colors duration-300" />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-100 mb-2 transition-colors duration-300">{t('contact.mobile')}</h3>
                  <p className="text-gray-300">+255753392262</p>
                  <p className="text-gray-400 text-sm mt-1">{t('contact.whatsappDescription')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-slate-800 p-4 rounded-lg transition-colors duration-300 group">
                <Mail className="h-6 w-6 text-yellow-300 mt-1 transition-colors duration-300" />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-100 mb-2 transition-colors duration-300">{t('contact.email')}</h3>
                  <p className="text-gray-300">imanimwaisunga@hda-company.com</p>
                  <p className="text-gray-400 text-sm mt-1">{t('contact.emailDescription')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-700 border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/10 hover:shadow-yellow-400/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-yellow-100 mb-6">{t('contact.sendMessage')}</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder={t('contact.form.firstNamePlaceholder')}
                        className="bg-slate-600 border-yellow-400/50 text-white placeholder:text-gray-400 focus:border-yellow-400 hover:border-yellow-400/70 transition-all duration-300 focus:ring-2 focus:ring-yellow-400/20"
                      />
                      <Input
                        type="text"
                        placeholder={t('contact.form.lastNamePlaceholder')}
                        className="bg-slate-600 border-yellow-400/50 text-white placeholder:text-gray-400 focus:border-yellow-400 hover:border-yellow-400/70 transition-all duration-300 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder={t('contact.form.emailPlaceholder')}
                        className="bg-slate-600 border-yellow-400/50 text-white placeholder:text-gray-400 focus:border-yellow-400 hover:border-yellow-400/70 transition-all duration-300 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder={t('contact.form.phonePlaceholder')}
                        className="bg-slate-600 border-yellow-400/50 text-white placeholder:text-gray-400 focus:border-yellow-400 hover:border-yellow-400/70 transition-all duration-300 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder={t('contact.form.subjectPlaceholder')}
                        className="bg-slate-600 border-yellow-400/50 text-white placeholder:text-gray-400 focus:border-yellow-400 hover:border-yellow-400/70 transition-all duration-300 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder={t('contact.form.messagePlaceholder')}
                        rows={4}
                        className="bg-slate-600 border-yellow-400/50 text-white placeholder:text-gray-400 focus:border-yellow-400 hover:border-yellow-400/70 transition-all duration-300 resize-none focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold py-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                      {t('contact.form.send')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/de034e97-3212-4844-9be3-b0bf04d07d5e.png" 
                  alt="HDA Company Limited Logo" 
                  className="h-10 w-10 object-contain"
                />
                <div className="text-xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                  HDA COMPANY LIMITED
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                {t('footer.description')}
              </p>
              <div className="text-gray-500 text-sm">
                <p>HDA Company Limited</p>
                <p>P.O. Box 1113, Mbeya</p>
                <p>Street: Maendeleo</p>
                <p>Ward: Iyunga</p>
                <p>Jasma Cash & Carry building</p>
                <p>Phone: +255753392262</p>
              </div>
            </div>
            <div>
              <h4 className="text-yellow-400 font-semibold mb-4 transition-colors duration-300">{t('services.title')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="text-yellow-300 transition-colors duration-300 cursor-pointer">{t('services.explosiveProducts.title')}</li>
                <li className="text-yellow-300 transition-colors duration-300 cursor-pointer">{t('services.blastingServices.title')}</li>
                <li className="text-yellow-300 transition-colors duration-300 cursor-pointer">{t('services.consultancy.title')}</li>
                <li className="text-yellow-300 transition-colors duration-300 cursor-pointer">{t('services.additional.safetyTraining.title')}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-yellow-400 font-semibold mb-4 transition-colors duration-300">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="text-yellow-300 transition-colors duration-300 cursor-pointer">{t('navigation.home')}</li>
                <li className="text-yellow-300 transition-colors duration-300 cursor-pointer">{t('navigation.about')}</li>
                <li className="text-yellow-300 transition-colors duration-300 cursor-pointer">{t('navigation.services')}</li>
                <li className="text-yellow-300 transition-colors duration-300 cursor-pointer">{t('navigation.products')}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-yellow-400 font-semibold mb-4 transition-colors duration-300">Follow Us</h4>
              <div className="flex space-x-4 mb-4">
                <motion.a
                  href="https://facebook.com/hdacompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-slate-700 p-3 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 group"
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/hdacompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-slate-700 p-3 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 group"
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/company/hdacompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-slate-700 p-3 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.instagram.com/hda_companylimited?igsh=MXJkdmEyYThybXlpMA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-slate-700 p-3 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 group"
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://youtube.com/hdacompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-slate-700 p-3 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 group"
                >
                  <Youtube className="h-5 w-5" />
                </motion.a>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Stay connected for updates on mining solutions and safety innovations
              </p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-slate-700">
            <div className="text-gray-500 text-sm">
              {t('footer.copyright')}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
