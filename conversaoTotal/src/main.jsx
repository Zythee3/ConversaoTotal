import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Length from "./pages/Length/Length.jsx";
import Speed from "./pages/Speed/Speed.jsx"
import Mass from "./pages/Mass/Mass.jsx";
import Volume from "./pages/Volume/Volume.jsx";
import Temperature from "./pages/Temperature/Temperature.jsx";
import Time from "./pages/Time/Time.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/length",
    element: <Length />,
  },
  {
    path: "/speed",
    element: <Speed />,
  },
  {
    path: "/Mass",
    element: <Mass />
  },
  {
    path: "/volume",
    element: <Volume />
  },
  {
    path: "/temperature",
    element: <Temperature />
  },
  {
    path: "/time",
    element: <Time />
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
