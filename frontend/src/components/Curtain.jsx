import React, { useState } from "react";
import bruitPorte from "../assets/BruitPorte.mp3";
import clacPorte from "../assets/DOORWood_Porte qui claque 4 (ID 1501)_LS.mp3";
import styles from "../styles/Curtain.module.css";

function Curtain() {
  const [closed, setClosed] = useState(styles.buttonClosed);

  const handleChange = () => {
    setClosed(styles.buttonOpened);
    new Audio(bruitPorte).play();
    setTimeout(() => {
      new Audio(clacPorte).play();
    }, 2800);
  };

  return (
    <button type="button" className={closed} onClick={handleChange}>
      {" "}
    </button>
  );
}

export default Curtain;
