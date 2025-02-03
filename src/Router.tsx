import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Recruit = lazy(() => import("./Recruit"));
const NotFound = lazy(() => import("./common/components/NotFound"));

const router = createBrowserRouter([
  // main - 승현
  {
    path: "/",
    element: <Home />
  },

  // part ?? (와프 나온 후)

  // about - 민주
  {
    path: "/about",
    element: <About />
  },

  // project ?? (와프 나온 후)

  // recruit - 시온
  {
    path: "/recruit",
    element: <Recruit />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
