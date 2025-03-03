import React from "react";
import PageSection from "../../components/PageSection/PageSection";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const temperature = () => {
  const [unit, setUnit] = useState("");
  const [unit2, setUnit2] = useState("Fahrenheit (°F)");
  const options = ["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)"];

  useEffect(() => {
      const { unit: unitTeste } = queryString.parse(location.search);
      if (unitTeste) {
        setUnit(unitTeste);
      }
    }, [location.search]);

  return (
    <PageSection
      title={"Temperatura"}
      type={"Temperature"}
      unit={unit}
      setUnit={setUnit}
      unit2={unit2}
      setUnit2={setUnit2}
      options={options}
    />
  );
};

export default temperature;
