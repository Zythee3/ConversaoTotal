import React from "react";
import PageSection from "../../components/PageSection/PageSection";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Mass = () => {
  const [unit, setUnit] = useState("");
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

  useEffect(() => {
    const { unit: unitTeste } = queryString.parse(location.search);
    if (unitTeste) {
      setUnit(unitTeste);
    }
  }, [location.search]);
  return (
    <PageSection
      title={"Massa"}
      type={"Mass"}
      unit={unit}
      setUnit={setUnit}
      unit2={unit2}
      setUnit2={setUnit2}
      options={options}
    />
  );
};

export default Mass;
