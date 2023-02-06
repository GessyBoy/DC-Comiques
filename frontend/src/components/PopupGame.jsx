import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/PopupGame.module.css";

function PopupGame({ visibility, setVisibility, popUpText }) {
  return (
    <div className={styles["all-popup-container"]}>
      <div className={styles.uncliquable} />
      <div className={styles["popup-container"]}>
        <div>
          <p>{popUpText}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button type="button" onClick={() => setVisibility(!visibility)}>
            <p className={styles.pButton}>Continuer</p>
          </button>
        </div>
      </div>
    </div>
  );
}

PopupGame.propTypes = {
  visibility: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
  popUpText: PropTypes.string.isRequired,
};

export default PopupGame;
