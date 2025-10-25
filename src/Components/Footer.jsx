import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="footer p-8 bg-linear-to-r from-urban-dark to-[#1a1a2e]/80 backdrop-blur-xl border-t border-neon-purple/30 relative overflow-hidden shadow-xl"
  >
    {/* Neon divider line */}
    <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-neon-pink via-neon-purple to-neon-cyan animate-pulse" />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-lg font-bold text-neon-cyan mb-2">© 2025 Gamehub</p>
        <p className="text-sm text-urban-grey flex items-center justify-center md:justify-start">
          Made with{" "}
          <motion.span className="mx-1 text-neon-pink animate-pulse">
            ♥
          </motion.span>{" "}
          for indie devs
        </p>
      </motion.div>

      <motion.ul
        className="menu menu-horizontal justify-center gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <li>
          <Link
            to="/"
            className="text-f1f5f9 hover:text-neon-pink transition-colors duration-300 font-medium"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/all-games"
            className="text-f1f5f9 hover:text-neon-pink transition-colors duration-300 font-medium"
          >
            All Games
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-f1f5f9 hover:text-neon-pink transition-colors duration-300 font-medium"
          >
            About
          </Link>
        </li>
      </motion.ul>

      <motion.div
        className="flex flex-col sm:flex-row justify-center md:justify-end gap-4 text-center md:text-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noopener"
          className="text-sm text-neon-cyan hover:scale-110 transition-transform duration-300 font-medium"
          whileHover={{ color: "#ec4899" }}
          whileTap={{ scale: 0.95 }}
        >
          Twitter
        </motion.a>
        <motion.a
          href="https://store.steampowered.com"
          target="_blank"
          rel="noopener"
          className="text-sm text-neon-purple hover:scale-110 transition-transform duration-300 font-medium"
          whileHover={{ color: "#ec4899" }}
          whileTap={{ scale: 0.95 }}
        >
          Steam
        </motion.a>
        <motion.a
          href="https://discord.com"
          target="_blank"
          rel="noopener"
          className="text-sm text-neon-pink hover:scale-110 transition-transform duration-300 font-medium"
          whileHover={{ color: "#06b6d4" }}
          whileTap={{ scale: 0.95 }}
        >
          Discord
        </motion.a>
      </motion.div>
    </div>
  </motion.footer>
);

export default Footer;
