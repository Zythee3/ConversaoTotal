const SpeedConversion = {
    "Metros por segundos (m/s)": {"Quilômetros por hora (km/h)": 3.6, "Metros por segundos (m/s)": 1 },
    "Quilômetros por hora (km/h)": {"Quilômetros por hora (km/h)": 1, "Metros por segundos (m/s)": 3.6 }
}


const SpeedCalculationResult = (value, unit, unit2) => {
  let result = 0;
  if (unit == "Metros por segundos (m/s)" && unit2 == "Quilômetros por hora (km/h)"){
    result =  value * SpeedConversion[unit][unit2];
  }
  else if (unit == "Quilômetros por hora (km/h)" && unit2 == "Metros por segundos (m/s)"){
    result =  value / SpeedConversion[unit][unit2];
  }
  else{
    result = value;
  }
  return result;
};

export default SpeedCalculationResult
