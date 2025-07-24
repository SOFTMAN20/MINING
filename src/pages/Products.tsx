import { motion } from "framer-motion";
import { Package, Shield, Zap, Truck, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-800/85"></div>
        <div className="absolute inset-0 bg-[url('images/products.png')] bg-cover bg-center"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-yellow-400">Products</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Premium mining explosive products suitable for all weather conditions
          </motion.p>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "TRUNKLINE",
                description: "Shock tube with a millisecond delay detonator",
                features: [
                  "Water resistant",
                  "Delay timing: 17ms, 25ms, 42ms, and 67ms"
                ],
                image: "/lovable-uploads/25cb165f-04e5-4943-818d-dac87349b054.png"
              },
              {
                title: "BOOSTERS (VIPER BOOSTERS)",
                description: "High-strength explosive charge for initiation sequence",
                features: [
                  "Weights: 150g to 400g",
                  "Cap well and cord tunnel (no distortion)",
                  "Velocity of detonation: min 8,000 m/s",
                  "Cast density: min 1.8 g/cm³",
                  "Water resistant (sensitive even after immersion at 100 PSI)"
                ],
                image: "/lovable-uploads/e58b8e3d-8149-428f-a254-b3ae77a6b234.png"
              },
              {
                title: "LONG PERIOD DELAY DETONATORS (LP Assemblies)",
                description: "Shock tube with high-strength delay detonator",
                features: [
                  "Shock tube is abrasion-resistant and temperature-resistant",
                  "20 different delay periods with no overlap",
                  "Connector: J-hook"
                ],
                image: "/lovable-uploads/129d6ecb-358d-4e47-a9d9-6c481f29b383.png"
              },
              {
                title: "PGAN (POROUS GRANULAR AMMONIUM NITRATE)",
                description: "Designed for ANFO, heavy ANFO, and emulsion applications",
                features: [
                  "Ammonium nitrate content > 99.5%",
                  "Bulk density: 0.76 – 0.80 g/cm³",
                  "Particle size (1mm - 3mm): > 95%"
                ],
                image: "/lovable-uploads/b6b46eda-5846-4e56-8c41-dc573283f89d.png"
              },
              {
                title: "DETONATING CORDS (PRIMACORD)",
                description: "Flexible linear explosives with PETN core for trunklines/downlines",
                features: [
                  "For mining, quarrying, construction",
                  "Velocity of Detonation (VOD): 4,500 m/s – 6,000 m/s"
                ],
                image: "/lovable-uploads/64d6ea19-37da-40b8-b1f0-25c5f2f08d77.png"
              },
              {
                title: "INNOPAK WATER IN OIL EMULSION CARTRIDGE EXPLOSIVES",
                description: "For hard rock mining, quarrying, and construction",
                features: [
                  "Packed in tubes from 25mm to 65mm (custom sizes available)",
                  "VOD: 3,500 – 5,000 m/s (depends on hole and rock characteristics)"
                ],
                image: "/lovable-uploads/81da3b94-3d6e-4c3a-989c-90a547c0b5cb.png"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-slate-700 border-yellow-400/30 h-full transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                    <p className="text-gray-300 mb-6">{product.description}</p>
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <CheckCircle className="h-4 w-4 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Products */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "EXPLOGEL V6",
                description: "Watergel cartridge for general mining in hard rock",
                features: [
                  "Size range: 25x270mm to 65x550mm (customizable)",
                  "~2-month lead time for custom sizes",
                  "VOD: 3,500 – 5,000 m/s"
                ],
                image: "/lovable-uploads/7342bc97-ac69-4551-bf03-f993fe84c4d8.png"
              },
              {
                title: "SUPERPOWER90",
                description: "Mid-range energy product for mining and quarrying",
                features: [
                  "Size range: 25x270mm to 65x550mm (customizable)",
                  "~2-month lead time for custom sizes",
                  "VOD: 3,000 – 4,800 m/s"
                ],
                image: "/lovable-uploads/7e7cde8b-4c8f-4226-b50b-e712aa1cff5e.png"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-slate-700 border-yellow-400/30 h-full transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                    <p className="text-gray-300 mb-6">{product.description}</p>
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <CheckCircle className="h-4 w-4 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
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

      {/* Product Features */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Why Choose Our Products
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: "Weather Resistant",
                description: "Suitable for all weather conditions - rainy or dry"
              },
              {
                icon: Shield,
                title: "Safety Certified",
                description: "All products meet international safety standards"
              },
              {
                icon: Truck,
                title: "East Africa Coverage",
                description: "Serving small-scale to large-scale miners"
              },
              {
                icon: CheckCircle,
                title: "Custom Solutions",
                description: "Customizable products with reasonable lead times"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-slate-700 border-yellow-400/30 h-full transition-all duration-300 hover:border-yellow-400 text-center">
                  <CardContent className="p-6">
                    <feature.icon className="h-10 w-10 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Product <span className="text-yellow-400">Information?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Contact our experts for detailed product specifications and pricing
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-4 text-lg"
            >
              Request Product Catalog
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
