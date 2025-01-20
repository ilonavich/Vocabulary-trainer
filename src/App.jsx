// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import History from "./pages/History";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import VocabCards from "./pages/VocabCards";
import AddVocab from "./pages/AddVocab";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> {/* Default route */}
          <Route path="about" element={<About />} /> {/* /about route */}
          <Route path="contact" element={<Contact />} /> {/* /contact route */}
          <Route path="history" element={<History />} /> {/* /history route */}
          <Route path="services" element={<Services />} />{" "}
          {/* /services route */}
          <Route path="projects" element={<Projects />} />{" "}
          {/* /projects route */}
          <Route path="blog" element={<Blog />} /> {/* /blog route */}
          <Route path="vocabcards" element={<VocabCards />} />{" "}
          {/* /vocabcards route */}
          <Route path="addvocab" element={<AddVocab />} />{" "}
          {/* /addvocad route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
