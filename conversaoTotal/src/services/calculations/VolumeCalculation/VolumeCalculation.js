const VolumeConversions = {
    kl: { kl: 1, hl: 10, dal: 100, l: 1000, dl: 10000, cl: 100000, ml: 1000000 },
    hl: { kl: 0.1, hl: 1, dal: 10, l: 100, dl: 1000, cl: 10000, ml: 100000 },
    dal: { kl: 0.01, hl: 0.1, dal: 1, l: 10, dl: 100, cl: 1000, ml: 10000 },
    l: { kl: 0.001, hl: 0.01, dal: 0.1, l: 1, dl: 10, cl: 100, ml: 1000 },
    dl: { kl: 0.0001, hl: 0.001, dal: 0.01, l: 0.1, dl: 1, cl: 10, ml: 100 },
    cl: { kl: 0.00001, hl: 0.0001, dal: 0.001, l: 0.01, dl: 0.1, cl: 1, ml: 10 },
    ml: { kl: 0.000001, hl: 0.00001, dal: 0.0001, l: 0.001, dl: 0.01, cl: 0.1, ml: 1 },
};


const VolumeCalculationResult = (value, fromUnit, toUnit) =>{

    const unitMappingVolume = {
        "Quilolitro (kl)": "kl",
        "Hectolitro (hl)": "hl",
        "Decalitro (dal)": "dal",
        "Litro (l)": "l",
        "Decilitro (dl)": "dl",
        "Centilitro (cl)": "cl",
        "Mililitro (ml)": "ml",
    };
    
    fromUnit = unitMappingVolume[fromUnit];
    toUnit = unitMappingVolume[toUnit];
  
    const factor = VolumeConversions[fromUnit][toUnit];
    const result = value * factor;

    return result
}

export default VolumeCalculationResult