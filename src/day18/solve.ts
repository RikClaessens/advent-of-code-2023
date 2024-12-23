import { getInput } from '../getInput';
import fs from 'fs';

export const day = 'day18';
export const testInput = getInput(`src/${day}/test.txt`);
const input = getInput(`src/${day}/input.txt`);

const dirs = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];
export const part1 = (input: string[]): number => {
  const allCorners: [number, number][] = [];
  allCorners.push([0, 0]);
  let maxX = 0,
    minX = 0,
    maxY = 0,
    minY = 0;
  input.forEach((step) => {
    const [x, y] = allCorners[allCorners.length - 1];
    const [dir, dist] = [step[0], parseInt(step.split(' ')[1])];

    switch (dir) {
      case 'U':
        allCorners.push([x, y - dist]);
        break;
      case 'R':
        allCorners.push([x + dist, y]);
        break;
      case 'D':
        allCorners.push([x, y + dist]);
        break;
      case 'L':
        allCorners.push([x - dist, y]);
        break;
      default:
        break;
    }
  });
  allCorners.forEach((corner) => {
    maxX = Math.max(maxX, corner[0]);
    minX = Math.min(minX, corner[0]);
    maxY = Math.max(maxY, corner[1]);
    minY = Math.min(minY, corner[1]);
  });

  const h = maxY - minY + 1;
  const w = maxX - minX + 1;

  const grid = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => '.'),
  );

  allCorners.forEach((corner) => {
    corner[0] -= minX;
    corner[1] -= minY;
  });

  allCorners.forEach((corner, cornerIndex) => {
    grid[corner[1]][corner[0]] = '#';
    if (cornerIndex > 0) {
      const [x1, y1] = allCorners[cornerIndex - 1];
      const [x2, y2] = allCorners[cornerIndex];
      if (x1 === x2) {
        for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
          grid[y][x1] = '#';
        }
      } else {
        for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
          grid[y1][x] = '#';
        }
      }
    }
  });

  // fill all spaces in the grid that are within the wall of #'s

  let startFillX = allCorners[0][0],
    startFillY = allCorners[0][1];
  const firstTwoSteps = [input[0][0], input[1][0]];
  startFillY += firstTwoSteps.includes('U') ? 1 : -1;
  startFillX += firstTwoSteps.includes('L') ? 1 : -1;

  const queue: [number, number][] = [[startFillX, startFillY]];

  while (queue.length) {
    const [x, y] = queue.shift()!;
    if (grid[y][x] === '.') {
      grid[y][x] = '#';
      dirs.forEach(([dx, dy]) => {
        if (x + dx >= 0 && x + dx < w && y + dy >= 0 && y + dy < h) {
          queue.push([x + dx, y + dy]);
        }
      });
    }
  }

  let count = grid.reduce((acc, row) => {
    return (acc += row.filter((cell) => cell === '#').length);
  }, 0);

  return count;
};

export const part2 = (input: string[]): number => {
  return 0;
};

(() => {
  console.log('Part 1: ' + part1(input));
  console.log('Part 2: ' + part2(input));
})();

// 44543 too high
