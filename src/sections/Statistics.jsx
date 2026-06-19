/**
 * Statistics Section
 * Animated counter cards
 */

import { motion } from "framer-motion";
import { STATISTICS } from "../constants";
import { StatCard } from "../components";

const Statistics = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">
            Real-time statistics showcasing the scale of our afforestation
            efforts
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {STATISTICS.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center bg-gradient-to-r from-forest-green/10 to-lime-green/10 rounded-2xl p-12 border border-forest-green/20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Mission for Global Sustainability
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Help us transform abandoned coal mines into thriving green
            ecosystems. Together, we can make a significant environmental
            impact.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary"
          >
            Get Involved Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
