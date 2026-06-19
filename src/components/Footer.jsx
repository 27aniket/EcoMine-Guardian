/**
 * Footer Component with Contact Section and Maps
 */

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Leaf } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { Icon } from "leaflet";
import { OFFICES, SOCIAL_LINKS } from "../constants";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"

// Custom marker icon
const markerIcon = new Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Footer = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const ContactSection = ({ office, isUk }) => (
    <motion.div variants={itemVariants} className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">{office.name}</h3>

      {/* Address */}
      <div className="flex items-start space-x-3">
        <MapPin className="w-5 h-5 text-forest-green mt-1 shrink-0" />
        <p className="text-gray-600">{office.name}</p>
      </div>

      {/* Emails */}
      <div className="space-y-2">
        {(office.emails || [office.email]).map((email, idx) => (
          <a
            key={idx}
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email.trim()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-600 hover:text-green-700"
          >
            <Mail className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
            <span>{email.trim()}</span>
          </a>
        ))}
      </div>

      {/* Phone Numbers */}
      <div className="space-y-2">
        {(office.phones || []).map((phone, idx) => (
          <a
            key={idx}
            href={`tel:${phone.replace(/\D/g, "")}`}
            className="flex items-center space-x-3 text-gray-600 hover:text-forest-green transition-colors group"
          >
            <Phone className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
            <span>{phone}</span>
          </a>
        ))}
      </div>

      {/* Map */}

      {/* India Regions */}
      {/* {!isUk && office.regions && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 rounded-lg overflow-hidden shadow-lg h-64"
        >
          <MapContainer
            center={[office.coordinates.lat, office.coordinates.lng]}
            zoom={6}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {office.regions.map((region, idx) => (
              <div key={idx}>
                <Marker position={[region.lat, region.lng]} icon={markerIcon}>
                  <Popup>
                    <div className="font-bold">{region.name}</div>
                  </Popup>
                </Marker>
                <Circle
                  center={[region.lat, region.lng]}
                  radius={50000}
                  fillOpacity={0.2}
                  color="#22c55e"
                  weight={2}
                />
              </div>
            ))}
          </MapContainer>
        </motion.div>
      )} */}

      {!isUk && office.regions && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 rounded-lg overflow-hidden shadow-lg h-80"
        >
          <MapContainer
            center={[office.coordinates.lat, office.coordinates.lng]}
            zoom={6}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            {office.regions.map((region, idx) => (
              <>
                <div key={idx}>
                  <Marker position={[region.lat, region.lng]} icon={markerIcon}>
                    <Popup>{region.name}</Popup>
                  </Marker>

                  <Circle
                    center={[region.lat, region.lng]}
                    radius={50000}
                    fillOpacity={0.2}
                    color="#22c55e"
                  />
                </div>
              </>
            ))}
          </MapContainer>
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      {/* Contact Section */}
      <motion.div
        id="contact"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Contact our offices worldwide
          </p>
        </div>

        {/* Two Column Layout - Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ContactSection office={OFFICES.uk} isUk={true} />
          <ContactSection office={OFFICES.india} isUk={false} />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Footer Bottom */}
        <motion.div variants={itemVariants} className="space-y-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                {/* Logo */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-600 shadow-md">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-bold text-green-700 group-hover:text-lime-500 transition-colors">
                    Intent to Solution
                  </span>

                  <span className="text-sm font-semibold text-gray-400">
                    EcoMine Guardian
                  </span>
                </div>
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Coal Mine Afforestation
              Monitoring. All rights reserved.
            </p>
          </div>

          {/* Quick Links and Social */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <a
                href="#"
                className="block text-gray-400 hover:text-lime-green transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-lime-green transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-lime-green transition-colors"
              >
                Monitoring
              </a>
            </div>

            {/* Policies */}
            <div className="space-y-3">
              <h4 className="font-bold text-white mb-4">Policies</h4>
              <a
                href="#"
                className="block text-gray-400 hover:text-lime-green transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-lime-green transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-lime-green transition-colors"
              >
                Cookie Policy
              </a>
            </div>

            {/* Social Media */}
            {/* <div className="space-y-3">
              <h4 className="font-bold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-lime-green transition-colors"
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.name[0]}</span>
                  </a>
                ))}
              </div>
            </div> */}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
