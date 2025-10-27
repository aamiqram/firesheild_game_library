import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MyProfile = () => {
  const user = auth.currentUser;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">My Profile</h1>
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-neon-purple mt-4">
              <img
                src={
                  user?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/128/149/149071.png"
                }
                alt="Profile"
              />
            </div>
          </div>
          <p className="py-2 text-white">
            <strong>Name:</strong> {user?.displayName || "Not set"}
          </p>
          <p className="py-2">
            <strong>Email:</strong> {user?.email}
          </p>

          <Link to="/update-profile" className="btn btn-primary mt-4">
            Update Information
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MyProfile;
