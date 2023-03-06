import React, { useState } from "react";
import "./Contact.css";
import { contact } from "../../shared/contact";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

function Contact(props) {
  const { messageSent, form, sendMessage } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [message, setMessage] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });

  const handleClick = (c) => {
    if (c.url) {
      window.open(c.url);
    } else {
      setOpenDialog(true);
    }
  };

  return (
    <div className="center-div">
      <div className="contact-container">
        <div className="info">
          <h4>haefner.ryan@gmail.com</h4>
        </div>
        {contact.map((c, index) => {
          return (
            <div key={index} onClick={() => handleClick(c)} className="contact">
              <h4>{c.title}</h4>
            </div>
          );
        })}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>CONTACT ME</DialogTitle>
          <form ref={form}>
            <div>
              <input
                placeholder="First Name..."
                name="first"
                onChange={(e) =>
                  setMessage({
                    ...message,
                    first: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <input
                placeholder="Last Name..."
                name="last"
                onChange={(e) =>
                  setMessage({
                    ...message,
                    last: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <input
                placeholder="Email..."
                name="email"
                onChange={(e) =>
                  setMessage({
                    ...message,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <textarea
                placeholder="Your message here..."
                name="message"
                onChange={(e) =>
                  setMessage({
                    ...message,
                    message: e.target.value,
                  })
                }
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </form>
          <button onClick={() => sendMessage(message)}>SEND</button>
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
