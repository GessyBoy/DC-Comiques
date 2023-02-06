import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "../styles/Popup.module.css";

function Popup({ open, onClose }) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.PopupContainer}>
        <div className={styles.popupRight}>
          <button type="button" className={styles.closeBtn} onClick={onClose}>
            <p className={styles.croix}>X</p>
          </button>
          <div className={styles.content}>
            <h1>Attention</h1>
            <p className={styles.boldX}>
              voulez vous vraiment quitter la partie ?
            </p>
          </div>
          <div className={styles.btnContainer}>
            <button type="button" className={styles.btnExit} onClick={onClose}>
              <p>revenir au jeu</p>
            </button>
            <Link to="/">
              <button type="button" className={styles.btnExit}>
                <p>Quitter la partie</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Popup.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
