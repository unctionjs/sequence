import mapValues from "@unction/mapvalues";
import thrush from "@unction/thrush";
export default function sequence (unctions) {
  return function sequenceUnctions (value) {
    return mapValues(thrush(value))(unctions);
  };
}
