import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion, useScroll } from "framer-motion";

function App() {
  const data = useLoaderData();
  const location = useLocation();
  const { scrollY } = useScroll();

  // Mouse trail
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty("--mouse-x", e.clientX + "px");
      document.body.style.setProperty("--mouse-y", e.clientY + "px");
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const paths = {
      "/": "Gamehub - Discover Indie Games",
      "/about": "Gamehub - About",
    };
    let title = paths[location.pathname] || "Gamehub - Game Library";
    const gameId = location.pathname.split("/").pop();
    const game = data.games?.find((g) => g.id === gameId);
    if (game) title = `Gamehub - ${game.title}`;
    document.title = title;
  }, [location, data]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-linear-to-br from-[#1a1a2e] to-slate-900 relative overflow-hidden"
      style={{ y: scrollY * -0.5 }} // Parallax body
    >
      <Header />
      <main className="flex-1 relative z-10">
        <Outlet context={{ games: data.games }} />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
