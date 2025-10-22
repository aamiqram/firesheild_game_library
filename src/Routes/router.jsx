import { createBrowserRouter, Router } from "react-router";
import Mainlayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
  },
  {
    path: "/auth",
    element: <h2>Authemtication Layout</h2>,
  },
  {
    path: "*",
    element: <h1>Error404</h1>,
  },
]);
export default router;
