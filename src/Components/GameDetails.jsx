import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { redirect } from "react-router-dom";

export const loader = async ({ params }) => {
  const { id } = params;
  const games = await import("../data/games.json").then((m) => m.default);
  const game = games.find((g) => g.id === id);
  if (!game) throw new Response("Not Found", { status: 404 });

  requireAuth(); // Protects the page
  return { game };
};

const GameDetails = () => {
  const { game } = useLoaderData();

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-invert max-w-none p-8"
    >
      <div className="card bg-base-100 shadow-xl my-8">
        <figure className="px-10 pt-10">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="rounded-xl w-full h-full object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title text-neon-pink text-3xl">{game.title}</h1>
          <div className="stats md:stats-horizontal xl:stats-horizontal lg:stats-horizontal stats-vertical w-full">
            <div className="stat">
              <div className="stat-title">Category</div>
              <div className="stat-value">{game.category}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Developer</div>
              <div className="stat-value">{game.developer}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Rating</div>
              <div className="stat-value">{game.ratings}/5</div>
            </div>
          </div>
          <p className="py-4">{game.description}</p>
          <a
            href={game.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Download Game
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default GameDetails;
