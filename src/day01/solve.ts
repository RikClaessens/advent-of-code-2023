import { getInput } from '../getInput';

export const day = 'day01';
export const testInput = getInput(`src/${day}/test.txt`);
export const testInput2 = getInput(`src/${day}/test2.txt`);
const input = getInput(`src/${day}/input.txt`);

export const part1 = (input: string[]): number => {
  let sum = 0;
  input.forEach((line) => {
    const matches = line.match(/\d/g);
    const firstDigit = matches?.[0];
    const lastDigit = matches?.[matches.length - 1];
    const twoDigitNumber = Number.parseInt(`${firstDigit}${lastDigit}`);
    sum += twoDigitNumber;
  });
  return sum;
};

const parseDigit = (digit: string): string =>
  digit
    .replace('one', '1')
    .replace('two', '2')
    .replace('three', '3')
    .replace('four', '4')
    .replace('five', '5')
    .replace('six', '6')
    .replace('seven', '7')
    .replace('eight', '8')
    .replace('nine', '9');

export const part2 = (input: string[]): number => {
  let sum = 0;
  input.forEach((line) => {
    const regex = /(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g;
    const matches = Array.from(line.matchAll(regex), (x) => x[1]);
    const firstDigit = matches?.[0];
    const lastDigit = matches?.[matches.length - 1];
    const twoDigitNumber = Number.parseInt(
      `${parseDigit(firstDigit)}${parseDigit(lastDigit)}`,
    );

    sum += twoDigitNumber;
  });
  return sum;
};

(() => {
  console.log('Part 1: ' + part1(input));
  console.log('Part 2: ' + part2(input));
})();
