const SpeedConversion = {
    "Metros por segundos (m/s)": {"Quilômetros por hora (km/h)": 3.6, "Metros por segundos (m/s)": 1 },
    "Quilômetros por hora (km/h)": {"Quilômetros por hora (km/h)": 1, "Metros por segundos (m/s)": 3.6 }
}


const SpeedCalculationResult = (value, unit, unit2) => {

//   if (unit == "")
  const result =  value * SpeedConversion[unit][unit2];
  return result;
};

export default SpeedCalculationResult
