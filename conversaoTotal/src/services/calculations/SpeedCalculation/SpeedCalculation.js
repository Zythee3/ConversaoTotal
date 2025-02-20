const SpeedConversion = {
    "Metros por segundos (m/s)": {"Quilômetros por hora (km/h)": 3.6, "Metros por segundos (m/s)": 1 },
    "Quilômetros por hora (km/h)": {"Quilômetros por hora (km/h)": 1, "Metros por segundos (m/s)": 3.6 }
}


const SpeedCalculationResult = (value, fromUnit, toUnit) => {
  let result = 0;
  if (fromUnit == "Metros por segundos (m/s)" && toUnit == "Quilômetros por hora (km/h)"){
    result =  value * SpeedConversion[fromUnit][toUnit];
  }
  else if (fromUnit == "Quilômetros por hora (km/h)" && toUnit == "Metros por segundos (m/s)"){
    result =  value / SpeedConversion[fromUnit][toUnit];
  }
  else{
    result = value;
  }
  return result;
};

export default SpeedCalculationResult
