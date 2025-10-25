import { createBrowserRouter } from "react-router-dom";
import gamesData from "../data/games.json";
import App from "../App.jsx";
import Home from "../layouts/Home.jsx";
import AllGames from "../components/AllGames.jsx";
import GameDetails from "../components/GameDetails.jsx";
import About from "../components/About.jsx";
import NotFound from "../components/NotFound.jsx";

// Simple static loader for data
const rootLoader = () => ({ games: gamesData });

// Home loader
export const homeLoader = async () => {
  const data = await rootLoader();
  return {
    ...data,
    popularGames: data.games.sort((a, b) => b.ratings - a.ratings).slice(0, 4),
  };
};

const gameLoader = ({ params }) => {
  const game = gamesData.find((g) => g.id === params.id);
  if (!game) throw new Response("Not Found", { status: 404 });
  return { game };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "all-games",
        element: <AllGames />,
        loader: rootLoader, // Loads all games
      },
      {
        path: "game/:id",
        element: <GameDetails />,
        loader: gameLoader,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
