import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../styles/Home.module.css";

function HomeButton({ buttonChoices, handleChange }) {
  const navigate = useNavigate();

  function buttonChange() {
    console.error(buttonChoices.id);
    if (buttonChoices.id === 2) {
      handleChange();
    }
    if (buttonChoices.id === 1) {
      navigate(`/game?idText=${buttonChoices.id}`);
    }
  }

  return (
    <div className={styles["button-wrap"]}>
      <button
        type="button"
        onClick={buttonChange}
        id={buttonChoices.id}
        className={styles.button}
      >
        {buttonChoices.text}
      </button>
    </div>
  );
}

HomeButton.propTypes = {
  buttonChoices: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default HomeButton;
