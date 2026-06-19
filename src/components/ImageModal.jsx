/**
 * Image Modal Component for Gallery
 */

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ImageModal = ({ image, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            <div className="bg-white rounded-xl overflow-hidden">
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-auto max-h-[70vh] object-cover"
              />
              <div className="p-6 bg-gradient-to-r from-forest-green/10 to-lime-green/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
