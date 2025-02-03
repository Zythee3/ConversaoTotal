import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import Temperature from "./pages/Temperature/temperature.jsx";
import InputDropDown from "./components/InputDropDown/InputDropDown.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/temperature",
    element: <Temperature title={"Comprimento"} />,
  },
  {
    path: "/teste",
    element: <InputDropDown />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
