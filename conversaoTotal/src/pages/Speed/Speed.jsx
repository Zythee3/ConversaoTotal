import React from "react";
import PageSection from "../../components/PageSection/PageSection";
import { useState } from "react";

const Speed = () => {
  const [unit, setUnit] = useState("Metros por segundos (m/s)");
  const [unit2, setUnit2] = useState("Quilômetros por hora (km/h)");
  const options = ["Metros por segundos (m/s)", "Quilômetros por hora (km/h)"];

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
