const timeConversions = {
    yr: { yr: 1, mo: 12, wk: 52.1429, d: 365, h: 8760, min: 525600, s: 31536000 },
    mo: { yr: 1/12, mo: 1, wk: 4.34524, d: 30.4167, h: 730, min: 43800, s: 2628000 },
    wk: { yr: 1/52.1429, mo: 1/4.34524, wk: 1, d: 7, h: 168, min: 10080, s: 604800 },
    d: { yr: 1/365, mo: 1/30.4167, wk: 1/7, d: 1, h: 24, min: 1440, s: 86400 },
    h: { yr: 1/8760, mo: 1/730, wk: 1/168, d: 1/24, h: 1, min: 60, s: 3600 },
    min: { yr: 1/525600, mo: 1/43800, wk: 1/10080, d: 1/1440, h: 1/60, min: 1, s: 60 },
    s: { yr: 1/31536000, mo: 1/2628000, wk: 1/604800, d: 1/86400, h: 1/3600, min: 1/60, s: 1 }
};

const TimeCalculationResult = (value, fromUnit, toUnit) => {

    const unitMapping = {
        "Ano (yr)": "yr",
        "Mês (mo)": "mo",
        "Semana (wk)": "wk",
        "Dia (d)": "d",
        "Horas (h)": "h",
        "Minuto (min)": "min",
        "Segundo (s)": "s"
    };

    fromUnit = unitMapping[fromUnit];
    toUnit = unitMapping[toUnit];

    const factor = timeConversions[fromUnit][toUnit];
    const result = value * factor;

    return result;
}
export default TimeCalculationResult