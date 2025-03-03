import React from "react";
import PageSection from "../../components/PageSection/PageSection";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";


const Time = () => {
  const [unit, setUnit] = useState("");
  const [unit2, setUnit2] = useState("Horas");
  const options = ["Ano", "Mês", "Semanas", "Dias", "Horas", "Minutos", "Segundos"];
  
  useEffect(() => {
      const { unit: unitTeste } = queryString.parse(location.search);
      if (unitTeste) {
        setUnit(unitTeste);
      }
    }, [location.search]);

  return (
    <PageSection
      title={"Tempo"}
      type={"Time"}
      unit={unit}
      setUnit={setUnit}
      unit2={unit2}
      setUnit2={setUnit2}
      options={options}
    />
  );
};

export default Time;
