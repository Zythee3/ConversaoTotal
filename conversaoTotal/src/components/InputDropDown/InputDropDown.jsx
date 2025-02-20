import React, { useEffect } from "react";
import UnitDropdown from "../UnitDropDown/UnitDropDown";
import "./InputDropDown.css";
import { useState } from "react";
import ProcessRequest from "../../services/calculations/handle"
import ChangeButton from "../../assets/icons/ChangeButton.svg"

const InputDropDown = ({ type, options, unit, unit2, setUnit, setUnit2, onChange, onChange2 }) => {
  const [valueInput, setInputValue] = useState("");
  const [valueInput2, setInputValue2] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (valueInput) {
      setInputValue2(ProcessRequest(type, valueInput, unit, unit2));
    }
  }, [unit]);

  useEffect(() => {
    if (valueInput2) {
      setInputValue2(ProcessRequest(type, valueInput, unit, unit2));
    }
  }, [unit2]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setInputValue2(ProcessRequest(type, e.target.value, unit, unit2));
  };
  const handleChange2 = (e) => {
    setInputValue2(e.target.value);
    setInputValue(ProcessRequest(type, e.target.value, unit2, unit));
  };

  const changeUnit = () => {
    setUnit(unit2);
    setUnit2(unit);
    ProcessRequest(type, e.target.value, unit2, unit);
  };

  return (
    <div className="divInputDropDown">
      <div className="input-dropdown-container">
        <input
          type="text"
          value={valueInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          
          onChange={handleChange}
          placeholder={"Digite o valor"}
        />

        <UnitDropdown options={options} unit={unit} onChange={onChange} />
      </div>

      <button onClick={changeUnit}>
        <img src={ChangeButton} alt="" />
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
