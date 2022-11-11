import React from "react";
import "./Contact.css";
import { contact } from "../../shared/contact";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

function Contact(props) {
  const {
    activeContact,
    openDialog,
    messageSent,
    message,
    updateMessage,
    form,
  } = props;

  return (
    <div className="center-div">
      <div className="contact-container">
        <div className="info">
          <h4>haefner.ryan@gmail.com</h4>
        </div>
        {contact.map((c, index) => {
          return (
            <div key={index}>
              <div
                className={`contact ${
                  activeContact === index ? "active-contact" : ""
                }`}
              >
                <h4>{c.title}</h4>
              </div>
            </div>
          );
        })}
        <Dialog open={openDialog}>
          <DialogTitle>CONTACT ME</DialogTitle>
          <form ref={form}>
            <div>
              <input
                placeholder="First Name..."
                name="first"
                onChange={updateMessage}
              />
            </div>
            <div>
              <input
                placeholder="Last Name..."
                name="last"
                onChange={updateMessage}
              />
            </div>
            <div>
              <input
                placeholder="Email..."
                name="email"
                onChange={updateMessage}
              />
            </div>
            <div>
              <textarea
                placeholder="Your message here..."
                name="message"
                onChange={updateMessage}
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </form>
          <div>
            <p>Enter to Send | CTRL to Exit</p>
            {messageSent ? (
              <p className="warning-text">Your message was sent!</p>
            ) : (
              ""
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default Contact;
