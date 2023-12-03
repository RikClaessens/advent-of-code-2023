import { expect, test } from 'bun:test';

import { day, part1, part2, testInput, isSymbol } from './solve';

test(`Day ${day} part 1`, () => {
  expect(part1(testInput)).toBe(4361);
  expect(isSymbol(undefined)).toBe(false);
  expect(isSymbol('.')).toBe(false);
  expect(isSymbol('1')).toBe(false);
  expect(isSymbol('0')).toBe(false);
  expect(isSymbol('!')).toBe(true);
  expect(isSymbol('@')).toBe(true);
  expect(isSymbol('/')).toBe(true);
  expect(isSymbol('-')).toBe(true);
});

test(`Day ${day} part 2`, () => {
  expect(part2(testInput)).toBe(467835);
});
