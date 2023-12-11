import { getInput } from '../getInput';

export const day = 'day11';
export const testInput = getInput(`src/${day}/test.txt`);
const input = getInput(`src/${day}/input.txt`);

type Map = string[][];
type Coord = {
  x: number;
  y: number;
};

const getMap = (input: string[]): Map => input.map((i) => i.split(''));

const getExpandedRowsAndCols = (
  map: Map,
): { rows: number[]; cols: number[] } => {
  let rows: number[] = [];
  let cols: number[] = [];
  map.forEach((_, rowIndex) => {
    if (!map[rowIndex].join('').includes('#')) {
      rows.push(rowIndex);
    }
  });
  map[0].forEach((_, colIndex) => {
    if (
      !map
        .map((row) => row[colIndex])
        .join('')
        .includes('#')
    ) {
      cols.push(colIndex);
    }
  });

  return { rows, cols };
};

const getGalaxies = (map: Map): Coord[] => {
  const galaxies: Coord[] = [];
  for (var y = 0; y < map.length; y += 1) {
    for (var x = 0; x < map[y].length; x += 1) {
      if (map[y][x] === '#') {
        galaxies.push({ x, y });
      }
    }
  }
  return galaxies;
};

export const getDistance = (
  c1: Coord,
  c2: Coord,
  numberOfExpandedRows: number,
  numberOfExpandedCols: number,
  expand: number,
): number =>
  Math.abs(c1.x - c2.x) +
  numberOfExpandedCols * (expand - 1) +
  Math.abs(c1.y - c2.y) +
  numberOfExpandedRows * (expand - 1);

const getDistances = (
  galaxies: Coord[],
  rows: number[],
  cols: number[],
  expand: number = 1,
) => {
  const distances: number[] = [];

  for (var i = 0; i < galaxies.length; i += 1) {
    for (var j = i + 1; j < galaxies.length; j += 1) {
      distances.push(
        getDistance(
          galaxies[i],
          galaxies[j],
          rows.filter(
            (r) =>
              r > Math.min(galaxies[i].y, galaxies[j].y) &&
              r < Math.max(galaxies[i].y, galaxies[j].y),
          ).length,
          cols.filter(
            (r) =>
              r > Math.min(galaxies[i].x, galaxies[j].x) &&
              r < Math.max(galaxies[i].x, galaxies[j].x),
          ).length,
          expand,
        ),
      );
    }
  }

  return distances;
};

export const part1 = (input: string[], expand: number): number => {
  const map = getMap(input);
  const { rows, cols } = getExpandedRowsAndCols(map);

  return getDistances(getGalaxies(map), rows, cols, expand).reduce(
    (sum, d) => (sum += d),
    0,
  );
};
export const part2 = (input: string[], expand: number): number => {
  const map = getMap(input);
  const { rows, cols } = getExpandedRowsAndCols(map);
  return getDistances(getGalaxies(map), rows, cols, expand).reduce(
    (sum, d) => (sum += d),
    0,
  );
};

(() => {
  console.log('Part 1: ' + part1(input, 1));
  console.log('Part 2: ' + part2(input, 1000000));
})();
