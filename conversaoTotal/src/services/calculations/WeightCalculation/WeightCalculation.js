const weightConversions = {
    kg: { kg: 1, hg: 10, dag: 100, g: 1000, dg: 10000, cg: 100000, mg: 1000000 },
    hg: { kg: 0.1, hg: 1, dag: 10, g: 100, dg: 1000, cg: 10000, mg: 100000 },
    dag: { kg: 0.01, hg: 0.1, dag: 1, g: 10, dg: 100, cg: 1000, mg: 10000 },
    g: { kg: 0.001, hg: 0.01, dag: 0.1, g: 1, dg: 10, cg: 100, mg: 1000 },
    dg: { kg: 0.0001, hg: 0.001, dag: 0.01, g: 0.1, dg: 1, cg: 10, mg: 100 },
    cg: { kg: 0.00001, hg: 0.0001, dag: 0.001, g: 0.01, dg: 0.1, cg: 1, mg: 10 },
    mg: { kg: 0.000001, hg: 0.00001, dag: 0.0001, g: 0.001, dg: 0.01, cg: 0.1, mg: 1 },
};


const WeightCalculationResult = (value, fromUnit, toUnit) =>{

    const UnitMapping = {
        "Quilograma (kg)" : "kg",
        "Hectograma (hg)" : "hg",
        "Decagrama (dag)" : "dag",
        "Grama (g)" : "g",
        "Decigrama (dg)" : "dg",
        "Centigrama (cg)" : "cg",
        "Miligrama (mg)" : "mg"
    }

    fromUnit = UnitMapping[fromUnit];
    toUnit = UnitMapping[toUnit];

    const factor = weightConversions[fromUnit][toUnit];    
    const result = value * factor;
    return result;
}

export default WeightCalculationResult;