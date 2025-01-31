import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import Temperature from "./pages/Temperature/temperature.jsx";
import UnitDropdown from "./services/UnitDropDown/UnitDropDown.jsx";
import Teste from "./pages/teste/teste.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/temperature",
    element: <Temperature />,
  },
  {
    path: "/teste",
    element: <Teste />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
