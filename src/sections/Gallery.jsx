/**
 * Plantation Gallery Section
 * Responsive image gallery with modal
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "../constants";
import { ImageModal } from "../components";
import { Eye } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = ["all", "before", "during", "after", "drone", "satellite"];

  const filteredImages =
    activeFilter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Plantation Gallery</h2>
          <p className="section-subtitle">
            Visual journey of coal mine transformation through afforestation
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold capitalize transition-all ${
                activeFilter === cat
                  ? "bg-forest-green text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-forest-green"
              }`}
            >
              {cat === "all" ? "All" : cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer bg-white"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <motion.img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center space-x-2 text-white font-semibold"
                  >
                    <Eye className="w-6 h-6" />
                    <span>View</span>
                  </motion.div>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-forest-green transition-colors">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {image.description}
                </p>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-amber text-sm font-semibold"
                >
                  Tap to expand →
                </motion.div>
              </div>

              {/* Badge */}
              <div className="absolute top-3 right-3 bg-lime-green text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                {image.category}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        <ImageModal
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </div>
    </section>
  );
};

export default Gallery;
