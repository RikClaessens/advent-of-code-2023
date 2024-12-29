import { getInput } from '../getInput';

export const day = 'day18';
export const testInput = getInput(`src/${day}/test.txt`);
const input = getInput(`src/${day}/input.txt`);

type GetDirDist = (step: string) => [string, number];

const getArea = (input: string[], getDirDist: GetDirDist): number => {
  let x = 0;
  let y = 0;

  let prevX = 0;
  let prevY = 0;

  let area = 0;

  input.forEach((step) => {
    const [dir, dist] = getDirDist(step);
    x = prevX;
    y = prevY;
    switch (dir) {
      case 'U':
        x = prevX - dist;
        break;
      case 'D':
        x = prevX + dist;
        break;
      case 'R':
        y = prevY + dist;
        break;
      case 'L':
        y = prevY - dist;
        break;
      default:
        break;
    }

    area += prevY * x - prevX * y + dist;
    prevX = x;
    prevY = y;
  });
  return area / 2 + 1;
};

export const part1 = (input: string[]): number => {
  return getArea(input, (step) => [step[0], parseInt(step.split(' ')[1])]);
};

export const part2 = (input: string[]): number => {
  return getArea(input, (step) => [
    'RDLU'[parseInt(step.slice(-2, -1))],
    parseInt(step.slice(-7, -2), 16),
  ]);
};

(() => {
  console.log('Part 1: ' + part1(input));
  console.log('Part 2: ' + part2(input));
})();
