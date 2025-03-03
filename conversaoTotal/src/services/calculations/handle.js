import LenghtCalculationResult from "./LengthCalculation/LenghtCalculation";
import SpeedCalculationResult from "./SpeedCalculation/SpeedCalculation";
import MassCalculationResult from "./MassCalculation/MassCalculation"
import VolumeCalculationResult from "./VolumeCalculation/VolumeCalculation"
import TemperatureCalculationResult from "./TemperatureCalculation/TemperatureCalculation";
import TimeCalculationResult from "./TimeCalculation/TimeCalculation";

const ProcessRequest = (type, value, unit, unit2) => {
  switch (type) {
    case "Length":
      return LenghtCalculationResult(value, unit, unit2);
    case "Speed":
      return SpeedCalculationResult(value, unit, unit2);
    case "Mass":
      return MassCalculationResult(value, unit, unit2);
    case "Volume":
      return VolumeCalculationResult(value, unit, unit2);
    case "Temperature":
      return TemperatureCalculationResult(value, unit, unit2);
    case "Time":
      return TimeCalculationResult(value, unit, unit2);
  }
};

export default ProcessRequest;
