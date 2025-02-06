const lengthConversions = {
    km: { km: 1, hm: 10, dam: 100, m: 1000, dm: 10000, cm: 100000, mm: 1000000 },
    hm: { km: 0.1, hm: 1, dam: 10, m: 100, dm: 1000, cm: 10000, mm: 100000 },
    dam: { km: 0.01, hm: 0.1, dam: 1, m: 10, dm: 100, cm: 1000, mm: 10000 },
    m: { km: 0.001, hm: 0.01, dam: 0.1, m: 1, dm: 10, cm: 100, mm: 1000 },
    dm: { km: 0.0001, hm: 0.001, dam: 0.01, m: 0.1, dm: 1, cm: 10, mm: 100 },
    cm: { km: 0.00001, hm: 0.0001, dam: 0.001, m: 0.01, dm: 0.1, cm: 1, mm: 10 },
    mm: { km: 0.000001, hm: 0.00001, dam: 0.0001, m: 0.001, dm: 0.01, cm: 0.1, mm: 1 },
  };

  
  const LenghtCalculationResult = (value, fromUnit, toUnit) => {
    // const factor = 1
    const unitMapping = {
      "quilômetro (km)": "km",
      "hectômetro (hm)": "hm",
      "decâmetro (dam)": "dam",
      "metros (m)": "m",
      "decímetro (dm)": "dm",
      "centímetro (cm)": "cm",
      "milímetro (mm)": "mm",
    };

    
    fromUnit = unitMapping[fromUnit.toLowerCase()];
    toUnit = unitMapping[toUnit.toLowerCase()];
    
    
    const factor = lengthConversions[fromUnit][toUnit];
    console.log(factor);
    const result = value * factor
    return parseFloat(result.toFixed(2));
    
  };
  
  export default LenghtCalculationResult;