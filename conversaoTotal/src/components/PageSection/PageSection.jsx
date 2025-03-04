import React, { useEffect } from "react";
import "./PageSection.css";
import InputDropDown from "../InputDropDown/InputDropDown";
import Header from "../Header/Header"


const PageSection = ({ title, type, unit, setUnit, unit2, setUnit2, options }) => {
  return (
    <div className="divMain">
      <Header />
      <div className="calculationArea">
        <div className="calculator">Conversão de {title}</div>
        <div className="divInput">
          <InputDropDown type ={type} options={options} unit={unit} unit2={unit2} setUnit={setUnit} setUnit2={setUnit2} onChange2={setUnit2} onChange={setUnit} />
        </div>
      </div>
        <div>
    
        </div>
    </div>
  );
};

export default PageSection;
