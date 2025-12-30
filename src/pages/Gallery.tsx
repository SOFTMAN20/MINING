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
    },
    // Team images from newimages folder
    { id: 10, src: "/images/newimages/team1.jpeg", title: "Team Member", category: "Team" },
    { id: 11, src: "/images/newimages/team2.jpeg", title: "Team Member", category: "Team" },
    { id: 12, src: "/images/newimages/team3.jpeg", title: "Team Member", category: "Team" },
    { id: 13, src: "/images/newimages/team4.jpeg", title: "Team Member", category: "Team" },
    { id: 14, src: "/images/newimages/team5.jpeg", title: "Team Member", category: "Team" },
    { id: 15, src: "/images/newimages/team6.jpeg", title: "Team Member", category: "Team" },
    { id: 16, src: "/images/newimages/team7.jpeg", title: "Team Member", category: "Team" },
    { id: 17, src: "/images/newimages/team8.jpeg", title: "Team Member", category: "Team" },
    { id: 18, src: "/images/newimages/team10.jpeg", title: "Team Member", category: "Team" },
    { id: 19, src: "/images/newimages/team11.jpeg", title: "Team Member", category: "Team" },
    { id: 20, src: "/images/newimages/team12.jpeg", title: "Team Member", category: "Team" },
    { id: 21, src: "/images/newimages/team13.jpeg", title: "Team Member", category: "Team" },
    { id: 22, src: "/images/newimages/team14.jpeg", title: "Team Member", category: "Team" },
    { id: 23, src: "/images/newimages/team16.jpeg", title: "Team Member", category: "Team" },
    { id: 24, src: "/images/newimages/team17.jpeg", title: "Team Member", category: "Team" },
    { id: 25, src: "/images/newimages/team18.jpeg", title: "Team Member", category: "Team" },
    { id: 26, src: "/images/newimages/team20.jpeg", title: "Team Member", category: "Team" },
    { id: 27, src: "/images/newimages/team21.jpeg", title: "Team Member", category: "Team" },
    { id: 28, src: "/images/newimages/team22.jpeg", title: "Team Member", category: "Team" },
    { id: 29, src: "/images/newimages/team23.jpeg", title: "Team Member", category: "Team" },
    { id: 30, src: "/images/newimages/team24.jpeg", title: "Team Member", category: "Team" },
    { id: 31, src: "/images/newimages/team25.jpeg", title: "Team Member", category: "Team" },
    { id: 32, src: "/images/newimages/team26.jpeg", title: "Team Member", category: "Team" },
    { id: 33, src: "/images/newimages/team27.jpeg", title: "Team Member", category: "Team" },
    { id: 34, src: "/images/newimages/team28.jpeg", title: "Team Member", category: "Team" },
    { id: 35, src: "/images/newimages/team29.jpeg", title: "Team Member", category: "Team" },
    { id: 36, src: "/images/newimages/team30.jpeg", title: "Team Member", category: "Team" },
    { id: 37, src: "/images/newimages/team31.jpeg", title: "Team Member", category: "Team" },
    { id: 38, src: "/images/newimages/team32.jpeg", title: "Team Member", category: "Team" },
    { id: 39, src: "/images/newimages/team34.jpeg", title: "Team Member", category: "Team" },
    { id: 40, src: "/images/newimages/team36.jpeg", title: "Team Member", category: "Team" },
    { id: 41, src: "/images/newimages/team37.jpeg", title: "Team Member", category: "Team" },
    { id: 42, src: "/images/newimages/team38.jpeg", title: "Team Member", category: "Team" },
    { id: 43, src: "/images/newimages/team39.jpeg", title: "Team Member", category: "Team" },
    { id: 44, src: "/images/newimages/team40.jpeg", title: "Team Member", category: "Team" },
    { id: 45, src: "/images/newimages/team41.jpeg", title: "Team Member", category: "Team" },
    { id: 46, src: "/images/newimages/team42.jpeg", title: "Team Member", category: "Team" },
    { id: 47, src: "/images/newimages/team43.jpeg", title: "Team Member", category: "Team" },
    { id: 48, src: "/images/newimages/team44.jpeg", title: "Engineering Team", category: "Team" },
    { id: 49, src: "/images/newimages/team45.jpeg", title: "Engineering Team", category: "Team" },
    { id: 50, src: "/images/newimages/team46.jpeg", title: "Engineering Team", category: "Team" },
    { id: 51, src: "/images/newimages/team47.jpeg", title: "Engineering Team", category: "Team" },
    { id: 52, src: "/images/newimages/team48.jpeg", title: "Engineering Team", category: "Team" },
    { id: 53, src: "/images/newimages/team49.jpeg", title: "Engineering Team", category: "Team" },
    { id: 54, src: "/images/newimages/team50.jpeg", title: "Engineering Team", category: "Team" },
    { id: 55, src: "/images/newimages/team51.jpeg", title: "Engineering Team", category: "Team" },
    { id: 56, src: "/images/newimages/team52.jpeg", title: "Engineering Team", category: "Team" },
    { id: 57, src: "/images/newimages/team53.jpeg", title: "Team Member", category: "Team" },
    { id: 58, src: "/images/newimages/team56.jpeg", title: "Team Member", category: "Team" },
    { id: 59, src: "/images/newimages/team57.jpeg", title: "Team Member", category: "Team" },
    { id: 60, src: "/images/newimages/team59.jpeg", title: "Team Member", category: "Team" }
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
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
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
