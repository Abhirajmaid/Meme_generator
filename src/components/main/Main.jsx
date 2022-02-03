import React from "react";
import "./Main.css";
import memesData from "../../memesData";

export const Main = () => {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <div className="main">
      <div action="" className="form">
        <input type="text" placeholder="Top-Text" />
        <input type="text" placeholder="Bottom-Text" />
        <button onClick={getMemeImage} className="form-btn">
          GET NEW MEME
        </button>
        <img src={memeImage} alt="" className="meme-image" />
      </div>
    </div>
  );
};
