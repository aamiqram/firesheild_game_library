import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const prefilledEmail = location.state?.email || "";

  useEffect(() => {
    if (prefilledEmail) setEmail(prefilledEmail);
  }, [prefilledEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Reset email sent! Check your Gmail.");
      window.open("https://mail.google.com", "_blank");
    } catch (err) {
      setMessage("Failed to send reset email. Try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Forgot Password?</h1>
          <p className="py-6">Enter your email to reset it.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@domain.com"
                className="input input-bordered text-black"
                required
              />
            </div>
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary">
                Reset Password
              </button>
            </div>
            {message && (
              <p
                className={`text-center ${
                  message.includes("Failed") ? "text-error" : "text-success"
                }`}
              >
                {message}
              </p>
            )}
          </form>
          <div className="card-actions justify-center">
            <button
              onClick={() => navigate("/login")}
              className="btn btn-ghost mb-2"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ForgotPassword;
