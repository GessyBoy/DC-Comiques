import React from "react";
import CrashHero from "../components/CrashHero";
import Logo from "../components/Logo";
import styles from "../styles/Crash.module.css";

function Crash() {
  return (
    <div className={styles.body}>
      <Logo />
      <CrashHero />
    </div>
  );
}

export default Crash;
