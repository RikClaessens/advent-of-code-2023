import { getInput } from '../getInput';

export const day = 'day13';
export const testInput = getInput(`src/${day}/test.txt`);
const input = getInput(`src/${day}/input.txt`);

type Map = string[];

enum Direction {
  HORIZONTAL,
  VERTICAL,
}

type Reflection = {
  index: number;
  direction: Direction;
};

const findReflection = (map: Map): Reflection => {
  // vertical reflections
  V: for (var i = 0; i < map[0].length - 1; i += 1) {
    const width = Math.min(i + 1, map[0].length - (i + 1));

    for (var w = 0; w < width; w += 1) {
      for (var r = 0; r < map.length; r += 1) {
        if (map[r][i - w] !== map[r][i + 1 + w]) {
          continue V;
        }
      }
    }
    return { index: i + 1, direction: Direction.VERTICAL };
  }
  // horizontal reflections
  H: for (var i = 0; i < map.length - 1; i += 1) {
    const height = Math.min(i + 1, map.length - (i + 1));

    for (var c = 0; c < map[0].length; c += 1) {
      for (var h = 0; h < height; h += 1) {
        if (map[i - h][c] !== map[i + 1 + h][c]) {
          continue H;
        }
      }
    }
    return { index: i + 1, direction: Direction.HORIZONTAL };
  }

  return { index: -1, direction: Direction.HORIZONTAL };
};

const findReflectionOffBy1 = (map: Map): Reflection => {
  // vertical reflections
  V: for (var i = 0; i < map[0].length - 1; i += 1) {
    const width = Math.min(i + 1, map[0].length - (i + 1));
    let diffCount = 0;

    for (var w = 0; w < width; w += 1) {
      for (var r = 0; r < map.length; r += 1) {
        if (map[r][i - w] !== map[r][i + 1 + w]) {
          diffCount += 1;
        }
        if (diffCount > 1) {
          continue V;
        }
      }
    }
    if (diffCount === 1) {
      return { index: i + 1, direction: Direction.VERTICAL };
    }
  }
  // horizontal reflections
  H: for (var i = 0; i < map.length - 1; i += 1) {
    const height = Math.min(i + 1, map.length - (i + 1));
    let diffCount = 0;

    for (var c = 0; c < map[0].length; c += 1) {
      for (var h = 0; h < height; h += 1) {
        if (map[i - h][c] !== map[i + 1 + h][c]) {
          diffCount += 1;
        }
        if (diffCount > 1) {
          continue H;
        }
      }
    }
    if (diffCount === 1) {
      return { index: i + 1, direction: Direction.HORIZONTAL };
    }
  }

  return { index: -1, direction: Direction.HORIZONTAL };
};

const getMaps = (input: string[]): Map[] => {
  let maps: Map[] = [];
  let map: Map = [];
  input.forEach((line, lineIndex) => {
    if (line !== '') {
      map.push(line);
    }
    if (line === '' || lineIndex === input.length - 1) {
      maps.push(map);
      map = [];
    }
  });
  return maps;
};

export const part1 = (input: string[]): number => {
  const maps = getMaps(input);
  const reflections = maps.map(findReflection);
  return reflections.reduce(
    (sum, reflection) =>
      (sum +=
        reflection.direction === Direction.HORIZONTAL
          ? 100 * reflection.index
          : reflection.index),
    0,
  );
};

export const part2 = (input: string[]): number => {
  const maps = getMaps(input);
  const reflections = maps.map(findReflectionOffBy1);
  return reflections.reduce(
    (sum, reflection) =>
      (sum +=
        reflection.direction === Direction.HORIZONTAL
          ? 100 * reflection.index
          : reflection.index),
    0,
  );
};

(() => {
  console.log('Part 1: ' + part1(input));
  console.log('Part 2: ' + part2(input));
})();

// 21349 too low
