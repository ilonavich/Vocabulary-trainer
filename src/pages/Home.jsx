// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <h1>
      <Navbar />
      <HeroSection />
      <Footer />
    </h1>
  );
};

export default Home;
