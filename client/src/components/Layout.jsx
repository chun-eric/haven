import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen px-6 mx-auto max-w-7xl'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
