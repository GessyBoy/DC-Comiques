import React, { useState, useEffect } from "react";
import MeydnSynthwaveVibe from "../assets/MeydnSynthwaveVibe.mp3";

function Music() {
  const [setPlay] = useState(true);

  const Play = () => {
    setPlay(false);
  };

  useEffect(() => {
    const audioVol = document.getElementById("music");
    const volumeDown = () => {
      audioVol.volume = 0.07;
    };
    return volumeDown();
  }, []);

  return (
    <div>
      <audio
        src={MeydnSynthwaveVibe}
        id="music"
        autoPlay
        loop
        onPlay={Play}
        hidden
      >
        <track kind="captions" />{" "}
      </audio>
    </div>
  );
}

export default Music;
