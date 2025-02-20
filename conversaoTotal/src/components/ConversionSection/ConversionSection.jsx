import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ConversionSection.css";
import IconWeight from "../../assets/icons/IconWeight.svg";
import IconVolume from "../../assets/icons/IconVolume.svg";
import IconTemperature from "../../assets/icons/IconTemperature.svg";
import IconTime from "../../assets/icons/IconTime.svg";
import IconSpeed from "../../assets/icons/IconSpeed.svg";
import IconLength from "../../assets/icons/IconLength.svg";

const ConversionSection = () => {
  const location = useLocation();
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("length")) {
      setCurrentTheme("length");
    } else if (path.includes("weight")) {
      setCurrentTheme("weight");
    } else if (path.includes("volume")) {
      setCurrentTheme("volume");
    } else if (path.includes("temperature")) {
      setCurrentTheme("temperature");
    } else if (path.includes("time")) {
      setCurrentTheme("time");
    } else if (path.includes("speed")) {
      setCurrentTheme("speed");
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="selecaoConversao">
        <span>Seleção de conversão</span>
        <div className="buttonsSelecao">
          <Link className="link" to="/weight">
            <button
              className={currentTheme === "weight" ? "buttonActive" : "button"}
              onClick={() => setCurrentTheme("weight")}
            >
              <img src={IconWeight} alt="IconWeight" />
              Peso
            </button>
          </Link>
          <Link className="link" to="/volume">
            <button
              className={currentTheme === "volume" ? "buttonActive" : "button"}
              onClick={() => setCurrentTheme("volume")}
            >
              <img src={IconVolume} alt="volume" />
              Volume
            </button>
          </Link>
          <Link className="link" to="/temperature">
            <button
              className={
                currentTheme === "temperature" ? "buttonActive" : "button"
              }
              onClick={() => setCurrentTheme("temperature")}
            >
              <img src={IconTemperature} alt="" />
              Temperatura
            </button>
          </Link>
          <Link className="link" to="/time">
            <button
              className={currentTheme === "time" ? "buttonActive" : "button"}
              onClick={() => setCurrentTheme("time")}
            >
              <img src={IconTime} alt="" />
              Tempo
            </button>
          </Link>
          <Link className="link" to="/speed">
            <button
              className={currentTheme === "speed" ? "buttonActive" : "button"}
              onClick={() => setCurrentTheme("speed")}
            >
              <img src={IconSpeed} alt="" />
              Velocidade
            </button>
          </Link>
          <Link className="link" to="/length">
            <button
              className={currentTheme === "length" ? "buttonActive" : "button"}
              onClick={() => setCurrentTheme("length")}
            >
              <img src={IconLength} alt="" />
              Comprimento
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConversionSection;
