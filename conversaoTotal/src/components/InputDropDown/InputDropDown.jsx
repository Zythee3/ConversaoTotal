import React, { useEffect } from "react";
import UnitDropdown from "../UnitDropDown/UnitDropDown";
import "./InputDropDown.css";
import { useState } from "react";
import LenghtCalculationResult from "../../services/calculations/LengthCalculation/LenghtCalculationResult";


const InputDropDown = ({ options, unit, unit2, setUnit, setUnit2, onChange, onChange2 }) => {
  const [valueInput, setInputValue] = useState("");
  const [valueInput2, setInputValue2] = useState("");


  const handleChange = (e) => {
    console.log("Valor atual:", e.target.value);
    setInputValue(e.target.value);
    setInputValue2(LenghtCalculationResult(e.target.value, unit, unit2));
  };
  const handleChange2 = (e) => {
    console.log("Valor atual:", e.target.value);
    setInputValue(e.target.value / 100);
    setInputValue2(e.target.value);
  };

  const changeUnit = () => {
    setUnit(unit2);
    setUnit2(unit);
  };

  return (
    <div className="divInputDropDown">
      <div className="input-dropdown-container">
        <input
          type="text"
          value={valueInput}
          onChange={handleChange}
          placeholder={"Digite o valor"}
        />

        <UnitDropdown options={options} unit={unit} onChange={onChange} />
      </div>

      <button onClick={changeUnit}>
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

      <div className="input-dropdown-container">
        <input
          type="text"
          value={valueInput2}
          onChange={handleChange2}
          placeholder={"Digite o valor"}
        />

        <UnitDropdown options={options} unit={unit2} onChange={onChange2} />
      </div>
    </div>
  );
};

export default InputDropDown;
