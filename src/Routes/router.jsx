import { createBrowserRouter, redirect } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { auth } from "../firebase.js";
import gamesData from "../data/games.json";
import App from "../App.jsx";
import Home from "../layouts/Home.jsx";
import Login, { action as loginAction } from "../components/Login.jsx";
import Register, { action as registerAction } from "../components/Register.jsx";
import ForgotPassword from "../components/ForgotPassword.jsx";
import MyProfile from "../components/MyProfile";

import UpdateProfile, {
  action as updateAction,
} from "../components/UpdateProfile.jsx";
import GameDetails, {
  loader as detailsLoader,
} from "../components/GameDetails.jsx";
import About from "../components/About.jsx";
import AllGames from "../components/AllGames.jsx";
import NotFound from "../components/NotFound.jsx";
import ProtectedLayout from "../components/ProtectedLayout.jsx";

export const rootLoader = async () => ({ games: gamesData });

export const requireAuth = () => {
  const user = getAuth().currentUser;
  if (!user) throw redirect("/login");
  return user;
};

export const homeLoader = async () => {
  const data = await rootLoader();
  return {
    ...data,
    popularGames: data.games.sort((a, b) => b.ratings - a.ratings).slice(0, 4),
  };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "all-games",
        element: <AllGames />,
        loader: rootLoader,
      },
      {
        path: "game/:id",
        element: (
          <ProtectedLayout>
            <GameDetails />
          </ProtectedLayout>
        ),
        loader: detailsLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "my-profile",
        element: (
          <ProtectedLayout>
            <MyProfile />
          </ProtectedLayout>
        ),
      },
      {
        path: "update-profile",
        element: <UpdateProfile />,
        action: updateAction,
        loader: requireAuth,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;
