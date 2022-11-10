import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Header from "./shared/Header";

import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import NavHelpMessage from "./shared/NavHelpMessage";
import { projects } from "./shared/projects";
import { contact } from "./shared/contact";
import Scroll from "react-scroll";

function App() {
  const userInputKeys = ["w", "a", "s", "d"];
  const [currentPage, setCurrentPage] = useState("home");
  const [activeId, setActiveId] = useState(0);
  const [activeContact, setActiveContact] = useState(0);
  const navigate = useNavigate();
  const [showNavHelpMessage, setShowNavHelpMessage] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [message, setMessage] = useState("");
  const scroll = Scroll.animateScroll;

  useEffect(() => {
    document.title = "Ryan Haefner - Portfolio";
    checkRoute();
    setTimeout(navHelpMessageTimer, 10000);
    scroll.scrollToTop();
  }, []);

  useEffect(() => {
    setShowNavHelpMessage(false);
    setTimeout(navHelpMessageTimer, 10000);
  }, [currentPage]);

  useEffect(() => {
    scrollToActiveProject();
  }, [activeId]);

  useEffect(() => {
    scrollToActiveProject();
  });

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
    } else if (
      currentPage === "contact" &&
      (activeContact === 0 || activeContact === 1) &&
      key === "enter"
    ) {
      window.open(contact[activeContact].url, "_blank");
    } else if (
      currentPage === "contact" &&
      activeContact === 2 &&
      key === "enter" &&
      !openDialog
    ) {
      setOpenDialog(!openDialog);
    } else if (
      openDialog &&
      currentPage === "contact" &&
      key === "enter" &&
      openDialog
    ) {
      setMessageSent(true);
      setTimeout(closeDialog, 3000);
    } else if (openDialog && currentPage === "contact" && key === "control") {
      setOpenDialog(false);
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
        (currentPage === "contact" && key === "a" && !openDialog)
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
    if (key === "s" && activeId < projects.length - 1) {
      setActiveId(activeId + 1);
    } else if (key === "w" && activeId > 0) {
      setActiveId(activeId - 1);
    }
  };

  const checkContactInputChange = (key) => {
    if (key === "s" && (activeContact === 0 || activeContact === 1)) {
      setActiveContact(activeContact + 1);
    } else if (key === "w" && (activeContact === 1 || activeContact === 2)) {
      setActiveContact(activeContact - 1);
    }
  };

  const scrollToActiveProject = () => {
    if (window.innerWidth <= 700) {
      scroll.scrollTo((window.innerWidth - 40) * 0.5 * activeId);
    }
  };

  const closeDialog = () => {
    sendMessage();
    setMessageSent(false);
    setOpenDialog(false);
  };

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async () => {
    console.log(message);
  };

  const checkRoute = () => {
    switch (window.location.pathname) {
      case "/home":
        setCurrentPage("home");
        break;
      case "/about":
        setCurrentPage("about");
        break;
      case "/projects":
        setCurrentPage("projects");
        break;
      case "/contact":
        setCurrentPage("contact");
        break;
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
          element={
            <Contact
              activeContact={activeContact}
              openDialog={openDialog}
              messageSent={messageSent}
              updateMessage={updateMessage}
            />
          }
        ></Route>
      </Routes>
      {showNavHelpMessage ? <NavHelpMessage /> : ""}
    </div>
  );
}

export default App;
