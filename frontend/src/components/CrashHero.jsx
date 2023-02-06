import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../styles/Crash.module.css";

const backEndURL = import.meta.env.VITE_BACKEND_URL;

function CrashHero({
  setScenario,
  setEvent,
  setType,
  id,
  imageSource,
  text,
  buttonText,
  goTo,
  type,
  dataScenarios,
  dataEvents,
  pathApp,
  setPathApp,
  pathCSS,
  setPathCSS,
  pathExpress,
}) {
  const navigate = useNavigate();

  const direction = (pathTo, eventType, eventId) => {
    if (eventType === "game over") {
      navigate(`/`);
    }
    if (eventType === "turn back") {
      const newScenario = dataScenarios.find((obj) => obj.id === "sc002");
      setScenario(newScenario);
      setType("scenarioCard");
    }
    if (eventType === "transition") {
      if (pathTo.charAt(0) === "e") {
        if (eventId === "ec009") {
          if (!pathApp || !pathExpress) {
            setEvent(dataEvents.find((obj) => obj.id === "ec014"));
            setType("eventCard");
            setPathCSS(true);
          }
          if (pathApp && pathExpress) {
            setEvent(dataEvents.find((obj) => obj.id === "ec013"));
            setType("eventCard");
          }
        }
        if (eventId === "ec012") {
          if (pathCSS && pathExpress) {
            setEvent(dataEvents.find((obj) => obj.id === "ec013"));
            setType("eventCard");
          }
          if (!pathCSS || !pathExpress) {
            setEvent(dataEvents.find((obj) => obj.id === "ec014"));
            setType("eventCard");
            setPathApp(true);
          }
        }
        if (eventId !== "ec009" && eventId !== "ec012") {
          const newEventCard = dataEvents.find((obj) => obj.id === pathTo);
          setEvent(newEventCard);
          setType("eventCard");
        }
      }
      if (pathTo.charAt(0) === "s") {
        const newScenario = dataScenarios.find((obj) => obj.id === pathTo);
        setScenario(newScenario);
        setType("scenarioCard");
      }
      if (pathTo.charAt(0) === "H") {
        navigate(`/`);
      }
    }
  };

  return (
    <div className={styles.background}>
      <div>
        <img
          src={`${backEndURL}/assets/images/${imageSource}`}
          className={styles.img}
          alt={imageSource}
        />
      </div>
      <div className={styles.greyBox}>
        <h2>{text}</h2>
      </div>
      <div className={styles.divButton}>
        <button
          className={styles.button}
          type="button"
          key={id}
          onClick={() => direction(goTo, type, id)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

CrashHero.propTypes = {
  setScenario: PropTypes.func.isRequired,
  setEvent: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  goTo: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataScenarios: PropTypes.shape().isRequired,
  dataEvents: PropTypes.shape().isRequired,
  pathApp: PropTypes.bool.isRequired,
  setPathApp: PropTypes.func.isRequired,
  pathCSS: PropTypes.bool.isRequired,
  setPathCSS: PropTypes.func.isRequired,
  pathExpress: PropTypes.func.isRequired,
};

export default CrashHero;
