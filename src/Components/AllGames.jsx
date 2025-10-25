import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";

const AllGames = () => {
  const { games } = useLoaderData();
  return (
    <div className="py-12 px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-white drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        All Games
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/" className="btn btn-primary btn-lg px-8">
          {" "}
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AllGames;
