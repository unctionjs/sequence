/* eslint-disable no-magic-numbers */
import sequence from "./index";

const increment = (value) => value + 1;
const decrement = (value) => value - 1;
const itself = (value) => value;


test(() => {
  expect(sequence([increment, decrement])(1)).toEqual([2, 0]);
});

test(() => {
  expect(sequence(new Set([increment, decrement]))(1)).toEqual(new Set([2, 0]));
});

test(() => {
  expect(sequence(new Map([["a", increment], ["b", decrement]]))(1)).toEqual(new Map([["a", 2], ["b", 0]]));
});

test(() => {
  expect(sequence({
    xxx: increment,
    yyy: decrement,
    zzz: itself,
  })(1)).toEqual({
    xxx: 2,
    yyy: 0,
    zzz: 1,
  });
});
