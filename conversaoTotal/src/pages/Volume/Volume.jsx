import React from "react";
import { useState } from "react";
import PageSection from "../../components/PageSection/PageSection";

const Volume = () => {
  const [unit, setUnit] = useState("Litro (l)");
  const [unit2, setUnit2] = useState("Litro (l)");
  const options = [
    "Quilolitro (kl)",
    "Hectolitro (hl)",
    "Decalitro (dal)",
    "Litro (l)",
    "Decilitro (dl)",
    "Centilitro (cl)",
    "Mililitro (ml)",
  ];

  return (
    <div>
      <PageSection
        title={"Volume"}
        type={"Volume"}
        unit={unit}
        setUnit={setUnit}
        unit2={unit2}
        setUnit2={setUnit2}
        options={options}
      />
    </div>
  );
};

export default Volume;
