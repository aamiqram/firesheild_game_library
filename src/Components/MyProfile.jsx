import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { requireAuth } from "../Routes/router.jsx"; // ADD: Import (unused now, for consistency)

export const loader = () => ({}); // SIMPLIFIED: Empty loader – protection in ProtectedLayout

const MyProfile = () => {
  const user = useLoaderData(); // Now just passes empty object, but UI uses auth.currentUser if needed
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
            <div className="w-32 rounded-full ring ring-neon-purple">
              <img
                src={user.photoURL || "https://via.placeholder.com/128?text=U"}
                alt="Profile"
              />
            </div>
          </div>
          <p className="py-2">
            <strong>Name:</strong> {user.displayName || "Not set"}
          </p>
          <p className="py-2">
            <strong>Email:</strong> {user.email}
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
