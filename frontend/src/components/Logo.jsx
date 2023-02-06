import React, { useState } from "react";
import ImgLogo from "../assets/LogoGitPushForce.png";
import styles from "../styles/Logo.module.css";

import Popup from "./Popup";

function Logo() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <button
        className={styles.popupBtn}
        type="button"
        onClick={() => setOpenPopup(true)}
      >
        <img className={styles.ImgLogo} src={ImgLogo} alt="logo" />
      </button>
      <Popup open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}

export default Logo;
