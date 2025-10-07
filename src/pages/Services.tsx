
import { motion } from "framer-motion";
import { Zap, Target, BookOpen, Wrench, Shield, Users, Phone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        <div className="absolute inset-0 bg-[url('/images/service.jpeg')] bg-cover bg-center opacity-30"></div>
        
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
            <Target className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm">Professional Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            {t('services.title')} <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 md:py-20 bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-3 md:mb-4">
              {t('services.coreServices')}
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
              Comprehensive solutions for all your mining needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {[
              {
                icon: Zap,
                title: t('services.explosiveProducts.title'),
                description: t('services.explosiveProducts.description'),
                features: [
                  t('services.explosiveProducts.features.anfo'),
                  t('services.explosiveProducts.features.emulsion'),
                  t('services.explosiveProducts.features.detonators'),
                  t('services.explosiveProducts.features.safety'),
                  t('services.explosiveProducts.features.international')
                ]
              },
              {
                icon: Target,
                title: t('services.blastingServices.title'),
                description: t('services.blastingServices.description'),
                features: [
                  t('services.blastingServices.features.demolition'),
                  t('services.blastingServices.features.excavation'),
                  t('services.blastingServices.features.quarry'),
                  t('services.blastingServices.features.preparation'),
                  t('services.blastingServices.features.custom')
                ]
              },
              {
                icon: BookOpen,
                title: t('services.consultancy.title'),
                description: t('services.consultancy.description'),
                features: [
                  t('services.consultancy.features.design'),
                  t('services.consultancy.features.safety'),
                  t('services.consultancy.features.training'),
                  t('services.consultancy.features.support'),
                  t('services.consultancy.features.compliance')
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
                <Card className="bg-slate-700/50 backdrop-blur-sm border-2 border-yellow-400/20 h-full transition-all duration-500 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/30 overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-6 md:p-8 relative z-10">
                    <div className="relative inline-block mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-red-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <service.icon className="h-12 w-12 md:h-14 md:w-14 text-yellow-400 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-yellow-400 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 md:space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-start text-sm md:text-base">
                          <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
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

      {/* Additional Services */}
      <section className="py-12 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              {t('services.additionalServices')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wrench,
                title: t('services.additional.equipment.title'),
                description: t('services.additional.equipment.description')
              },
              {
                icon: Shield,
                title: t('services.additional.safetyTraining.title'),
                description: t('services.additional.safetyTraining.description')
              },
              {
                icon: Users,
                title: t('services.additional.technicalSupport.title'),
                description: t('services.additional.technicalSupport.description')
              },
              {
                icon: Phone,
                title: t('services.additional.emergency.title'),
                description: t('services.additional.emergency.description')
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 h-full transition-all duration-500 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 text-center relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="relative inline-block mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-red-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <service.icon className="h-10 w-10 text-yellow-400 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-12 md:py-20 bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              {t('services.ourProcess')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: t('services.process.consultation.title'), description: t('services.process.consultation.description') },
              { step: "02", title: t('services.process.planning.title'), description: t('services.process.planning.description') },
              { step: "03", title: t('services.process.execution.title'), description: t('services.process.execution.description') },
              { step: "04", title: t('services.process.support.title'), description: t('services.process.support.description') }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="text-6xl font-bold text-yellow-400/20 mb-4">{process.step}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-yellow-400/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-slate-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-lg border-2 border-yellow-400/30 rounded-2xl p-8 md:p-12 shadow-2xl">
              <Target className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {t('services.readyToStart')} <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Started?</span>
              </h2>
              
              <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Contact us today to discuss your blasting requirements and get a customized solution
              </p>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-slate-900 font-bold px-8 py-6 text-base md:text-lg shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300"
              >
                {t('services.requestConsultation')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
