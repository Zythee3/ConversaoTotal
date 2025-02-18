import LenghtCalculationResult from "./LengthCalculation/LenghtCalculation";
import SpeedCalculationResult from "./SpeedCalculation/SpeedCalculation";

const ProcessRequest = (type, value, unit, unit2) => {
  switch (type) {
    case "Length":
      return LenghtCalculationResult(value, unit, unit2);
    case "Speed":
      return SpeedCalculationResult(value, unit, unit2);
  }
};

export default ProcessRequest;
