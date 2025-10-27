import { Form, useActionData, useNavigation, redirect } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const photoURL = formData.get("photoURL") || "";
  const password = formData.get("password");

  // Password validation
  if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
    return {
      error:
        "Password must have uppercase, lowercase, and be at least 6 chars.",
    };
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: name, photoURL });
    return redirect("/");
  } catch (err) {
    return { error: "Registration failed. Email may exist." };
  }
};

const Register = () => {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = "/";
    } catch (err) {
      console.error("Google registration failed", err);
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
          <h1 className="text-5xl font-bold">Join Gamehub</h1>
          <p className="py-6">Create an account to access protected content.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {" "}
          <Form method="post" className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered text-black"
                required
              />
            </div>
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
                <span className="label-text">Photo URL (optional)</span>
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered text-black"
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
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </div>
          </Form>
          <div className="card-body pt-0 px-6">
            <button
              onClick={handleGoogle}
              className="btn btn-outline bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Continue with Google
            </button>
            <label className="label justify-center">
              Already have an account?{" "}
              <Link to="/login" className="label-text-alt link link-hover">
                Login
              </Link>
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
