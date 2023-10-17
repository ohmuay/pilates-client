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
import AuthAdmin from "../attribute/authenticate/AuthAdmin";
import AuthUser from "../attribute/authenticate/AuthUser";
// import RedirectIfAuthenticated from "../attribute/authenticate/RedirectIfAuthticated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/auth/login", element: <LoginPage /> },
      { path: "/auth/register", element: <RegisterPage /> },
    ],
  },

  {
    path: "/",
    element: (
      <AuthUser>
        <Layout />
      </AuthUser>
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
      <AuthAdmin>
        <Layout />
      </AuthAdmin>
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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/auth/login", element: <LoginPage /> },
//       { path: "/auth/register", element: <RegisterPage /> },
//       { path: "/reservation", element: <ReservePage /> },
//       { path: "/profile", element: <ProfilePage /> },
//       { path: "/applyclass", element: <ApplyPage /> },
//       { path: "/payment", element: <PaymentPage /> },
//       { path: "/adtransaction", element: <Transaction /> },
//       { path: "/admember", element: <Member /> },
//       { path: "/adclassroom", element: <Classroom /> },
//       { path: "/adreserve", element: <Reservation /> },
//     ],
//   },
// ]);

// {
//   path: "/auth/login",
//   element : (
//     <RedirectIfAuthenticated>
//       <LoginPage />
//     </RedirectIfAuthenticated>
//   )
// },
