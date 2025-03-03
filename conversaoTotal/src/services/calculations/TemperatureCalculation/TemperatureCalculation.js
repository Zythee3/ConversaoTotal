function celsius (value, toUnit) {
    if (toUnit == "Kelvin (K)"){
        return value + 273; 
    }
    else{
        return value * 1.8 + 32; 
    }
}

function Kelvin (value, toUnit){
    if (toUnit == "Celsius (°C)"){
        return value - 273;
    }
    else{
        return (value - 273) * 1.8 + 32;
    }
}

function Fahrenheit (value, toUnit){
    if (toUnit == "Celsius (°C)"){
        return (value - 32) / 1.8;
    }
    else{
        return (value - 32) * 5/9 + 273;
    }
}

const TemperatureCalculationResult = (value, fromUnit, toUnit) =>{
    switch(fromUnit){
        case "Celsius (°C)":
            if (fromUnit === toUnit){
                return value;
            }
            else{
                return celsius(value, toUnit);
            }
            
        case "Kelvin (K)":
            if (fromUnit === toUnit){
                return value;
            }
            else{
                return Kelvin(value, toUnit);
            } 

        case "Fahrenheit (°F)":
            if (fromUnit === toUnit){
                return value;
            }
            else{
                return Fahrenheit(value, toUnit);
            }
    }
}

export default TemperatureCalculationResult