import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="navbar bg-linear-to-r from-urban-dark to-[#1a1a2e]/80 backdrop-blur-2xl border-b border-neon-purple/30 shadow-xl relative overflow-hidden"
  >
    {/* Subtle neon particle overlay */}
    <div className="absolute inset-0 bg-linear-to-r from-neon-purple/5 via-transparent to-neon-cyan/5 animate-pulse" />

    <div className="navbar-start">
      <motion.div
        className="btn btn-ghost text-3xl font-urbanist relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.1, textShadow: "0 0 20px var(--neon-pink)" }}
      >
        <Link
          to="/"
          className="bg-linear-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-white"
        >
          Gamehub
        </Link>
        <motion.span
          className="absolute -bottom-1 left-0 w-full h-1 bg-linear-to-r from-neon-pink to-neon-cyan rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
      </motion.div>
    </div>

    <div className="navbar-center hidden md:flex">
      <ul className="menu menu-horizontal gap-8">
        {[
          { to: "/", label: "Home" },
          { to: "/all-games", label: "All Games" },
          { to: "/about", label: "About" },
        ].map(({ to, label }, idx) => (
          <motion.li
            key={to}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link
              to={to}
              className="text-lg text-f1f5f9 relative hover:text-neon-cyan transition-all duration-300 font-medium"
              whileHover={{ y: -2, scale: 1.05 }}
            >
              {label}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-neon-pink to-neon-cyan rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>

    <div className="navbar-end">{/* Phase 2: Auth buttons here */}</div>
  </motion.header>
);

export default Header;
