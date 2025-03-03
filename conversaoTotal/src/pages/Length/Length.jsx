import React from "react";
import PageSection from "../../components/PageSection/PageSection";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";


const Length = ({}) => {
  const [unit, setUnit] = useState("");
  const [unit2, setUnit2] = useState("Metro (m)");

  const location = useLocation();
  
  useEffect(() => {
    const { unit: unitTeste } = queryString.parse(location.search);
    if (unitTeste) {
      setUnit(unitTeste);
    }
  }, [location.search]);

  
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
