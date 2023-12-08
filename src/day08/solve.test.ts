import { expect, test } from 'bun:test';

import { day, part1, part2, testInput, testInput2, testInput3 } from './solve';

test(`Day ${day} part 1`, () => {
  expect(part1(testInput)).toBe(2);
  expect(part1(testInput2)).toBe(6);
});

test(`Day ${day} part 2`, () => {
  expect(part2(testInput3)).toBe(6);
});
