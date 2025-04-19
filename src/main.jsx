import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";

import About from "./pages/About.jsx";

import PageNotFound from "./components/PageNotFound.jsx";

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
