
import { motion } from "framer-motion";
import { ArrowRight, Shield, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const HeroCarousel = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const slides = [
    {
      id: 1,
      background: "images/newimagesteam44.jpeg",
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      description: t('hero.description'),
      tagline: t('hero.tagline'),
      
      primaryButton: {
        text: t('hero.ourServices'),
        action: () => navigate('/services')
      },
      secondaryButton: {
        text: t('hero.getConsultation'),
        action: scrollToContact
      }
    },
    {
      id: 2,
      background: "images/blasting).jpeg",
      title: "Professional Mining Services",
      subtitle: "Expert Solutions",
      description: "Comprehensive blasting services, explosive products, and technical consultancy for all your mining operations across East Africa.",
      tagline: "Safety • Precision • Excellence",
      icon: Target,
      primaryButton: {
        text: "Explore Services",
        action: () => navigate('/services')
      },
      secondaryButton: {
        text: "Contact Us",
        action: scrollToContact
      }
    },
    {
      id: 3,
      background: "images/products.png",
      title: "Premium Explosive Products",
      subtitle: "Quality Guaranteed",
      description: "Weather-resistant explosive products including TRUNKLINE, VIPER BOOSTERS, LP ASSEMBLIES, and PGAN for all mining conditions.",
      tagline: "Reliable • Tested • Certified",
      icon: Shield,
      primaryButton: {
        text: "View Products",
        action: () => navigate('/products')
      },
      secondaryButton: {
        text: "Get Quote",
        action: scrollToContact
      }
    },
    {
      id: 4,
      background: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070",
      title: "Trusted by East Africa",
      subtitle: "Our Values",
      description: "Built on transparency, reliability, and innovation. We're committed to enhancing mining operations with accountability and excellence.",
      tagline: "Transparency • Innovation • Accountability",
      icon: Users,
      primaryButton: {
        text: "About Us",
        action: () => navigate('/about')
      },
      secondaryButton: {
        text: "Join Our Team",
        action: scrollToContact
      }
    }
  ];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full h-screen"
      >
        <CarouselContent className="h-screen">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-screen">
              <div className="relative h-screen flex items-center justify-center">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                  style={{ 
                    backgroundImage: `url('${slide.background.startsWith('http') ? slide.background : '/' + slide.background}')` 
                  }}
                ></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-800/85 z-10"></div>
                
                {/* Animated Explosive Banner for First Slide */}
                {slide.id === 1 && (
                  <motion.img
                    src="/images/explosives.jpg"
                    alt="Explosives Banner"
                    initial={{ opacity: 0, x: 80, y: -80, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                    className="hidden sm:block absolute top-4 right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 z-30 shadow-xl rounded-lg pointer-events-none"
                  />
                )}
                
                <div className="relative z-20 text-center w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-center items-center h-full py-4 sm:py-6 md:py-8">
                  {/* Badge with Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex flex-col items-center justify-center bg-gradient-to-r from-yellow-500/20 to-red-500/20 border border-yellow-500/30 rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 mb-3 sm:mb-3 md:mb-4 gap-1 sm:gap-1.5"
                  >
                    {slide.icon ? (
                      <slide.icon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                    ) : (
                      <Target className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                    )}
                    <span className="text-yellow-400 font-semibold text-[11px] sm:text-xs text-center leading-tight">
                      {slide.id === 1 ? "Mining Explosives" : slide.id === 2 ? "Professional Services" : slide.id === 3 ? "Premium Products" : "Our Values"}
                    </span>
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-[24px] leading-[1.3] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 px-3"
                  >
                    {slide.title}
                    <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent block mt-1 sm:mt-2">{slide.subtitle}</span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[13px] sm:text-base md:text-lg lg:text-xl text-gray-200 mb-3 sm:mb-3 md:mb-4 leading-[1.6] sm:leading-relaxed px-3 sm:px-6 max-w-4xl mx-auto"
                  >
                    {slide.description}
                  </motion.p>
                  
                  {/* Tagline with better styling */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-4 md:mb-5 text-yellow-300 text-[11px] sm:text-sm px-3 sm:px-5 max-w-full"
                  >
                    {slide.tagline.split(' • ').map((tag, i) => (
                      <span key={i} className="flex items-center">
                        {i > 0 && <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400 rounded-full mx-1 sm:mx-1.5 flex-shrink-0"></span>}
                        <span className="break-words sm:whitespace-nowrap">{tag}</span>
                      </span>
                    ))}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center px-4 sm:px-0 w-full max-w-xl sm:max-w-none"
                  >
                    <Button 
                      onClick={slide.primaryButton.action}
                      size="lg" 
                      className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-slate-900 font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-[14px] sm:text-base md:text-lg group transition-all duration-300 w-full sm:w-auto min-h-[48px] sm:min-h-[52px] shadow-xl shadow-yellow-500/40 hover:shadow-yellow-500/60 rounded-xl"
                    >
                      {slide.primaryButton.text}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      onClick={slide.secondaryButton.action}
                      size="lg" 
                      variant="outline" 
                      className="border-2 border-yellow-400 hover:bg-yellow-400 text-yellow-400 hover:text-slate-900 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-[14px] sm:text-base md:text-lg font-semibold transition-all duration-300 w-full sm:w-auto min-h-[48px] sm:min-h-[52px] hover:scale-[1.02] rounded-xl"
                    >
                      {slide.secondaryButton.text}
                    </Button>
                  </motion.div>

                  {/* Carousel Indicators */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex items-center justify-center gap-2 mt-4 sm:mt-5"
                  >
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`transition-all duration-300 rounded-full ${
                          current === index
                            ? "w-8 sm:w-10 h-2 sm:h-2.5 bg-yellow-400"
                            : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Enhanced Floating Animation Elements */}
                <div className="absolute inset-0 z-15">
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full opacity-60"
                  ></motion.div>
                  <motion.div
                    animate={{ 
                      y: [0, -30, 0],
                      x: [0, 20, 0],
                      rotate: [0, -360]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 right-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full opacity-40"
                  ></motion.div>
                  <motion.div
                    animate={{ 
                      y: [0, 25, 0],
                      x: [0, -15, 0],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-yellow-300 rounded-full opacity-70"
                  ></motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-slate-800/90 backdrop-blur-sm border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 hover:scale-110 w-11 h-11 sm:w-12 sm:h-12 transition-all duration-300 shadow-lg" />
        <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-slate-800/90 backdrop-blur-sm border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 hover:scale-110 w-11 h-11 sm:w-12 sm:h-12 transition-all duration-300 shadow-lg" />
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
