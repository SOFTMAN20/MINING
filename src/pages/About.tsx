
import { motion } from "framer-motion";
import { Shield, Users, Award, Clock, Target, Eye, Heart, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-800/85"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070')] bg-cover bg-center"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About <span className="text-yellow-400">HDA Company Limited</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Leading provider of mining explosive products in Tanzania and East Africa
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-6">
                About Us
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                HDA Company Limited is a limited company with Certificate Incorporation Number 143611604, 
                P.O. BOX 1113, Mbeya. The Headquarter is located in Mbeya, Tanzania, and the company is 
                owned by Tanzanians in the United Republic of Tanzania.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                HDA Company Limited deals with the importation and selling of mining explosive products 
                in Tanzania and also exports mining explosives outside Tanzania.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We serve clients across East Africa, providing reliable and safe explosive solutions 
                for various mining operations, from small-scale to large-scale miners.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="images/exp.jpg" 
                alt="HDA Company Operations" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-700 border-yellow-400/30 h-full">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-yellow-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To enhance the availability of the best explosive products, suitable to all weather—rainy or dry—and 
                    provide assorted types of mining explosives suitable for all types of miners, from small-scale to 
                    large-scale miners in East Africa.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-slate-700 border-yellow-400/30 h-full">
                <CardContent className="p-8">
                  <Eye className="h-12 w-12 text-yellow-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be one of the best explosives companies in East Africa by providing competitive and 
                    environmentally friendly products.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Shield,
                title: "Transparency & Honesty",
                description: "Building trust through open and honest business practices"
              },
              {
                icon: Users,
                title: "Reliability",
                description: "Consistent and dependable service delivery"
              },
              {
                icon: Heart,
                title: "Affordability",
                description: "Competitive pricing for all customer segments"
              },
              {
                icon: Award,
                title: "Innovation",
                description: "Continuously improving our products and services"
              },
              {
                icon: Target,
                title: "Accountability",
                description: "Taking responsibility for our actions and results"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-slate-700 border-yellow-400/30 h-full transition-all duration-300 hover:border-yellow-400 group">
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-10 w-10 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">Leadership</h2>
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

      {/* Our Activities */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Our Activities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Providing best blasting services",
              "Distributing explosives to customers all over Tanzania",
              "Importing and exporting explosives",
              "Drilling and blasting services to our customers"
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="bg-slate-700 border-yellow-400/30 h-full transition-all duration-300 hover:border-yellow-400">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-yellow-400 mb-4">{index + 1}</div>
                    <p className="text-gray-300">{activity}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
