import React from 'react'
import PageSection from '../../components/PageSection/PageSection'
import { useState } from "react";

const Length = () => {

  const [unit, setUnit] = useState("Metros");
  const [unit2, setUnit2] = useState("Metros");
  const options = ["Quilômetro","Hectômetro","Decâmetro" ,"Metros","Decímetro", "Centímetros", "Milímetros", ];

  return (
    <div>
        <PageSection title={"Comprimento"} unit={unit} setUnit={setUnit} unit2={unit2} setUnit2={setUnit2} options={options}/>
    </div>
  )
}

export default Length