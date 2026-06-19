/**
 * Loading Skeleton Components
 */

import { motion } from "framer-motion";

const pulse = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

export const ImageSkeleton = () => (
  <motion.div
    variants={pulse}
    animate="animate"
    className="w-full h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg"
  />
);

export const CardSkeleton = () => (
  <motion.div
    variants={pulse}
    animate="animate"
    className="bg-white rounded-lg p-6 space-y-4"
  >
    <div className="h-8 bg-gray-200 rounded w-3/4" />
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 rounded" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  </motion.div>
);

export const TextSkeleton = ({ lines = 3 }) => (
  <motion.div variants={pulse} animate="animate" className="space-y-3">
    {[...Array(lines)].map((_, i) => (
      <div
        key={i}
        className={`h-4 bg-gray-200 rounded ${i === lines - 1 ? "w-5/6" : "w-full"}`}
      />
    ))}
  </motion.div>
);

export const GallerySkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        variants={pulse}
        animate="animate"
        className="space-y-3"
      >
        <div className="w-full h-64 bg-gray-200 rounded-lg" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </motion.div>
    ))}
  </div>
);
