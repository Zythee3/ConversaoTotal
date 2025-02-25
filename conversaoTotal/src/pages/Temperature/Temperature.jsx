import React from "react";
import PageSection from "../../components/PageSection/PageSection";
import { useState } from "react";

const temperature = () => {
  const [unit, setUnit] = useState("Celsius (°c)");
  const [unit2, setUnit2] = useState("Fahrenheit (°f)");
  const options = ["Celsius (°c)", "Fahrenheit (°f)", "Kelvin (k)"];

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
