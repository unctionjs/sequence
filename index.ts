import mapValues from "@unction/mapvalues";
import thrush from "@unction/thrush";
import {EnumerableType} from "./types";
import {MapperFunctionType} from "./types";

export default function sequence<A, B> (unctions: EnumerableType<MapperFunctionType<A, B>>) {
  return function sequenceUnctions (value: A): EnumerableType<B> {
    return mapValues(thrush(value))(unctions);
  };
}
