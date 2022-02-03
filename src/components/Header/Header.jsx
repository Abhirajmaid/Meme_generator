import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <img src="./images/troll-face.png" alt="ok" className="header-image" />
      <h2 className="header-title">Meme Generator</h2>
      <h4 className="header-project">React Project</h4>
    </header>
  );
};
