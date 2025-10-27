import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const Header = ({ user = null }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Logout issue—try refreshing!");
      setLoggingOut(false);
    }
  };

  return (
    <header className="navbar shadow-2xl relative overflow-visible">
      <div className="absolute flex inset-0 container mx-auto">
        <div className="navbar-start">
          <div className="btn btn-ghost hover:text-purple-600 transition-all duration-300 font-bold hover:translate-x-2 text-3xl font-urbanist relative">
            <Link to="/" className="bg-clip-text">
              Gamehub
            </Link>

            <div
              className="absolute -bottom-1 left-0 w-full h-1  "
              style={{ transform: "scaleX(1)" }}
            />
          </div>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-8">
            {[
              { to: "/", label: "Home" },
              { to: "/all-games", label: "All Games" },
              { to: "/about", label: "About" },
            ].map(({ to, label }, idx) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-lg text-f1f5f9 relative hover:text-pink-500 transition-all duration-300 font-bold hover:translate-x-2"
                >
                  {label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-neon-pink to-neon-cyan" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <Link to="/my-profile" className="avatar mr-2">
                <div className="w-10 rounded-full ring ring-neon-purple">
                  <img
                    src={
                      user.photoURL ||
                      "https://cdn-icons-png.flaticon.com/128/149/149071.png"
                    }
                    alt="Profile"
                  />
                </div>
              </Link>

              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="btn btn-ghost text-f1f5f9 hover:text-pink-500 transition-all duration-300 font-bold hover:translate-x-2 relative"
              >
                {loggingOut ? "Logging out..." : "Logout"}
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-f1f5f9 btn btn-ghost mr-2 px-4 py-2 hover:text-pink-500 transition-all duration-300 hover:translate-x-2 font-bold"
                style={{ textDecoration: "none" }}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 text-white rounded hover:text-white transition-all duration-300 font-bold hover:translate-x-2"
                style={{
                  background: "linear-gradient(to right, #8b5cf6, #ec4899)",
                  textDecoration: "none",
                  boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
                }}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
