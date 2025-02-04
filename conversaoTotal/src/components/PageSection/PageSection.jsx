import React, { useEffect } from "react";
import HomePage from "../HomePage/HomePage";
import "./PageSection.css";
import InputDropDown from "../InputDropDown/InputDropDown";
import { useState } from "react";

const PageSection = ({ title, unit, setUnit, unit2, setUnit2, options }) => {
  const changeValueUnit = () => {
    setUnit(unit2);
    setUnit2(unit);
  };
  
  // useEffect(() =>{
  //   console.log(valueInput);
  // }, [valueInput])

  return (
    <div className="divMain">
      <HomePage />
      <div className="calculationArea">
        <div className="calculator">Conversão de {title}</div>
        <div className="divInput">
          <InputDropDown options={options} unit={unit} onChange={setUnit} />

          <button onClick={changeValueUnit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 20 20"
            >
              <path
                fill="black"
                d="M12.78 3.22a.75.75 0 1 0-1.06 1.06L13.44 6H4.75a.75.75 0 0 0 0 1.5h8.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06zm-4.5 7.56a.75.75 0 1 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06L6.56 14h8.69a.75.75 0 0 0 0-1.5H6.56z"
              />
            </svg>
          </button>

          <InputDropDown options={options} unit={unit2} onChange={setUnit2} />
        </div>
      </div>
    </div>
  );
};

export default PageSection;
