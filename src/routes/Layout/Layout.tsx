import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col flex-1 max-h-screen">
      <Header />
      <div id="layoutbody" className="overflow-x-hidden relative flex-1 flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
