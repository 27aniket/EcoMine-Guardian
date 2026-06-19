/**
 * QR-Based Monitoring Section
 * Timeline of QR monitoring workflow
 */

import { motion } from "framer-motion";
import { WORKFLOW_STEPS } from "../constants";
import { Check, QrCode } from "lucide-react";

const QRMonitoring = () => {
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

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="monitoring" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <QrCode className="w-8 h-8 text-forest-green" />
            <h2 className="section-title">QR-Based Monitoring</h2>
          </div>
          <p className="section-subtitle">
            How our innovative QR code system enables real-time plantation
            tracking
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          {WORKFLOW_STEPS.map((step, idx) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              className="flex items-start gap-6"
            >
              {/* Timeline Connector */}
              <div className="flex flex-col items-center">
                {/* Circle with Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-forest-green to-lime-green flex items-center justify-center text-white font-bold shadow-lg mb-4"
                >
                  {step.id}
                </motion.div>

                {/* Vertical Line */}
                {idx !== WORKFLOW_STEPS.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: (idx + 0.5) * 0.1 }}
                    className="w-1 h-24 bg-gradient-to-b from-lime-green to-lime-green/20 origin-top"
                  />
                )}
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ translateX: 10 }}
                className="flex-1 bg-gradient-card rounded-xl p-6 border border-gray-200 hover:border-lime-green/50 transition-all shadow-md hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                  >
                    <Check className="w-6 h-6 text-lime-green" />
                  </motion.div>
                </div>
                <p className="text-gray-600">{step.description}</p>

                {/* Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${((idx + 1) / WORKFLOW_STEPS.length) * 100}%`,
                  }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="mt-4 h-1 bg-gradient-to-r from-forest-green to-lime-green rounded-full"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-br from-forest-green/5 to-lime-green/5 rounded-2xl p-8 border border-forest-green/10"
        >
          {[
            {
              title: "Real-Time Data",
              description:
                "Instant access to plantation data and monitoring information",
              icon: "⚡",
            },
            {
              title: "Field Officer Integration",
              description:
                "Mobile-friendly QR scanning for on-site data collection",
              icon: "📱",
            },
            {
              title: "Accurate Tracking",
              description:
                "Geo-referenced coordinates and satellite monitoring",
              icon: "📍",
            },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QRMonitoring;
