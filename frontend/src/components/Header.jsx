import React from "react";
import styles from "../styles/Crash.module.css";
import Logo from "../assets/LogoGitPushForce.png";

function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo gitforce" />
    </header>
  );
}

export default Header;
