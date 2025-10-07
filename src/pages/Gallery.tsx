import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/images/blasting).jpeg",
      title: "Blasting Operations",
      category: "Operations"
    },
    {
      id: 2,
      src: "/images/contactsengineer.jpg",
      title: "Engineering Team",
      category: "Team"
    },
    {
      id: 3,
      src: "/images/products.png",
      title: "Product Range",
      category: "Products"
    },
    {
      id: 4,
      src: "/lovable-uploads/9a183e14-b805-43a1-97b5-1b4c6c5041ce.png",
      title: "Explosive Products",
      category: "Products"
    },
    {
      id: 5,
      src: "/lovable-uploads/2255c8c6-4d6d-487b-8173-5287f24cd5a5.png",
      title: "Safety Equipment",
      category: "Safety"
    },
    {
      id: 6,
      src: "/images/exp.jpg",
      title: "Field Operations",
      category: "Operations"
    },
    {
      id: 7,
      src: "/lovable-uploads/25cb165f-04e5-4943-818d-dac87349b054.png",
      title: "TRUNKLINE Products",
      category: "Products"
    },
    {
      id: 8,
      src: "/lovable-uploads/e58b8e3d-8149-428f-a254-b3ae77a6b234.png",
      title: "VIPER BOOSTERS",
      category: "Products"
    },
    {
      id: 9,
      src: "/lovable-uploads/129d6ecb-358d-4e47-a9d9-6c481f29b383.png",
      title: "LP Assemblies",
      category: "Products"
    }
  ];

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        
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
            <ImageIcon className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm">Our Work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            Photo <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">Gallery</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our projects, products, and team in action
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-yellow-500 to-red-500 text-slate-900 shadow-lg shadow-yellow-500/30"
                    : "bg-slate-700/50 text-gray-300 hover:bg-slate-700 border border-slate-600"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 overflow-hidden transition-all duration-500 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/30">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-yellow-500/90 backdrop-blur-sm rounded-full p-4">
                        <ZoomIn className="h-6 w-6 text-slate-900" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-white font-bold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-lg p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <X className="h-6 w-6" />
          </button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="inline-block bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 text-sm font-semibold px-4 py-2 rounded-full mb-2">
                {filteredImages[selectedImage].category}
              </span>
              <h3 className="text-white font-bold text-2xl">{filteredImages[selectedImage].title}</h3>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1);
                }}
                className="bg-slate-800/80 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Previous
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0);
                }}
                className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Next
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
