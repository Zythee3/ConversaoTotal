const lengthConversions = {
    km: { km: 1, hec: 10, dam: 100, m: 1000, dm: 10000, cm: 100000, mm: 1000000 },
    hec: { km: 0.1, hec: 1, dam: 10, m: 100, dm: 1000, cm: 10000, mm: 100000 },
    dam: { km: 0.01, hec: 0.1, dam: 1, m: 10, dm: 100, cm: 1000, mm: 10000 },
    m: { km: 0.001, hec: 0.01, dam: 0.1, m: 1, dm: 10, cm: 100, mm: 1000 },
    dm: { km: 0.0001, hec: 0.001, dam: 0.01, m: 0.1, dm: 1, cm: 10, mm: 100 },
    cm: { km: 0.00001, hec: 0.0001, dam: 0.001, m: 0.01, dm: 0.1, cm: 1, mm: 10 },
    mm: { km: 0.000001, hec: 0.00001, dam: 0.0001, m: 0.001, dm: 0.01, cm: 0.1, mm: 1 },
  };

  
  const LenghtCalculationResult = (value, fromUnit, toUnit) => {
    const unitMapping = {
      quilômetro: "km",
      hectômetro: "hec",
      decâmetro: "dam",
      metros: "m",
      decímetro: "dm",
      centímetro: "cm",
      milímetro: "mm",
    };

    
    fromUnit = unitMapping[fromUnit.toLowerCase()];
    toUnit = unitMapping[toUnit.toLowerCase()];
    
    
    const factor = lengthConversions[fromUnit][toUnit];
    return value * factor;
  };
  
  export default LenghtCalculationResult;