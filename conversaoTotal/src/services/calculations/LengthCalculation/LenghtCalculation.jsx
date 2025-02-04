import React from 'react'

const LenghtCalculation = (value, fromUnit, toUnit) => {

    const lengthConversions = {
        meter: 1,      // Base é metro
        centimeter: 100,
        millimeter: 1000,
        kilometer: 0.001,
      };

    const baseValue = value / lengthConversions[fromUnit];  
    const convertedValue = baseValue * lengthConversions[toUnit];

    console.log(convertedValue);

    return (
        <div></div>
    )
}

export default LenghtCalculation