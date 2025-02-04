import React, { useEffect } from 'react'
import UnitDropdown from '../UnitDropDown/UnitDropDown'
import './InputDropDown.css'
import { useState } from "react";


const InputDropDown = ({options, unit, onChange}) => {
  const [valueInput, setInputValue] = useState(""); // Estado para armazenar o valor do input
  const [valueInput2, setInputValue2] = useState(""); // Estado para armazenar o valor do input
  
  const handleChange = (e) => {
    console.log("Valor atual:", e.target.value); // Mostra o valor corretamente
    setInputValue(e.target.value);

  }
  const handleChange2 = (e) => {
    console.log("Valor atual:", e.target.value); // Mostra o valor corretamente
    setInputValue2(e.target.value);

  }
  
  return (
    <div className="input-dropdown-container">
      <input
        type="text"
        value={valueInput}
        onChange={handleChange}
        placeholder={"Digite o valor"}
        
      />

      


      <UnitDropdown options={options} unit={unit} onChange={onChange} />
      <input
        type="text"
        value={valueInput2}
        onChange={handleChange2}
        placeholder={"Digite o valor"}
        
      />

      <UnitDropdown options={options} unit={unit} onChange={onChange} />
    </div>
  )
}

export default InputDropDown