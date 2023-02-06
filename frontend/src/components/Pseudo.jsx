import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Pseudo.module.css";

function App({ pseudo, setPseudo }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSaved, setSaved] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPopupOpen(false);
    setSaved(true);
    localStorage.setItem("pseudo", pseudo);
  };

  return (
    <div className={styles.pseudo}>
      {pseudo}
      <button type="button" onClick={() => setPopupOpen(true)}>
        &nbsp; &nbsp; &nbsp;
        {isSaved || pseudo ? "Modifier le pseudo" : "Entrez votre pseudo"}
      </button>
      {isPopupOpen && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Agent 404"
              value={pseudo}
              onChange={(e) => {
                setPseudo(e.target.value);
              }}
            />
            <button type="submit">&nbsp;&nbsp;&nbsp;Save & Close </button>
          </form>
        </div>
      )}
    </div>
  );
}

App.propTypes = {
  pseudo: PropTypes.string.isRequired,
  setPseudo: PropTypes.func.isRequired,
};

export default App;
