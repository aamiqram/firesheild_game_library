import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import errorImg from "../assets/Images/error-404.png";
const NotFound = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="hero min-h-screen bg-base-200"
  >
    <div className="hero-content flex-col text-center">
      <img src={errorImg} alt="" />
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-error">Game Not Found</h1>
        <p className="py-6">
          Looks like that level doesn't exist. Head back to the hub?
        </p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  </motion.div>
);

export default NotFound;
