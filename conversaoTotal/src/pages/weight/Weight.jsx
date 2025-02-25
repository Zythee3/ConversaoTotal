import React from "react";
import PageSection from "../../components/PageSection/PageSection";
import { useState } from "react";

const Weight = () => {
  const [unit, setUnit] = useState("Grama (g)");
  const [unit2, setUnit2] = useState("Grama (g)");
  const options = [
    "Quilograma (kg)",
    "Hectograma (hg)",
    "Decagrama (dag)",
    "Grama (g)",
    "Decigrama (dg)",
    "Centigrama (cg)",
    "Miligrama (mg)",
  ];
  return (
    <PageSection
      title={"Peso"}
      type={"Weight"}
      unit={unit}
      setUnit={setUnit}
      unit2={unit2}
      setUnit2={setUnit2}
      options={options}
    />
  );
};

export default Weight;
