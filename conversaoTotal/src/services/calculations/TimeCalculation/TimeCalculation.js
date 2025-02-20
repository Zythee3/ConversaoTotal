const TimeConversion = 
    {
        "Ano": {"Ano": 1, "Mês": 12, "Semanas": 52, "Dias": 365, "Horas": 8766, "Minutos": 525960, "Segundos": 31536000},
        "Mês": {"Ano": 1/12, "Mês": 1, "Semanas": 4.33, "Dias": 30.42, "Horas": 730, "Minutos": 43830, "Segundos": 2629800},
        "Semanas": {"Ano": 1/52, "Mês": 1/4.33, "Semanas": 1, "Dias": 7, "Horas": 168, "Minutos": 10080, "Segundos": 604800},
        "Dias": {"Ano": 1/365, "Mês": 1/30.42, "Semanas": 1/7, "Dias": 1, "Horas": 24, "Minutos": 1440, "Segundos": 86400},
        "Horas": {"Ano": 1/8766, "Mês": 1/730, "Semanas": 1/168, "Dias": 1/24, "Horas": 1, "Minutos": 60, "Segundos": 3600},
        "Minutos": {"Ano": 1/525960, "Mês": 1/43830, "Semanas": 1/10080, "Dias": 1/1440, "Horas": 1/60, "Minutos": 1, "Segundos": 60},
        "Segundos": {"Ano": 1/31536000, "Mês": 1/2629800, "Semanas": 1/604800, "Dias": 1/86400, "Horas": 1/3600, "Minutos": 1/60, "Segundos": 1}
    }

const TimeCalculationResult = (value, fromUnit, toUnit) =>{
    
    const factor = TimeConversion[fromUnit][toUnit];
    const result = value * factor;

    return result;
}
export default TimeCalculationResult