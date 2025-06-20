import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./layouts/Layout.jsx";
import Planos from "./pages/Planos.jsx";
import Servicos from "./pages/Servicos.jsx";
import Contato from "./pages/Contato.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // <== layout com o Header + Outlet
    children: [
      { index: true, element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/Login", element: <Login /> },
      { path: "/Planos", element: <Planos />,},
      { path: '/Servicos', element: <Servicos/>},
      { path: '/Contato', element: <Contato/>}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
