import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col flex-1 bg-red-900 max-h-screen">
      <Header className="p-2 border-b-2 border-white" />
      <div className="flex-auto overflow-x-hidden">
        <Outlet />
      </div>
      <Footer className="p-2 border-t-2 border-white" />
    </div>
  );
}

export default Layout;
