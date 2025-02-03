import React from 'react'
import UnitDropdown from '../UnitDropDown/UnitDropDown'
import './InputDropDown.css'

const InputDropDown = ({options, value, onChange}) => {
  return (
    <div className="input-dropdown-container">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite um valor"
      />

      <UnitDropdown options={options} value={value} onChange={onChange} />
      
    </div>
  )
}

export default InputDropDown