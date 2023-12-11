import { expect, test } from 'bun:test';

import { day, part1, part2, testInput } from './solve';

test(`Day ${day} part 1`, () => {
  expect(part1(testInput, 2)).toBe(374);
});

test(`Day ${day} part 2`, () => {
  expect(part2(testInput, 10)).toBe(1030);
  expect(part2(testInput, 100)).toBe(8410);
});
