import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


export default function Layout() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
    <div className="flex-1">
      <Outlet />
    </div>
      <Footer />
    </div>
  );
}
