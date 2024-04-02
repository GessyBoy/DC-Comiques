import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Game.module.css";

const backEndURL = import.meta.env.VITE_BACKEND_URL;

function ClassicCard({
  setEvent,
  setScenario,
  setType,
  imageSource,
  title,
  text,
  choices,
  visibility,
  setVisibility,
  setPopUpText,
  dataScenarios,
  dataEvents,
  pathApp,
  pathCSS,
  pathExpress,
  setPathExpress,
}) {
  const [buttonClicked, setbuttonClicked] = useState([]);
  const [fetch, setfetch] = useState(false);
  const [merge, setmerge] = useState(false);
  const [pull, setpull] = useState(false);

  const direction = (goTo, type, id) => {
    if (type === "scenarioCard") {
      const newScenario = dataScenarios.find((obj) => obj.id === goTo);
      setScenario(newScenario);
    }
    if (type === "eventCard") {
      if (id === "ch015") {
        if (pathApp && pathCSS) {
          setEvent(dataEvents.find((obj) => obj.id === "ec013"));
          setType("eventCard");
        }
        if (!pathApp || !pathCSS) {
          setEvent(dataEvents.find((obj) => obj.id === "ec014"));
          setType("eventCard");
          setPathExpress(true);
        }
      } else {
        const newEvent = dataEvents.find((obj) => obj.id === goTo);
        setEvent(newEvent);
      }
    }
    setType(type);
  };

  const triggerPopup = (popUpText) => {
    setVisibility(!visibility);
    setPopUpText(popUpText);
  };

  const navigate = useNavigate();

  const popUpDirection = (id, popUpText) => {
    if (id === "ch007") {
      // Carte 3
      triggerPopup(popUpText);
      setbuttonClicked((prev) => [...prev, id]);
    }
    if (id === "ch019") {
      // Carte 11 Choix Push
      if (!pull && !merge && !fetch) {
        setEvent(dataEvents.find((obj) => obj.id === "ec015"));
        setType("eventCard");
      }
      if (pull || merge) {
        navigate("/win");
      }
      if (fetch && !pull && !merge) {
        triggerPopup("Vous ne respectez pas le workflow de la Git Push Force");
      }
    }
    if (id === "ch020") {
      // Carte 11 Choix Pull
      if (!merge && !fetch) {
        setpull(true);
        triggerPopup(popUpText);
        setbuttonClicked((prev) => [...prev, id]);
      }
      if (merge || fetch || pull) {
        triggerPopup("Vous ne respectez pas le workflow de la Git Push Force");
      }
    }
    if (id === "ch021") {
      // Carte 11 Choix Fetch
      if (!pull && !fetch && !merge) {
        setfetch(true);
        triggerPopup(popUpText);
        setbuttonClicked((prev) => [...prev, id]);
      } else {
        triggerPopup("Vous ne respectez pas le workflow de la Git Push Force");
      }
    }
    if (id === "ch022") {
      // Carte 11 Choix Merge
      if (fetch && !pull && !merge) {
        setmerge(true);
        triggerPopup(popUpText);
        setbuttonClicked((prev) => [...prev, id]);
      }
      if (!fetch || pull || merge) {
        triggerPopup("Vous ne respectez pas le workflow de la Git Push Force");
      }
    }
  };

  const buttonStyle = (id, type) => {
    if (buttonClicked.includes(id) && type === "popUp") {
      return styles["clicked-button"];
    }
    if (id === "ch005" && pathExpress === true) {
      return styles["clicked-button"];
    }
    if (id === "ch004" && pathCSS === true) {
      return styles["clicked-button"];
    }
    if (id === "ch003" && pathApp === true) {
      return styles["clicked-button"];
    }
    return styles.button;
  };

  return (
    <div className={styles["full-content"]}>
      <div className={styles.containerImg}>
        <img
          src={`${backEndURL}/assets/images/${imageSource}`}
          className={styles.img}
          alt="Labo"
        />
      </div>
      <div className={styles.main}>
        <h1 className={styles["card-title"]}>{title}</h1>
        <p className={styles.text}>{text}</p>
        <div className={styles.choice}>
          {choices.map((choice) => (
            <button
              className={buttonStyle(choice.id, choice.type)}
              type="button"
              key={choice.id}
              onClick={() => {
                if (choice.type === "popUp") {
                  popUpDirection(choice.id, choice.popUpText);
                }
                if (
                  choice.type === "eventCard" ||
                  choice.type === "scenarioCard"
                ) {
                  direction(choice.goTo, choice.type, choice.id);
                }
              }}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

ClassicCard.propTypes = {
  setScenario: PropTypes.func.isRequired,
  setEvent: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  visibility: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
  setPopUpText: PropTypes.func.isRequired,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      goTo: PropTypes.string.isRequired,
    })
  ).isRequired,
  dataScenarios: PropTypes.arrayOf(
    PropTypes.shape({
      // Définissez la structure des objets dans le tableau dataScenarios
      // Par exemple :
      id: PropTypes.string.isRequired,
      // Autres propriétés...
    })
  ).isRequired,

  dataEvents: PropTypes.arrayOf(
    PropTypes.shape({
      // Définissez la structure des objets dans le tableau dataEvents
      // Par exemple :
      id: PropTypes.string.isRequired,
      // Autres propriétés...
    })
  ).isRequired,
  pathApp: PropTypes.bool.isRequired,
  pathCSS: PropTypes.bool.isRequired,
  pathExpress: PropTypes.bool.isRequired,
  setPathExpress: PropTypes.func.isRequired,
};

export default ClassicCard;
