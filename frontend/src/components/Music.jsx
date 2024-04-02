import React, { useState, useEffect } from "react";
import MeydnSynthwaveVibe from "../assets/MeydnSynthwaveVibe.mp3";

function Music() {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(true);
  };

  useEffect(() => {
    if (play) {
      const audioVol = document.getElementById("music");
      const volumeDown = () => {
        audioVol.volume = 0.07;
      };
      volumeDown();
    }
  }, [play]);

  return (
    <div>
      <button type="button" onClick={handlePlay}>
        Play Music
      </button>
      {play && (
        <audio src={MeydnSynthwaveVibe} id="music" autoPlay loop hidden>
          <track kind="captions" />
        </audio>
      )}
    </div>
  );
}

export default Music;
