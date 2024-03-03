import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../pages/navbar/Navbar";
import Footer from "../pages/footer/Footer";

const Layout = () => {
  return (
    <div>
      {/*  Header navbar will show here */}
      <NavbarComponent />

      {/*  all children components will count here */}
      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
