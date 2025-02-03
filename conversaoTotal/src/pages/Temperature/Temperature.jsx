import React from "react";
import HomePage from "../../components/HomePage/HomePage";
import "./temperature.css";
import InputDropDown from "../../components/InputDropDown/InputDropDown";
import { useState } from "react";

const Temperature = ({title}) => {
  const [unit, setUnit] = useState("Metros (m)");
  const [unit2, setUnit2] = useState("Metros (m)");
  const options = ["Quilômetro (km)","Hectômetro (hm)","Decâmetro (dam)" ,"Metros (m)","Decímetro (dm)", "Centímetros (cm)", "Milímetros (mm)", ];
  
  const changeValueUnit = () =>{
    setUnit(unit2);
    setUnit2(unit);
  } 
  
  return (
    <div className="divMain">
      <HomePage />
      <div className="calculationArea">
        <div className="calculator">Conversão de {title}</div>
        <div className="divInput">
    
          <InputDropDown options={options} value={unit} onChange={setUnit} />

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

          <InputDropDown options={options} value={unit2} onChange={setUnit2} />
        </div>
      </div>
    </div>
  );
}

export default Temperature;
