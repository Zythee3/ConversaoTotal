import React from "react";
import "./UnitDropDown.css";

const UnitDropdown = ({ options, unit, onChange }) => {
  return (
    <div className="dropDown">

      <select value={unit} onChange={(e) => onChange(e.target.value)}>
        {Array.isArray(options) &&
          options.map((option, index) => (
            <option key={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default UnitDropdown;
