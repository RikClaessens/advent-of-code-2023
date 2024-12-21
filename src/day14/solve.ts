import { getInput } from '../getInput';
import { memoize } from '../utils';

export const day = 'day14';
export const testInput = getInput(`src/${day}/test.txt`);
const input = getInput(`src/${day}/input.txt`);

const printMap = (map: string[]) => {
  console.log('===');
  map.forEach((r) => console.log(r));
};

const shiftNorth = (map: string[]): string[] => {
  let newMap = map.map((r) => r.split('').map((c) => c));
  newMap.forEach((row, rowIndex) => {
    row.forEach((_, colIndex) => {
      if (newMap[rowIndex][colIndex] === 'O') {
        let newRowIndex = rowIndex;
        while (newRowIndex > 0 && newMap[newRowIndex - 1][colIndex] === '.') {
          newRowIndex -= 1;
        }
        newMap[rowIndex][colIndex] = '.';
        newMap[newRowIndex][colIndex] = 'O';
      }
    });
  });

  return newMap.map((r) => r.join(''));
};

const rotateMap = (map: string[]): string[] => {
  let newMap: string[] = [];
  map[0].split('').forEach((_, colIndex) => {
    newMap.push(
      map
        .map((row) => row[colIndex])
        .reverse()
        .join(''),
    );
  });
  return newMap;
};

const calcWeight = (map: string[]): number => {
  let totalWeight = 0;
  map.forEach((row, rowIndex) => {
    row.split('').forEach((col) => {
      if (col === 'O') {
        totalWeight += map.length - rowIndex;
      }
    });
  });
  return totalWeight;
};

export const part1 = (input: string[]): number => {
  const newMap = shiftNorth(input);
  // printMap(newMap);
  const weight = calcWeight(newMap);
  return weight;
};

export const part2 = (input: string[]): number => {
  let map = input.map((r) => r);
  const maps: { [key: string]: number[] } = {};
  const spinCycle = 1000000000;
  let foundMapKey = '';
  for (var i = 1; i <= spinCycle; i += 1) {
    for (var j = 0; j < 4; j += 1) {
      map = shiftNorth(map);
      map = rotateMap(map);
    }
    const mapKey = map.join('*');
    if (!maps[mapKey]) {
      maps[mapKey] = [i];
    } else {
      maps[mapKey].push(i);
      const loopLength = maps[mapKey][1] - maps[mapKey][0];
      if (Number.isInteger((spinCycle - maps[mapKey][0]) / loopLength)) {
        foundMapKey = mapKey;
        break;
      }
    }
  }
  const weight = calcWeight(foundMapKey.split('*'));
  return weight;
};

(() => {
  console.log('Part 1: ' + part1(input));
  console.log('Part 2: ' + part2(input));
})();
