/**
 * External Redirect Section
 * Buttons to open external links
 */

import { motion } from "framer-motion";
import { EXTERNAL_LINKS } from "../constants";
import { ExternalLink } from "lucide-react";

const ExternalRedirect = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleOpenLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-forest-green to-lime-green">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Access Our Tools & Dashboards
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Open external portals and monitoring systems to view comprehensive
            plantation data
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {EXTERNAL_LINKS.map((link) => (
            <motion.button
              key={link.id}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleOpenLink(link.url)}
              className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-left h-full flex flex-col justify-between"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green/5 to-lime-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-forest-green transition-colors">
                  {link.label}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{link.description}</p>
              </div>

              {/* Button Footer */}
              <div className="flex items-center text-forest-green font-semibold group-hover:text-lime-green transition-colors">
                <span>Open</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest-green to-lime-green"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/90"
        >
          <p className="text-lg font-semibold">
            All links open in a new tab for seamless browsing experience
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExternalRedirect;
