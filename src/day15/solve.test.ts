import { expect, test } from 'bun:test';

import { day, part1, part2, testInput } from './solve';

test(`Day ${day} part 1`, () => {
  expect(part1(testInput)).toBe(1320);
});

test(`Day ${day} part 2`, () => {
  expect(part2(testInput)).toBe(145);
});
