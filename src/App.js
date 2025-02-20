import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage.js";
import Education from "./pages/Education.js";
import ExpInt from "./pages/Exp_Int.js";
import Achievements from "./pages/Achievements.js";
import Projects from "./pages/Projects.js";
import Skills from "./pages/Skills.js";
import Research from "./pages/Research.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/exp_intern" element={<ExpInt />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="research_paper" element={<Research />} />
      </Routes>
    </Router>
  );
}

export default App;
