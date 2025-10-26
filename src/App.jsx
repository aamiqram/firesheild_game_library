import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion, useScroll } from "framer-motion";

function App() {
  const data = useLoaderData();
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  const { scrollY } = useScroll();

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
      "/": "Firesheild-Game-Library",
      "/login": "FGS | Login",
      "/register": "FGS | Register",
      "/my-profile": "FGS | My Profile",
      "/update-profile": "FGS | Update Profile",
      "/about": "FGS | About",
    };
    let title = paths[location.pathname] || "FGS | Game Library";
    const gameId = location.pathname.split("/").pop();
    const game = data.games?.find((g) => g.id === gameId);
    if (game) title = `FGS | ${game.title}`;
    document.title = title;
  }, [location, data]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#1a1a2e] to-slate-900">
        {" "}
        // FIXED: Standard gradient
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <motion.div
        className="fixed inset-0 bg-linear-to-br from-[#1a1a2e] to-slate-900 pointer-events-none z-0"
        style={{ y: scrollY * -0.5 }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10" // FIXED: Content layer above parallax
      >
        <Header user={user} />
        <main className="flex-1 relative">
          <Outlet context={{ games: data.games }} />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
