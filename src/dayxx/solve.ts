import { getInput } from '../getInput';

export const day = 'dayxx';
export const testInput = getInput(`src/${day}/test.txt`);
const input = getInput(`src/${day}/input.txt`);

export const part1 = (input: string[]): number => {
  return 0;
};

export const part2 = (input: string[]): number => {
  return 0;
};

(() => {
  console.log('Part 1: ' + part1(input));
  console.log('Part 2: ' + part2(input));
})();
