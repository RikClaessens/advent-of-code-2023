import { expect, test } from 'bun:test';

import {
  day,
  part1,
  part2,
  testInput,
  testInput2,
  testInput3,
  testInput4,
  testInput5,
  testInput6,
} from './solve';

test(`Day ${day} part 1`, () => {
  expect(part1(testInput)).toBe(4);
  expect(part1(testInput2)).toBe(8);
});

test(`Day ${day} part 2`, () => {
  expect(part2(testInput3)).toBe(4);
  expect(part2(testInput4)).toBe(4);
  expect(part2(testInput5)).toBe(8);
  expect(part2(testInput6)).toBe(10);
});
