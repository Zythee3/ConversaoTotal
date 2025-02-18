import React from 'react'
import PageSection from '../../components/PageSection/PageSection'
import { useState } from "react";

const Length = () => {

  const [unit, setUnit] = useState("Metros (m)");
  const [unit2, setUnit2] = useState("Metros (m)");
  const options = ["Quilômetro (km)","Hectômetro (hm)","Decâmetro (dam)", "Metros (m)","Decímetro (dm)", "Centímetro (cm)", "Milímetro (mm)", ];

  return (
    <div>
        <PageSection title={"Comprimento"} type={"Length"} unit={unit} setUnit={setUnit} unit2={unit2} setUnit2={setUnit2} options={options}/>
    </div>
  )
}

export default Length