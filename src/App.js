import React, { useState, useEffect, useRef } from "react";
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

import emailjs from "@emailjs/browser";

function App() {
  const navigate = useNavigate();
  const form = useRef();
  const scroll = Scroll.animateScroll;

  const userInputKeys = ["w", "a", "s", "d"];
  const [currentPage, setCurrentPage] = useState("home");
  const [activeId, setActiveId] = useState(0);
  const [activeIdHistory, setActiveIdHistory] = useState([]);
  const [activeContact, setActiveContact] = useState(0);
  const [showNavHelpMessage, setShowNavHelpMessage] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [message, setMessage] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    scrollToActiveProject();
  });

  useEffect(() => {
    checkRoute();
    setTimeout(navHelpMessageTimer, 10000);
    scroll.scrollToTop();
    setTimeout(doneLoading, 1000);
  }, []);

  useEffect(() => {
    setShowNavHelpMessage(false);
    setTimeout(navHelpMessageTimer, 10000);
  }, [currentPage]);

  useEffect(() => {
    scrollToActiveProject();
  }, [activeId]);

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
      setOpenDialog(true);
    } else if (
      openDialog &&
      currentPage === "contact" &&
      key === "enter" &&
      openDialog
    ) {
      sendMessage();
    } else if (openDialog && currentPage === "contact" && key === "control") {
      setOpenDialog(false);
      setMessageSent(false);
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
      setActiveIdHistory([...activeIdHistory, activeId + 1]);
    } else if (key === "w" && activeId > 0) {
      setActiveId(activeId - 1);
      setActiveIdHistory([...activeIdHistory, activeId - 1]);
    }
  };

  const checkContactInputChange = (key) => {
    if (
      key === "s" &&
      (activeContact === 0 || activeContact === 1) &&
      !openDialog
    ) {
      setActiveContact(activeContact + 1);
    } else if (
      key === "w" &&
      (activeContact === 1 || activeContact === 2) &&
      !openDialog
    ) {
      setActiveContact(activeContact - 1);
    }
  };

  const scrollToActiveProject = () => {
    if (window.innerWidth <= 700) {
      scroll.scrollTo((window.innerWidth - 40) * 0.5 * activeId);
    } else {
      let historyLength = activeIdHistory.length;
      if (historyLength > 0) {
        if (
          (activeId === 3 || activeId === 6 || activeId === 9) &&
          activeIdHistory[historyLength - 2] === activeId - 1
        ) {
          scroll.scrollTo(window.innerWidth * 0.1 * activeId);
        } else if (
          (activeId === 2 || activeId === 5 || activeId === 8) &&
          activeIdHistory[historyLength - 2] === activeId + 1
        ) {
          scroll.scrollTo(window.innerWidth * 0.1 * (activeId - 3));
        }
      }
    }
  };

  const updateMessage = (e) => {
    let updatedMessage = {
      first: "",
      last: "",
      email: "",
      message: "",
    };
    updatedMessage[e.target.name] = e.target.value;
    setMessage(updatedMessage);
  };

  const sendMessage = async () => {
    console.log(message);
    await emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setMessageSent(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const doneLoading = () => {
    setLoading(false);
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
        <Route path="/home" element={<Home loading={loading} />}></Route>
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
              form={form}
            />
          }
        ></Route>
      </Routes>
      {showNavHelpMessage ? <NavHelpMessage /> : ""}
    </div>
  );
}

export default App;
