import { expect, test } from 'bun:test';

import { day, part1, part2, testInput, maxGrabPart1 } from './solve';

test(`Day ${day} part 1`, () => {
  expect(part1(testInput, maxGrabPart1)).toBe(8);
});

test(`Day ${day} part 2`, () => {
  expect(part2(testInput)).toBe(2286);
});
