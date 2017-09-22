/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import sequence from "./index"

const increment = (value) => value + 1
const decrement = (value) => value - 1
const itself = (value) => value


test(({same, end}) => {
  same(
    sequence([increment, decrement])(1),
    [2, 0]
  )

  end()
})

test(({same, end}) => {
  same(
    sequence(new Set([increment, decrement]))(1),
    new Set([2, 0])
  )

  end()
})

test(({same, end}) => {
  same(
    sequence(new Map([["a", increment], ["b", decrement]]))(1),
    new Map([["a", 2], ["b", 0]])
  )

  end()
})

test(({same, end}) => {
  same(
    sequence({
      xxx: increment,
      yyy: decrement,
      zzz: itself,
    })(1),
    {
      xxx: 2,
      yyy: 0,
      zzz: 1,
    }
  )

  end()
})
