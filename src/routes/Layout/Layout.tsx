import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col flex-1 max-h-screen">
      <Header />
      <div className="flex-auto overflow-x-hidden relative">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
