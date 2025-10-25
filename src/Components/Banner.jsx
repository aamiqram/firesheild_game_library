import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";
import { useOutletContext } from "react-router-dom";

const Banner = () => {
  const { games } = useOutletContext();
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerGames = games.slice(0, 3);
  const { scrollY } = useScroll();

  const y = useMotionValue(0);
  const yImage = useTransform(y, [0, 100], [0, -50]); // Parallax shift

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % bannerGames.length),
      5000
    ); // Slower slide
    return () => clearInterval(interval);
  }, [bannerGames.length]);

  return (
    <section className="relative h-120 md:h-[500px] overflow-hidden rounded-lg my-8 bg-linear-to-r from-[#1a1a2e] to-[#16213e]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bannerGames[currentSlide]?.coverPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: yImage,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80"
            style={{ y }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-2xl mb-4 bg-linear-to-r from-[#ec4899] to-[#06b6d4] bg-clip-text whitespace-normal wrap-break-word max-w-4xl mx-auto px-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
            >
              {bannerGames[currentSlide]?.title}
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-[#06b6d4] mb-6 px-2 max-w-md mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {bannerGames[currentSlide]?.category} •{" "}
              {bannerGames[currentSlide]?.ratings} Stars
            </motion.p>
            <motion.div
              className="btn btn-primary btn-lg px-8 py-3 text-lg gradient-neon"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 30px rgba(236, 72, 153, 0.8)",
              }}
              transition={{ delay: 0.6 }}
            >
              Explore Now
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {bannerGames.map((_, idx) => (
          <motion.button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide
                ? "bg-[#ec4899] scale-125 shadow-lg shadow-[#ec4899]"
                : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(idx)}
            whileHover={{ scale: 1.5, backgroundColor: "#06b6d4" }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
