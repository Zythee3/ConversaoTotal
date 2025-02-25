import React from "react";
import PageSection from "../../components/PageSection/PageSection";
import { useState } from "react";

const Length = () => {
  const [unit, setUnit] = useState("Metro (m)");
  const [unit2, setUnit2] = useState("Metro (m)");
  const options = [
    "Quilômetro (km)",
    "Hectômetro (hm)",
    "Decâmetro (dam)",
    "Metro (m)",
    "Decímetro (dm)",
    "Centímetro (cm)",
    "Milímetro (mm)",
  ];

  return (
    <PageSection
      title={"Comprimento"}
      type={"Length"}
      unit={unit}
      setUnit={setUnit}
      unit2={unit2}
      setUnit2={setUnit2}
      options={options}
    />
  );
};

export default Length;
