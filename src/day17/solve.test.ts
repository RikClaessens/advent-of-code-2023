import { expect, test } from 'bun:test';

import { day, part1, part2, testInput, testInput2 } from './solve';

test(`Day ${day} part 1`, () => {
  expect(part1(testInput)).toBe(102);
});

test(`Day ${day} part 2`, () => {
  expect(part2(testInput)).toBe(94);
});

test(`Day ${day} part 2.2`, () => {
  expect(part2(testInput2)).toBe(71);
});
