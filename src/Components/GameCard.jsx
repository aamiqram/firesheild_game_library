import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";

const GameCard = ({ game }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [-20, 20]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    x.set((e.clientX - rect.left - width / 2) / 5);
    y.set((e.clientY - rect.top - height / 2) / 5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="card compact bg-base-100/80 backdrop-blur-md shadow-2xl border border-[#8b5cf6]/30 overflow-hidden group cursor-pointer perspective-1000"
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -10,
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.4)",
        borderColor: "rgba(139, 92, 246, 1)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <figure className="relative overflow-hidden">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
      </figure>
      <div className="relative card-body p-4">
        <h3 className="card-title text-[#ec4899] text-lg font-bold truncate">
          {game.title}
        </h3>
        <div className="absolute top-2 right-2 badge badge-primary badge-lg shadow-lg">
          {game.ratings} ★
        </div>
        <p className="text-sm text-gray-400 mb-2">
          {game.category} • {game.developer}
        </p>
        <p className="text-xs line-clamp-2 text-gray-500">{game.description}</p>
        <div className="card-actions justify-center mt-4">
          <Link
            to={`/game/${game.id}`}
            className="btn btn-primary btn-sm px-6 shadow-md hover:shadow-[#ec4899]/50"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;
