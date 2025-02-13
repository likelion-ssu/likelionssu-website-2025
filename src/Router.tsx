import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./common/components/ErrorBoundary";
import Home from "./Home";

const About = lazy(() => import("./About"));
const Recruit = lazy(() => import("./Recruit"));
const Part = lazy(() => import("./Part"));
const Project = lazy(() => import("./Project"));
const ProjectDetail = lazy(() => import("./Project/Detail"));
const NotFound = lazy(() => import("./common/components/NotFound"));

const router = createBrowserRouter([
  // main - 승현
  {
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Home />
      </ErrorBoundary>
    )
  },

  // part - 승현
  {
    path: "/part",
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Part />
      </ErrorBoundary>
    )
  },

  // about - 민주
  {
    path: "/about",
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <About />
      </ErrorBoundary>
    )
  },

  // project
  {
    path: "/project",
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Project />
      </ErrorBoundary>
    )
  },
  // project detail
  {
    path: "/project/:id",
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ProjectDetail />
      </ErrorBoundary>
    )
  },

  // recruit - 시온
  {
    path: "/recruit",
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Recruit />
      </ErrorBoundary>
    )
  },

  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
