import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import ReservePage from "../pages/ReservePage";
import ApplyPage from "../pages/ApplyPage";
import PaymentPage from "../pages/PaymentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/auth/login", element: <LoginPage /> },
      { path: "/auth/register", element: <RegisterPage /> },
      { path: "/reservation", element: <ReservePage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/applyclass", element: <ApplyPage /> },
      { path: "/transaction", element: <PaymentPage /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
