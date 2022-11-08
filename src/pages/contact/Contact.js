import React, { useState, useEffect } from "react";
import "./Contact.css";
import { contact } from "../../shared/contact";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Contact(props) {
  const { activeContact, openDialog, messageSent, message, updateMessage } =
    props;

  return (
    <div>
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
        <TextField
          label="Your message here..."
          focused
          onChange={updateMessage}
        />
        <div>
          <p>Enter to Send</p>
          <p>CTRL to Exit</p>
          {messageSent ? <p>Your message was sent!</p> : ""}
        </div>
      </Dialog>
    </div>
  );
}

export default Contact;
