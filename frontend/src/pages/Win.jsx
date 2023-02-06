import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Win.module.css";
import logo from "../assets/LogoGitPushForce.png";

function Win() {
  const pseudo = localStorage.getItem("pseudo");

  return (
    <div className={styles.fond}>
      <img src={logo} alt="Logo de l'application" className={styles.logo} />
      <div className={styles.block}>
        <div className={styles.text_container}>
          <h1 className={styles.text}>API END</h1>
          <p className={styles.textContent}>
            Splendide {pseudo} ! L’ignominieuse code-erreur détale en voyant la
            propreté et la clareté de vos modifications du code-source.
            L’application est sauvée ! Encore une tâche accomplie avec bravoure
            par la git push force !
          </p>
        </div>
        <div>
          <Link to="/">
            <button type="button" className={styles.btnExit}>
              retour à l'accueil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Win;
