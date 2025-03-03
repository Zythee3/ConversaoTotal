import React, { useState, useEffect, useRef } from "react";
import "./OptionsHeader.css";
import { useLocation } from "react-router-dom";
import DropDownHeader from "../DropDownHeader/DropDownHeader";

const OptionsHeader = () => {
  const [buttonActive, setButtonActive] = useState("");
  const location = useLocation();
  const [dropDownHeaderOpen, setDropDownHeaderOpen] = useState(false);
  const ref = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropDownHeaderOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div>
      <div className="OptionsHeaderButtons">
        <button
          className="ButtonClass"
          onClick={() => (
            setButtonActive("length"), setDropDownHeaderOpen(true)
          )}
        >
          <span>Comprimento</span>
          {buttonActive === "length" && dropDownHeaderOpen && (
            <div ref={ref} className="DropDownHeaderButton">
              <DropDownHeader type={buttonActive}/>
            </div>
          )}
        </button>

        <button
          className="ButtonClass"
          onClick={() => (
            setButtonActive("temperature"), setDropDownHeaderOpen(true)
          )}
        >
          Temperatura
          {buttonActive === "temperature" && dropDownHeaderOpen && (
            <div ref={ref} className="DropDownHeaderButton">
              <DropDownHeader type={buttonActive}/>
            </div>
          )}
        </button>

        <button
          className="ButtonClass"
          onClick={() => (
            setButtonActive("speed"), setDropDownHeaderOpen(true)
          )}
        >
          Velocidade
          {buttonActive === "speed" && dropDownHeaderOpen && (
            <div ref={ref} className="DropDownHeaderButton">
              <DropDownHeader type={buttonActive}/>
            </div>
          )}
        </button>

        <button className="ButtonClass" onClick={() => (setButtonActive("time"), setDropDownHeaderOpen(true))}>
          Tempo
          {buttonActive === "time" && dropDownHeaderOpen && (
            <div ref={ref} className="DropDownHeaderButton">
              <DropDownHeader type={buttonActive}/>
            </div>
          )}
        </button>

        <button
          className="ButtonClass"
          onClick={() => (setButtonActive("volume"), setDropDownHeaderOpen(true))}
        >
          Volume
          {buttonActive === "volume" && dropDownHeaderOpen && (
            <div ref={ref} className="DropDownHeaderButton">
              <DropDownHeader type={buttonActive}/>
            </div>
          )}
        </button>

        <button
          className="ButtonClass"
          onClick={() => (setButtonActive("weight"), setDropDownHeaderOpen(true))}
        >
          Massa
          {buttonActive === "weight" && dropDownHeaderOpen && (
            <div ref={ref} className="DropDownHeaderButton">
              <DropDownHeader type={buttonActive}/>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default OptionsHeader;
