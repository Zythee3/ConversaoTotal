import React, { useState, useEffect } from "react";
import "./OptionsHeader.css";
import { useLocation } from "react-router-dom";

const OptionsHeader = () => {
  const [buttonActive, setButtonActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("length")) {
      setButtonActive("length");
    } else if (path.includes("weight")) {
      setButtonActive("weight");
    } else if (path.includes("volume")) {
      setButtonActive("volume");
    } else if (path.includes("temperature")) {
      setButtonActive("temperature");
    } else if (path.includes("time")) {
      setButtonActive("time");
    } else if (path.includes("speed")) {
      setButtonActive("speed");
    }
  }, [location.pathname]);

  return (
    <div className="OptionsHeaderButtons">
      <button className={buttonActive === "length" ? "ButtonActive" : "button"}
      onClick={() => setButtonActive("length")}>Comprimento</button>

      <button className={buttonActive === "temperature" ? "ButtonActive" : "button"}
      onClick={() => setButtonActive("temperature")}>Temperatura</button>

      <button className={buttonActive === "speed" ? "ButtonActive" : "button"}
      onClick={() => setButtonActive("speed")}>Velocidade</button>

      <button className={buttonActive === "time" ? "ButtonActive" : "button"}
      onClick={() => setButtonActive("time")}>Tempo</button>

      <button className={buttonActive === "volume" ? "ButtonActive" : "button"}
      onClick={() => setButtonActive("volume")}>Volume</button>

      <button className={buttonActive === "weight" ? "ButtonActive" : "button"}
      onClick={() => setButtonActive("weight")}>Massa</button>
    </div>
  );
};

export default OptionsHeader;
