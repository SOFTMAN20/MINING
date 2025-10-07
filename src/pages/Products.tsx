import { motion } from "framer-motion";
import { Shield, Truck, Star, CheckCircle, Sparkles, Award, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const handleWhatsAppClick = () => {
    const phoneNumber = "255753392262";
    const message = "Hello, I would like to request the product catalog for your mining explosive solutions.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        <div className="absolute inset-0 bg-[url('/images/products.png')] bg-cover bg-center opacity-30"></div>
        
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
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm">Premium Quality Products</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">Products</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Premium mining explosive products suitable for all weather conditions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg px-4 py-2">
              <Shield className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-300 text-sm">Safety Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg px-4 py-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-300 text-sm">Weather Resistant</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg px-4 py-2">
              <Award className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-300 text-sm">International Standards</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-12 md:py-20 bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-3 md:mb-4">
              Featured Products
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
              Explore our comprehensive range of mining explosive solutions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "TRUNKLINE",
                category: "Detonators",
                description: "Shock tube with a millisecond delay detonator",
                features: [
                  "Water resistant",
                  "Delay timing: 17ms, 25ms, 42ms, and 67ms"
                ],
                image: "/lovable-uploads/25cb165f-04e5-4943-818d-dac87349b054.png",
                badge: "Popular"
              },
              {
                title: "VIPER BOOSTERS",
                category: "Boosters",
                description: "High-strength explosive charge for initiation sequence",
                features: [
                  "Weights: 150g to 400g",
                  "Cap well and cord tunnel (no distortion)",
                  "Velocity of detonation: min 8,000 m/s",
                  "Cast density: min 1.8 g/cm³",
                  "Water resistant (sensitive even after immersion at 100 PSI)"
                ],
                image: "/lovable-uploads/e58b8e3d-8149-428f-a254-b3ae77a6b234.png",
                badge: "Best Seller"
              },
              {
                title: "LP ASSEMBLIES",
                category: "Delay Detonators",
                description: "Shock tube with high-strength delay detonator",
                features: [
                  "Shock tube is abrasion-resistant and temperature-resistant",
                  "20 different delay periods with no overlap",
                  "Connector: J-hook"
                ],
                image: "/lovable-uploads/129d6ecb-358d-4e47-a9d9-6c481f29b383.png"
              },
              {
                title: "PGAN",
                category: "Ammonium Nitrate",
                description: "Designed for ANFO, heavy ANFO, and emulsion applications",
                features: [
                  "Ammonium nitrate content > 99.5%",
                  "Bulk density: 0.76 – 0.80 g/cm³",
                  "Particle size (1mm - 3mm): > 95%"
                ],
                image: "/lovable-uploads/b6b46eda-5846-4e56-8c41-dc573283f89d.png",
                badge: "High Quality"
              },
              {
                title: "PRIMACORD",
                category: "Detonating Cords",
                description: "Flexible linear explosives with PETN core for trunklines/downlines",
                features: [
                  "For mining, quarrying, construction",
                  "Velocity of Detonation (VOD): 4,500 m/s – 6,000 m/s"
                ],
                image: "/lovable-uploads/64d6ea19-37da-40b8-b1f0-25c5f2f08d77.png"
              },
              {
                title: "INNOPAK",
                category: "Emulsion Explosives",
                description: "For hard rock mining, quarrying, and construction",
                features: [
                  "Packed in tubes from 25mm to 65mm (custom sizes available)",
                  "VOD: 3,500 – 5,000 m/s (depends on hole and rock characteristics)"
                ],
                image: "/lovable-uploads/81da3b94-3d6e-4c3a-989c-90a547c0b5cb.png"
              },
              {
                title: "EXPLOGEL V6",
                category: "Watergel",
                description: "Watergel cartridge for general mining in hard rock",
                features: [
                  "Size range: 25x270mm to 65x550mm (customizable)",
                  "~2-month lead time for custom sizes",
                  "VOD: 3,500 – 5,000 m/s"
                ],
                image: "/lovable-uploads/7342bc97-ac69-4551-bf03-f993fe84c4d8.png",
                badge: "Customizable"
              },
              {
                title: "SUPERPOWER90",
                category: "Mid-Range Energy",
                description: "Mid-range energy product for mining and quarrying",
                features: [
                  "Size range: 25x270mm to 65x550mm (customizable)",
                  "~2-month lead time for custom sizes",
                  "VOD: 3,000 – 4,800 m/s"
                ],
                image: "/lovable-uploads/7e7cde8b-4c8f-4226-b50b-e712aa1cff5e.png",
                badge: "Versatile"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProduct(index)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="group"
              >
                <Card className="bg-slate-700/50 backdrop-blur-sm border-2 border-yellow-400/20 h-full transition-all duration-500 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/30 overflow-hidden relative">
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-red-500 text-slate-900 font-bold border-0 shadow-lg">
                        {product.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-700 to-transparent z-10 opacity-60"></div>
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    
                    {/* Category Tag */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="bg-slate-900/80 backdrop-blur-sm text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-400/30">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{product.description}</p>
                    
                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, hoveredProduct === index ? product.features.length : 3).map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                      {product.features.length > 3 && hoveredProduct !== index && (
                        <p className="text-yellow-400 text-xs font-medium flex items-center">
                          <span>+{product.features.length - 3} more features</span>
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </p>
                      )}
                    </div>

                    {/* Action Button */}
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-slate-900 font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/50"
                    >
                      Request Info
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-12 md:py-20 bg-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Why Choose Our Products
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Industry-leading features that set us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: "Weather Resistant",
                description: "Suitable for all weather conditions - rainy or dry",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Shield,
                title: "Safety Certified",
                description: "All products meet international safety standards",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Truck,
                title: "East Africa Coverage",
                description: "Serving small-scale to large-scale miners",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: CheckCircle,
                title: "Custom Solutions",
                description: "Customizable products with reasonable lead times",
                color: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 h-full transition-all duration-500 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 text-center relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="relative inline-block mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <feature.icon className="h-12 w-12 text-yellow-400 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-slate-800 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-lg border-2 border-yellow-400/30 rounded-2xl p-12 shadow-2xl">
              <Sparkles className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Product <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Information?</span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Contact our experts for detailed product specifications, pricing, and customization options
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-slate-900 font-bold px-8 py-6 text-lg shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300 group"
                  onClick={handleWhatsAppClick}
                >
                  Request Product Catalog
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold px-8 py-6 text-lg transition-all duration-300"
                  onClick={handleWhatsAppClick}
                >
                  Get Custom Quote
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-yellow-400" />
                  <span>Fast Response Time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-yellow-400" />
                  <span>Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-yellow-400" />
                  <span>Expert Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
