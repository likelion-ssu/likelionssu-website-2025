import { createBrowserRouter } from "react-router-dom";

import About from "./About";
import Recruit from "./Recruit";
import Home from "./Home";

const router = createBrowserRouter([
  // main - 승현
  {
    path: "/",
    element: <Home />,
  },

  // part ?? (와프 나온 후)

  // about - 민주
  {
    path: "/about",
    element: <About />,
  },

  // project ?? (와프 나온 후)

  // recruit - 시온
  {
    path: "/recruit",
    element: <Recruit />,
  },
]);

export default router;
