import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./shared/Header";

import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

import emailjs from "@emailjs/browser";

function App() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(doneLoading, 1000);
  }, []);

  const sendMessage = async (message) => {
    console.log(message);
    console.log(form.current);
    await emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
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

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home loading={loading} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route
          path="/contact"
          element={
            <Contact
              messageSent={messageSent}
              form={form}
              sendMessage={sendMessage}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
