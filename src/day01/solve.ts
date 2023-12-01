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

const parseDigit = (digit: string): number => {
  switch (digit) {
    case 'one':
      return 1;
    case 'two':
      return 2;
    case 'three':
      return 3;
    case 'four':
      return 4;
    case 'five':
      return 5;
    case 'six':
      return 6;
    case 'seven':
      return 7;
    case 'eight':
      return 8;
    case 'nine':
      return 9;
    default:
      return Number.parseInt(digit);
  }
};
export const part2 = (input: string[]): number => {
  let sum = 0;
  input.forEach((line) => {
    const regex = /(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g;
    const matches = Array.from(line.matchAll(regex), (x) => x[1]);
    const firstDigit = matches?.[0] || '';
    const lastDigit = matches?.[matches.length - 1] || '';
    const twoDigitNumber = Number.parseInt(
      `${parseDigit(firstDigit)}${parseDigit(lastDigit)}`,
    );

    sum += twoDigitNumber;
    console.log(
      `${line}: ${firstDigit} + ${lastDigit} = ${twoDigitNumber} (${sum}) [${matches}]`,
    );
  });
  return sum;
};

(() => {
  console.log('Part 1: ' + part1(input));
  console.log('Part 2: ' + part2(input));
})();

// 54100 too high
