import LenghtCalculationResult from "./LengthCalculation/LenghtCalculation";
import SpeedCalculationResult from "./SpeedCalculation/SpeedCalculation";
import WeightCalculationResult from "./WeightCalculation/WeightCalculation";
import VolumeCalculationResult from "./VolumeCalculation/VolumeCalculation"
import TemperatureCalculationResult from "./TemperatureCalculation/TemperatureCalculation";

const ProcessRequest = (type, value, unit, unit2) => {
  switch (type) {
    case "Length":
      return LenghtCalculationResult(value, unit, unit2);
    case "Speed":
      return SpeedCalculationResult(value, unit, unit2);
    case "Weight":
      return WeightCalculationResult(value, unit, unit2);
    case "Volume":
      return VolumeCalculationResult(value, unit, unit2);
    case "Temperature":
      return TemperatureCalculationResult(value, unit, unit2);
  }
};

export default ProcessRequest;
