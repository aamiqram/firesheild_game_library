import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => (
  <div className="min-h-screen py-12 px-4 bg-linear-to-br from-[#1a1a2e] to-slate-900 space-y-16">
    {/* Hero Mission */}
    <section className="hero min-h-[40vh] bg-linear-to-b from-neon-purple/10 to-transparent rounded-2xl my-8 relative overflow-hidden">
      <div className="hero-content  flex-col text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-neon-pink to-neon-cyan bg-clip-text drop-shadow-lg text-white">
          About Gamehub
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto px-4">
          Gamehub is your urban jungle for discovering and supporting indie game
          developers. Dive into pixel-perfect worlds, connect with creators, and
          fuel the next big hit. We're more than a library—we're a launchpad for
          dreams.
        </p>
      </div>
    </section>

    {/* Features Section with Icons */}
    <section className="py-10">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Why Gamehub?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <motion.div
          className="card bg-base-100/80 backdrop-blur-md shadow-xl border-neon-purple/30 p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
          }}
        >
          <div className="text-4xl text-neon-cyan mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-neon-cyan mb-4">
            Discover Indies
          </h3>
          <p className="text-gray-300">
            Browse curated collections of hidden gems from passionate devs.
          </p>
        </motion.div>
        <motion.div
          className="card bg-base-100/80 backdrop-blur-md shadow-xl border-neon-purple/30 p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
          }}
        >
          <div className="text-4xl text-neon-pink mb-4">💎</div>
          <h3 className="text-2xl font-bold text-neon-pink mb-4">
            Support Creators
          </h3>
          <p className="text-gray-300">
            Direct links to Steam, itch.io, and more—vote with your downloads.
          </p>
        </motion.div>
        <motion.div
          className="card bg-base-100/80 backdrop-blur-md shadow-xl border-neon-purple/30 p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
          }}
        >
          <div className="text-4xl text-neon-cyan mb-4">💬</div>
          <h3 className="text-2xl font-bold text-neon-cyan mb-4">
            Community Hub
          </h3>
          <p className="text-gray-300">
            Join forums, share reviews, and collaborate on the next urban
            adventure.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Team Section with Team Illustration */}
    <section className="py-10">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Team
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <motion.div
          className="card bg-base-100/80 backdrop-blur-md shadow-xl border-neon-purple/30 p-6 text-center items-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-neon-pink">
              <img
                src="https://cdn-icons-png.flaticon.com/128/16683/16683419.png"
                alt="Team Member"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold text-neon-pink mt-4">Alex Doe</h3>
          <p className="text-gray-300">Founder & Dev Whisperer</p>
        </motion.div>
        <motion.div
          className="card bg-base-100/80 backdrop-blur-md shadow-xl border-neon-purple/30 p-6 text-center items-center"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-neon-cyan">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png"
                alt="Team Member"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold text-neon-cyan mt-4">Jordan Lee</h3>
          <p className="text-gray-300">Design Guru</p>
        </motion.div>
        <motion.div
          className="card bg-base-100/80 backdrop-blur-md shadow-xl border-neon-purple/30 p-6 text-center items-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-neon-purple">
              <img
                src="https://cdn-icons-png.flaticon.com/128/219/219970.png"
                alt="Team Member"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold text-neon-purple mt-4">Sam Kim</h3>
          <p className="text-gray-300">Community Lead</p>
        </motion.div>
      </div>
      {/* Embedded Team Illustration */}
      <div className="text-center mt-12">
        <p className="text-gray-400 italic">
          Inspired by indie legends—join us in the urban quest!
        </p>
      </div>
    </section>

    {/* CTA Community Scene */}
    <section className="py-10">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Join the Urban Quest
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 max-w-4xl mx-auto text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Ready to discover, support, and create? Sign up and level up your indie
        game journey.
      </motion.p>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link to="/register" className="btn btn-primary btn-lg px-12 shadow-lg">
          Get Started
        </Link>
      </motion.div>
      {/* Embedded Community Scene */}
    </section>
  </div>
);

export default About;
