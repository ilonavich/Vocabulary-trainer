// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <main>
        <Outlet /> {/* Child routes will be rendered here */}
        <Navbar />
      </main>
    </div>
  );
};

export default Layout;
