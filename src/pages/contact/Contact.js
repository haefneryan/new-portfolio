import React from "react";
import "./Contact.css";
import { contact } from "../../shared/contact";

function Contact(props) {
  const { activeContact } = props;

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
            {/* <div>
              <a href="../shared/Resume_Ryan_Haefner.pdf" download>
                <div className="contact">RESUME</div>
              </a>
            </div> */}
            {/* <div>
              <div className="contact" id="contact_1">
                <h4>LINKEDIN</h4>
              </div>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default Contact;
