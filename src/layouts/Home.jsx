import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import GameCard from "../components/GameCard";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const { popularGames } = useLoaderData();
  return (
    <div className="space-y-12">
      <Banner />
      <section className="py-12 px-4 bg-linear-to-b from-transparent to-[#0f0f23]/50">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Popular Games
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {popularGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/all-games" className="btn btn-primary btn-lg px-8">
            Show All Games
          </Link>
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

export default Home;
