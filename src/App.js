import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Header from "./shared/Header";

import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import { projects } from "./shared/projects";
import NavHelpMessage from "./shared/NavHelpMessage";
import { contact } from "./shared/contact";

function App() {
  const userInputKeys = ["w", "a", "s", "d"];
  const [currentPage, setCurrentPage] = useState("home");
  const [activeId, setActiveId] = useState(0);
  const [activeContact, setActiveContact] = useState(0);
  const navigate = useNavigate();
  const [showNavHelpMessage, setShowNavHelpMessage] = useState(false);

  useEffect(() => {
    setShowNavHelpMessage(false);
    setTimeout(navHelpMessageTimer, 10000);
  }, [currentPage]);

  useEffect(() => {
    setTimeout(navHelpMessageTimer, 10000);
  }, []);

  const navHelpMessageTimer = () => {
    setShowNavHelpMessage(true);
  };

  onkeydown = (e) => {
    let key = e.key.toLowerCase();
    if (key === "d" || key === "a") {
      checkPageInputChange(key);
    } else if (currentPage === "projects" && (key === "w" || key === "s")) {
      checkProjectInputChange(key);
    } else if (currentPage === "projects" && key === "enter") {
      window.open(projects[activeId].url, "_blank");
    } else if (currentPage === "contact" && (key === "w" || key === "s")) {
      checkContactInputChange(key);
    } else if (currentPage === "contact" && key === "enter") {
      window.open(contact[activeContact].url, "_blank");
    }
  };

  const checkPageInputChange = (key) => {
    if (userInputKeys.includes(key)) {
      if (
        (currentPage === "home" && key === "d") ||
        (currentPage === "projects" && key === "a")
      ) {
        navigate("/about");
        setCurrentPage("about");
      } else if (
        (currentPage === "about" && key === "d") ||
        (currentPage === "contact" && key === "a")
      ) {
        navigate("/projects");
        setCurrentPage("projects");
      } else if (currentPage === "projects" && key === "d") {
        navigate("/contact");
        setCurrentPage("contact");
      } else if (currentPage === "about" && key === "a") {
        navigate("/home");
        setCurrentPage("home");
      }
    }
  };

  const checkProjectInputChange = (key) => {
    if (key === "s" && activeId < 8) {
      setActiveId(activeId + 1);
    } else if (key === "w" && activeId > 0) {
      setActiveId(activeId - 1);
    }
  };

  const checkContactInputChange = (key) => {
    if (key === "s" && activeContact === 0) {
      setActiveContact(activeContact + 1);
    } else if (key === "w" && activeContact === 1) {
      setActiveContact(activeContact - 1);
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/projects"
          element={<Projects activeId={activeId} />}
        ></Route>
        <Route
          path="/contact"
          element={<Contact activeContact={activeContact} />}
        ></Route>
      </Routes>
      {showNavHelpMessage ? <NavHelpMessage /> : ""}
    </div>
  );
}

export default App;
