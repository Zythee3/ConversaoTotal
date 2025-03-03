import React from "react";
import PageSection from "../../components/PageSection/PageSection";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Volume = () => {
  const [unit, setUnit] = useState("");
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

  useEffect(() => {
      const { unit: unitTeste } = queryString.parse(location.search);
      if (unitTeste) {
        setUnit(unitTeste);
      }
    }, [location.search]);

  return (
    <PageSection
      title={"Volume"}
      type={"Volume"}
      unit={unit}
      setUnit={setUnit}
      unit2={unit2}
      setUnit2={setUnit2}
      options={options}
    />
  );
};

export default Volume;
