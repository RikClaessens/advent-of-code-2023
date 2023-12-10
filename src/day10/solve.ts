import { getInput } from '../getInput';

export const day = 'day10';
export const testInput = getInput(`src/${day}/test.txt`);
export const testInput2 = getInput(`src/${day}/test2.txt`);
export const testInput3 = getInput(`src/${day}/test3.txt`);
export const testInput4 = getInput(`src/${day}/test4.txt`);
export const testInput5 = getInput(`src/${day}/test5.txt`);
export const testInput6 = getInput(`src/${day}/test6.txt`);
const input = getInput(`src/${day}/input.txt`);

type Coord = {
  x: number;
  y: number;
};

type Neighbor = {
  coord: Coord;
  connections: string[];
};

type Map = string[][];
type DistanceMap = number[][];

const getMap = (input: string[]): Map => input.map((i) => i.split(''));

const getStartingPoint = (map: Map): Coord => {
  const start: Coord = { x: -1, y: -1 };

  for (var y = 0; y < map.length; y += 1) {
    for (var x = 0; x < map.length; x += 1) {
      if (map[y][x] === 'S') {
        return { x, y };
      }
    }
  }

  return start;
};

const neighbors: Neighbor[] = [
  { coord: { x: -1, y: 0 }, connections: ['F', 'L', '-'] },
  { coord: { x: 1, y: 0 }, connections: ['7', 'J', '-'] },
  { coord: { x: 0, y: -1 }, connections: ['F', '7', '|'] },
  { coord: { x: 0, y: 1 }, connections: ['L', 'J', '|'] },
];

const fillDistanceMap = (map: Map) => {
  const start = getStartingPoint(map);
  const distanceMap: DistanceMap = map.map((m) => new Array(m.length).fill(-1));
  distanceMap[start.y][start.x] = 0;
  let distance = 1;
  let openCoords: Coord[] = [start];
  do {
    const newOpenCoords: Coord[] = [];
    openCoords.forEach((openCoord) => {
      neighbors.forEach((n) => {
        if (
          map?.[openCoord.y + n.coord.y]?.[openCoord.x + n.coord.x] &&
          n.connections.includes(
            map[openCoord.y + n.coord.y][openCoord.x + n.coord.x],
          ) &&
          distanceMap[openCoord.y + n.coord.y][openCoord.x + n.coord.x] === -1
        ) {
          distanceMap[openCoord.y + n.coord.y][openCoord.x + n.coord.x] =
            distance;
          newOpenCoords.push({
            x: openCoord.x + n.coord.x,
            y: openCoord.y + n.coord.y,
          });
        }
      });
    });
    distance += 1;
    openCoords = [...newOpenCoords];
  } while (openCoords.length > 0);
  return distance - 2;
};

export const part1 = (input: string[]): number => {
  const map = getMap(input);
  return fillDistanceMap(map);
};

export const part2 = (input: string[]): number => {
  return 0;
};

(() => {
  console.log('Part 1: ' + part1(input));
  // console.log('Part 2: ' + part2(input));
})();
