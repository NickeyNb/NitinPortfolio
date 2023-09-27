import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";

export const server = `https://nbportfolioserver.onrender.com/api/v1`;
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about-me"} element={<About />} />
          <Route path={"/my-projects"} element={<Project />} />
          <Route path={"/contact-me"} element={<Contact />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
