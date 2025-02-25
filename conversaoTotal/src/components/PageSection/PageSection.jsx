import React, { useEffect } from "react";
import HomePage from "../HomePage/HomePage";
import "./PageSection.css";
import InputDropDown from "../InputDropDown/InputDropDown";
import { useState } from "react";
import ConversionSection from "../ConversionSection/ConversionSection";

const PageSection = ({ title, type, unit, setUnit, unit2, setUnit2, options }) => {
  return (
    <div className="divMain">
      <HomePage />
      <div className="calculationArea">
        <div className="calculator">Conversão de {title}</div>
        <div className="divInput">
          <InputDropDown type ={type} options={options} unit={unit} unit2={unit2} setUnit={setUnit} setUnit2={setUnit2} onChange2={setUnit2} onChange={setUnit} />
        </div>
      </div>
        <div>
          {/* <ConversionSection /> */}
        </div>
    </div>
  );
};

export default PageSection;
