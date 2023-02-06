import PropTypes from "prop-types";
import styles from "../styles/Button.module.css";

function Button({ choice }) {
  return (
    <button type="button" className={styles.button}>
      {choice.text}
    </button>
  );
}

Button.propTypes = {
  choice: PropTypes.string.isRequired,
};

export default Button;
