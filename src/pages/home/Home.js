import React from "react";
import profileImage from "../../assets/profileimage.jpg";

function Home() {
  return (
    <div className="center-div">
      <img src={profileImage} />
      <h1>RYAN HAEFNER</h1>
      <h3>WELCOME TO MY PORTFOLIO</h3>
    </div>
  );
}

export default Home;
