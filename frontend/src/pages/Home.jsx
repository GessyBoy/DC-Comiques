import React, { useState } from "react";

import HomeButton from "../components/HomeButton";
import Footer from "../components/Footer";
import HomeText from "../components/HomeText";
import Curtain from "../components/Curtain";
import data from "../data/homecredits.json";
import Pseudo from "../components/Pseudo";
import styles from "../styles/Home.module.css";
import LogoGitPushForce from "../assets/LogoGitPushForce.png";

function Home() {
  const { credits } = data;
  const { welcomeMessage } = data;

  const localPseudo = localStorage.getItem("pseudo") || "Agent 404";
  const [pseudo, setPseudo] = useState(localPseudo);

  const [active, setActive] = useState(false);

  const handleChange = () => {
    setActive(!active);
  };

  const buttonChoices = {
    first: {
      id: 1,
      text: "Commencer l'aventure",
    },
    second: {
      id: 2,
      text: "Crédits",
    },
  };

  return (
    <div className={styles.home}>
      <Curtain />
      <Pseudo className="pseudo" pseudo={pseudo} setPseudo={setPseudo} />
      <main className={styles.main}>
        <div className={styles["logo-container"]}>
          <img className={styles.logo} src={LogoGitPushForce} alt="Logo" />
        </div>
        <div className={styles["title-container"]}>
          <h1 className={styles.title}>Bienvenue dans la Git Push Force !</h1>
        </div>
        <HomeText
          active={active}
          credits={credits}
          welcomeMessage={welcomeMessage}
          pseudo={pseudo}
        />
        <div className={styles.buttonsContainer}>
          <HomeButton
            buttonChoices={buttonChoices.first}
            handleChange={handleChange}
          />
          <HomeButton
            buttonChoices={buttonChoices.second}
            handleChange={handleChange}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
