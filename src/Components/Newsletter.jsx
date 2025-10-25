import { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}! Check your inbox for indie game news.`);
    setEmail("");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16 px-4 bg-linear-to-r from-[#8b5cf6]/10 to-[#06b6d4]/10 rounded-2xl my-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-[#ec4899] to-[#06b6d4] bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Stay Updated with Latest Indie Games
        </motion.h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Join our newsletter for exclusive developer spotlights and early
          access alerts.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered input-lg flex-1 bg-base-100 border-[#8b5cf6] placeholder-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-primary btn-lg px-8 gradient-neon"
          >
            Subscribe
          </button>
        </form>
        <small className="text-xs opacity-75 mt-4 block">
          We respect your privacy. Unsubscribe anytime.
        </small>
      </div>
    </motion.section>
  );
};

export default Newsletter;
