import React from "react";
import "./DropDownHeader.css";
import { Link } from "react-router-dom";

const DropDownHeader = ({ type }) => {
  const unitsLength = [
    { name: "Quilômetro", unit: "km" },
    { name: "Hectômetro", unit: "hm" },
    { name: "Decâmetro", unit: "dam" },
    { name: "Metro", unit: "m" },
    { name: "Decímetro", unit: "dm" },
    { name: "Centímetro", unit: "cm" },
    { name: "Milímetro", unit: "mm" },
  ];

  const unitsTemperature = [
    { name: "Celsius", unit: "°C" },
    { name: "Fahrenheit", unit: "°F" },
    { name: "Kelvin", unit: "K" },
  ];
  const unitsTime = [
    { name: "Ano", unit: "yr" },
    { name: "Mês", unit: "mo" },
    { name: "Semana", unit: "wk" },
    { name: "Dia", unit: "d" },
    { name: "Horas", unit: "h" },
    { name: "Minuto", unit: "min" },
    { name: "Segundo", unit: "s" },
  ];

  const unitsSpeed = [
    { name: "Metros por segundos", unit: "m/s" },
    { name: "Quilômetros por hora", unit: "km/h" },
  ];

  const unitsVolume = [
    { name: "Quilolitro", unit: "kl" },
    { name: "Hectolitro", unit: "hl" },
    { name: "Decalitro", unit: "dal" },
    { name: "Litro", unit: "l" },
    { name: "Decilitro", unit: "dl" },
    { name: "Centilitro", unit: "cl" },
    { name: "Mililitro", unit: "ml" },
  ];

  const unitsWeight = [
    { name: "Quilograma", unit: "kg" },
    { name: "Hectograma", unit: "hg" },
    { name: "Decagrama", unit: "dag" },
    { name: "Grama", unit: "g" },
    { name: "Decigrama", unit: "dg" },
    { name: "Centigrama", unit: "cg" },
    { name: "Miligrama", unit: "mg" },
  ];

  let units;
  let nameLink;
  switch (type) {
    case "length":
      units = unitsLength;
      nameLink = "/Length";
      break;
    case "temperature":
      units = unitsTemperature;
      nameLink = "/temperature";
      break;
    case "speed":
      units = unitsSpeed;
      nameLink = "/speed";
      break;
    case "time":
      units = unitsTime;
      nameLink = "/time";
      break;
    case "volume":
      units = unitsVolume;
      nameLink = "/volume";
      break;
    case "weight":
      units = unitsWeight;
      nameLink = "/weight";
      break;
    default:
      units = [];
  }

  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="DropDownHeader">
      {units.map((units, index) => (
        <Link to={`${nameLink}?unit=${units.name} (${units.unit}) `} className="link">
          <button
            key={index}
            className="OptionsDropDown"
            onClick={handleButtonClick}
          >
            <span>{units.name}</span>
            <span className="spanUnit">({units.unit})</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default DropDownHeader;
