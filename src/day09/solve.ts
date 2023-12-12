import { getInput } from '../getInput';
import { sum } from '../utils';

export const day = 'day09';
export const testInput = getInput(`src/${day}/test.txt`);
const input = getInput(`src/${day}/input.txt`);

const last = (numbers: number[]) => numbers[numbers.length - 1];
const first = (numbers: number[]) => numbers[0];

const getNextInSequence = (numbers: number[]) => {
  let diffs: number[][] = [[...numbers]];
  do {
    diffs[diffs.length] = [];
    for (var i = 0; i < diffs[diffs.length - 2].length - 1; i += 1) {
      diffs[diffs.length - 1].push(
        diffs[diffs.length - 2][i + 1] - diffs[diffs.length - 2][i],
      );
    }
  } while (diffs[diffs.length - 1].find((d) => d !== 0));
  diffs[diffs.length - 1].push(0);
  for (var i = diffs.length - 2; i >= 0; i -= 1) {
    diffs[i].push(last(diffs[i + 1]) + last(diffs[i]));
  }
  return last(diffs[0]);
};

const getPreviousInSequence = (numbers: number[]) => {
  let diffs: number[][] = [[...numbers]];
  do {
    diffs[diffs.length] = [];
    for (var i = 0; i < diffs[diffs.length - 2].length - 1; i += 1) {
      diffs[diffs.length - 1].push(
        diffs[diffs.length - 2][i + 1] - diffs[diffs.length - 2][i],
      );
    }
  } while (diffs[diffs.length - 1].find((d) => d !== 0));
  diffs[diffs.length - 1].push(0);

  for (var i = diffs.length - 2; i >= 0; i -= 1) {
    diffs[i] = [first(diffs[i]) - first(diffs[i + 1]), ...diffs[i]];
  }
  return first(diffs[0]);
};

export const part1 = (input: string[]): number => {
  const results = input
    .map((l) => l.split(' ').map((n) => Number.parseInt(n)))
    .map(getNextInSequence);
  return results.reduce(sum);
};

export const part2 = (input: string[]): number => {
  const results = input
    .map((l) => l.split(' ').map((n) => Number.parseInt(n)))
    .map(getPreviousInSequence);
  return results.reduce(sum);
};

(() => {
  console.log('Part 1: ' + part1(input));
  console.log('Part 2: ' + part2(input));
})();
