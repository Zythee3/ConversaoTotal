import React from "react";
import { useState } from "react";
import PageSection from "../../components/PageSection/PageSection";

const Time = () => {
  const [unit, setUnit] = useState("Minutos");
  const [unit2, setUnit2] = useState("Horas");
  const options = ["Ano", "Mês", "Semanas", "Horas", "Minutos", "Segundos"];

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
