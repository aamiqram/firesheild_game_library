import { Form, useActionData, useNavigation, redirect } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"; // ADD: Firebase imports
import { auth, googleProvider } from "../firebase"; // ADD: Import auth/providers
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return redirect("/");
  } catch (err) {
    return { error: "Invalid credentials. Try again." };
  }
};

const Login = () => {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = "/";
    } catch (err) {
      console.error("Google login failed", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login to Gamehub</h1>
          <p className="py-6">Discover and support indie devs securely.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {" "}
          {/* FIXED: flex-shrink-0 */}
          <Form method="post" className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@domain.com"
                className="input input-bordered text-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered text-black"
                required
              />
              {actionData?.error && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {actionData.error}
                  </span>
                </label>
              )}
              <label className="label justify-start">
                <Link
                  to="/forgot-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </div>
          </Form>
          <div className="card-body pt-0 px-6">
            <button onClick={handleGoogle} className="btn btn-outline w-full">
              Continue with Google
            </button>
            <label className="label justify-center">
              <Link to="/register" className="label-text-alt link link-hover">
                Don't have an account? Register
              </Link>
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
