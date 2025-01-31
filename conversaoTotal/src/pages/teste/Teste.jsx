import React, { useState } from "react";
import UnitDropdown from "../../services/UnitDropDown/UnitDropDown";
import "./Teste.css";

const Teste = () => {
  const [fromUnit, setFromUnit] = useState("metro");
  const [toUnit, setToUnit] = useState("centimetro");
  const lengthUnits = ["metro", "centimetro", "milimetro", "quilometro"];

  return (
    <div className="divDropDown">
      <input type="text" />
      <UnitDropdown
        options={lengthUnits}
        value={fromUnit}
        onChange={setFromUnit}
      />
    </div>
  );
};

export default Teste;
