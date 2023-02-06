import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/Home.module.css";

function HomeText({ active, credits, welcomeMessage, pseudo }) {
  return (
    <div className={styles["home-text"]}>
      {active ? credits : welcomeMessage.replace("Agent 404", pseudo)}
    </div>
  );
}

HomeText.propTypes = {
  active: PropTypes.bool.isRequired,
  credits: PropTypes.string.isRequired,
  welcomeMessage: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
};

export default HomeText;
