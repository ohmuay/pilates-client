import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import ReservePage from "../pages/ReservePage";
import ApplyPage from "../pages/ApplyPage";
import PaymentPage from "../pages/PaymentPage";
import Transaction from "../pages-admin/Transaction";
import Member from "../pages-admin/Member";
import Classroom from "../pages-admin/Classroom";
import Reservation from "../pages-admin/Reservation";
import AdminAuth from "../attribute/authenticate/AdminAuth";
import UserAuth from "../attribute/authenticate/UserAuth";
import RedirectIfAuthenticated from "../attribute/authenticate/RedirectIfAuthticated";

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <RedirectIfAuthenticated>
        <Layout />
      </RedirectIfAuthenticated>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/auth/login", element: <LoginPage /> },
      { path: "/auth/register", element: <RegisterPage /> },
    ],
  },

  {
    path: "/",
    element: (
      <UserAuth>
        <Layout />
      </UserAuth>
    ),
    children: [
      { path: "/reservation", element: <ReservePage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/applyclass", element: <ApplyPage /> },
      { path: "/payment", element: <PaymentPage /> },
    ],
  },

  {
    path: "/",
    element: (
      <AdminAuth>
        <Layout />
      </AdminAuth>
    ),
    children: [
      { path: "/adtransaction", element: <Transaction /> },
      { path: "/admember", element: <Member /> },
      { path: "/adclassroom", element: <Classroom /> },
      { path: "/adreserve", element: <Reservation /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
