// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <main>
        <Outlet /> {/* Child routes will be rendered here */}
      </main>
    </div>
  );
};

export default MainLayout;
