import { Form, useActionData, redirect } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { motion } from "framer-motion";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const photoURL = formData.get("photoURL");
  const user = auth.currentUser;
  if (!user) throw redirect("/login");

  try {
    await updateProfile(user, { displayName: name, photoURL });
    return redirect("/my-profile");
  } catch (err) {
    return { error: "Update failed." };
  }
};

const UpdateProfile = () => {
  const actionData = useActionData();
  const user = auth.currentUser;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Update Profile</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form method="post" className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user.displayName || ""}
                placeholder="Your name"
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
                defaultValue={user.photoURL || ""}
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered text-black"
              />
            </div>
            {actionData?.error && (
              <p className="text-error text-center">{actionData.error}</p>
            )}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Update Information
              </button>
            </div>
          </Form>
        </div>
      </div>
    </motion.div>
  );
};

export default UpdateProfile;
