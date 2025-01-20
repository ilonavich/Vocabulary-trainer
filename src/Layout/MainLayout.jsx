// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Outlet /> {/* Child routes will be rendered here */}
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
