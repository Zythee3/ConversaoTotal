import React from "react";
import PageSection from "../../components/PageSection/PageSection";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Speed = () => {
  const [unit, setUnit] = useState("");
  const [unit2, setUnit2] = useState("Quilômetros por hora (km/h)");
  const options = ["Metros por segundos (m/s)", "Quilômetros por hora (km/h)"];

  const location = useLocation();

  useEffect(() => {
    const { unit: unitTeste } = queryString.parse(location.search);
    if (unitTeste) {
      setUnit(unitTeste);
    }
  }, [location.search]);

  return (
    <PageSection
      title={"Velocidade"}
      type={"Speed"}
      unit={unit}
      setUnit={setUnit}
      unit2={unit2}
      setUnit2={setUnit2}
      options={options}
    />
  );
};

export default Speed;
