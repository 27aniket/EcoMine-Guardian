

import { motion } from "framer-motion";
import { ChevronDown, Leaf, ArrowRight } from "lucide-react";

import heroBg from "../assets/hero.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen bg-linear-to-br from-forest-green/90 to-lime-green/80 overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.5,
        }}
      />

      {/* Animated Floating Elements */}
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-10 left-10 w-20 h-20 bg-lime-green/20 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          y: [20, 0, 20],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-amber/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center text-white space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight font-serif"
          >
            Transforming Coal Mines
            <span className="block text-amber">Into Green Ecosystems</span>
          </motion.h1>

          {/* Subheading */}
          {/* <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-shadow-white max-w-3xl mx-auto leading-relaxed font-serif"
          >
            EcoMine Guardian delivers intelligent tree plantation, QR-based
            monitoring, and GIS-powered mapping solutions to transform reclaimed
            coal mining areas into thriving green ecosystems. By combining
            technology with sustainability, we enable efficient environmental
            restoration, continuous monitoring, and long-term ecological impact
            assessment for a greener and more sustainable future.
          </motion.p> */}

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-white max-w-6xl mx-auto leading-relaxed font-serif"
          >
            EcoMine Guardian delivers intelligent tree plantation, QR-based
            monitoring, and GIS-powered mapping solutions to transform reclaimed
            coal mining areas into thriving green ecosystems for a more
            sustainable future.
          </motion.p>

          {/* Stats Preview */}
          {/* <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8 px-4"
          >
            {[
              { label: "50K+", desc: "Trees Planted" },
              { label: "156", desc: "Sites" },
              { label: "2450+", desc: "Ha Reclaimed" },
              { label: "12.5K", desc: "QR Codes" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
              >
                <div className="text-2xl font-bold">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.desc}</div>
              </div>
            ))}
          </motion.div> */}

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-30"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("monitoring")}
              className=" flex justify-center items-center px-8 py-4 bg-white text-forest-green font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all text-lg"
            >
              Explore Plantation Sites
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>

            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("stats")}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/20 transition-all text-lg backdrop-blur-sm"
            >
              View Dashboard
            </motion.button> */}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
