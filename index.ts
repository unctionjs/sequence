import mapValues from "@unction/mapvalues";
import thrush from "@unction/thrush";

import {MapperFunctionType} from "./types";

export default function sequence<A, B> (unctions: EnumerableType<MapperFunctionType<A, B>>) {
  return function sequenceUnctions (value: A): Array<B> | Set<B> | RecordType<B, unknown> | string {
    return mapValues(thrush(value))(unctions);
  };
}
