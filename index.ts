import mapValues from "@unction/mapvalues";
import thrush from "@unction/thrush";

import {MapperFunctionType} from "./types";

export default function sequence<A, B> (unctions: Array<MapperFunctionType<A, B>> | Set<MapperFunctionType<A, B>> | Record<string | number | symbol, MapperFunctionType<A, B>> | Map<unknown, MapperFunctionType<A, B>>) {
  return function sequenceUnctions (value: A): Array<B> | Set<B> | Record<string | number | symbol, unknown> | Map<B, unknown> | string {
    return mapValues(thrush(value))(unctions);
  };
}
