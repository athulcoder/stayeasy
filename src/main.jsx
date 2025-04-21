import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";

import About from "./pages/About.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Founders from "./pages/Founders.jsx";
import FeaturesList from "./pages/Features.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Home></Home>
      </>
    ),

    errorElement: (
      <>
        <PageNotFound></PageNotFound>
      </>
    ),
  },
  {
    path: "/features",
    element: <FeaturesList></FeaturesList>,

    errorElement: (
      <>
        <PageNotFound></PageNotFound>
      </>
    ),
  },
  {
    path: "/founders",
    element: (
      <>
        <Founders></Founders>
      </>
    ),

    errorElement: (
      <>
        <PageNotFound></PageNotFound>
      </>
    ),
  },
  {
    path: "/working",
    element: (
      <>
        <HowItWorks></HowItWorks>
      </>
    ),

    errorElement: (
      <>
        <PageNotFound></PageNotFound>
      </>
    ),
  },

  {
    path: "/about",
    element: (
      <>
        <About />
      </>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
