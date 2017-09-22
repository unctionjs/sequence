import mapValues from "@unction/mapvalues"
import thrush from "@unction/thrush"

type MapFunctorType = ArrayType<MapFunctionType> | SetType<MapFunctionType> | ObjectType<ObjectKeyType, MapFunctionType> | MapType<MapKeyType, MapFunctionType>

export default function sequence (unctions: MapFunctorType): Function {
  return function sequenceUnctions (value: mixed): ArrayType | SetType | ObjectType | MapType {
    return mapValues(
      thrush(value)
    )(
      unctions
    )
  }
}
