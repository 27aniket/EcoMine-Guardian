/**
 * Intent to Solution Section
 * Displays three workflow cards
 */

import { motion } from "framer-motion";
import { WORKFLOW_CARDS } from "../constants";
import { ArrowRight } from "lucide-react";

const IntentToSolution = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="intent" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center font-serif"
        >
          <h2 className="section-title">Comprehensive QR-Based Solutions</h2>
          <p className="section-subtitle">
            <span className="font-bold">Intent to solution</span> offerings include Basic, Standard,
            and Full Solution packages to support every stage of plantation
            monitoring and digital asset management.
          </p>
        </motion.div>

        {/* Workflow Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {WORKFLOW_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group rounded-2xl p-8 bg-white shadow-lg border border-gray-100 hover:border-forest-green/30 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
              />

              {/* Icon */}
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-forest-green transition-colors">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                {card.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {card.items.map((item, itemIdx) => (
                  <motion.li
                    key={itemIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIdx * 0.1 }}
                    className="flex items-start space-x-3 text-gray-700"
                  >
                    <span className="w-6 h-6 rounded-full bg-lime-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-lime-green" />
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Arrow Icon */}
              <motion.a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center text-green-700 font-semibold group-hover:text-lime-500 transition-colors cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Connection Lines (Desktop only) */}
        <div className="hidden md:flex justify-between items-center mb-12">
          {[0, 1].map((idx) => (
            <motion.div
              key={idx}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex-1 h-1 bg-gradient-to-r from-transparent to-forest-green/20 mx-2 origin-left"
            />
          ))}
        </div>

        {/* Process Flow Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-gray-700 text-lg font-semibold">
            Our integrated approach ensures sustainable coal mine afforestation
            with continuous monitoring and reporting.
          </p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-amber text-4xl font-bold"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntentToSolution;
