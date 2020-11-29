# @unction/sequence

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> EnumerableType<MapperFunctionType<A, B>> => A => Array<B> | Set<B> | RecordType<B, unknown> | string
> Array<MapperFunctionType<A, B>> => A => Array<B>
> Set<MapperFunctionType<A, B>> => A => Set<B>
> ObjectType<unknown, MapperFunctionType<A, B>> => A => ObjectType<unknown, B>
> Map<unknown, MapperFunctionType<A, B>> => A => Map<unknown, B>

Takes a list of functions, a value, and applies that value to each function, returning an array of results.

``` javascript
sequence([increment, decrement])(1) // [2, 0]
sequence(new Set([increment, decrement]))(1) // {2 0}
sequence(new Map([["a", increment], ["b", decrement]]))(1) // {{"a" 2}, {"b" 0}}
sequence({x: increment, y: decrement, z: itself})(1) // {x: 2, y: 0, z: 1}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/sequence.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/sequence.svg?maxAge=2592000&style=flat-square
