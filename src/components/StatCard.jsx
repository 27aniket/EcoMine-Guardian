/**
 * Statistics Card Component
 */

import { motion } from "framer-motion";
import { useInView, useCounter } from "../hooks";

const StatCard = ({ stat }) => {
  const [ref, isInView] = useInView();
  const count = useCounter(stat.value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 card-gradient"
    >
      <div className="text-5xl mb-4">{stat.icon}</div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="text-4xl font-bold gradient-text mb-2"
      >
        {count.toLocaleString()}
        {stat.unit && <span className="text-xl ml-2">{stat.unit}</span>}
      </motion.div>
      <p className="text-gray-600 font-medium">{stat.label}</p>
    </motion.div>
  );
};

export default StatCard;
