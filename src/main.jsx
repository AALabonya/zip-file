import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import Login from "./pages/admin/Login";
import AuthProvider from "./AuthProvider";
import Dashboard from "./pages/admin/Dashboard";
import AdminRoute from "./pages/admin/AdminRoute";
import AddCar from "./pages/admin/pages/AddCar";
import AddCloseCar from "./pages/admin/pages/AddCloseCar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PortfolioDetails from "./pages/admin/pages/PortfolioDetails";
import Cars from "./pages/admin/pages/Cars";
import Portfolios from "./pages/admin/pages/Portfolios";
import Shop from "./pages/Shop";
import EditCar from "./pages/admin/pages/EditCar";
import EditP from "./pages/admin/pages/EditP";
import CarDtls from "./pages/CarDtls";
import Contact from "./pages/Contact";
import About1 from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";
import Enquiry from "./pages/Enquiry/Enquiry";
import VehicleInfoForm from "./pages/Enquiry/VehicleInfoForm";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      // Users
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: <About1 /> },
      { path: '/portfolio', element: <Portfolio />, loader: () => fetch('http://localhost:5000/deal-close/v1') },
      {
        path: "/portfolio/:id",
        element: <PortfolioDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/deal-close/v1/${params.id}`),
      },
      { path: '/enquiry', element: <Enquiry/> },
      {
        path:"/VehicleInfoForm", element:<VehicleInfoForm/>
      },
      { path: "/shop", element: <Shop /> },
      {
        path: "/shop/:id",
        element: <CarDtls />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/shop/v1/${params.id}`),
      },

      // Admin
      {
        path: "admin/dashboard",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
        children: [
          { path: "add-car", element: <AddCar /> },
          { path: "add-portfolio", element: <AddCloseCar /> },
          { path: "add-car", element: <AddCar /> },
          { index: true, element: <Cars /> },
          { path: "portfolios", element: <Portfolios /> },
          {
            path: "edit-car/:id",
            element: <EditCar />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/shop/v1/${params.id}`),
          },
          {
            path: "portfolios/edit/:id",
            element: <EditP />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/deal-close/v1/${params.id}`),
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
