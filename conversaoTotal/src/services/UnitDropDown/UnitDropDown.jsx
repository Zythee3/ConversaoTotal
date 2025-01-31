import React from "react";
import "./UnitDropDown.css";

const UnitDropdown = ({ options, value, onChange }) => {
  return (
    <div className="divTest">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UnitDropdown;
