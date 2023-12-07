import { expect, test } from 'bun:test';

import {
  day,
  part1,
  part2,
  testInput,
  isFiveOfAKind,
  isFourOfAKind,
  isFullHouse,
  isThreeOfAKind,
  isTwoPair,
  isOnePair,
  getHandScore,
  compareHands,
  findHighestScoreWithJokers,
  getCardScorePart2,
} from './solve';

test(`Day ${day} part 1`, () => {
  expect(isFiveOfAKind('AAAAA')).toBeTrue();
  expect(isFiveOfAKind('AAAA2')).toBeFalse();
  expect(isFourOfAKind('K5KKK')).toBeTrue();
  expect(isFourOfAKind('AA2A2')).toBeFalse();
  expect(isFullHouse('K55KK')).toBeTrue();
  expect(isFullHouse('AA2A3')).toBeFalse();
  expect(isThreeOfAKind('Q5KKK')).toBeTrue();
  expect(isThreeOfAKind('2A2J2')).toBeTrue();
  expect(isThreeOfAKind('3A2J2')).toBeFalse();
  expect(isTwoPair('AAJJ2')).toBeTrue();
  expect(isTwoPair('AA2J2')).toBeTrue();
  expect(isTwoPair('2A332')).toBeTrue();
  expect(isOnePair('QQKJA')).toBeTrue();
  expect(getHandScore({ cards: 'AAAAA', bid: 0 })).toBe(7);
  expect(getHandScore({ cards: 'AAAAK', bid: 0 })).toBe(6);
  expect(
    compareHands({ cards: 'AAAAA', bid: 0 }, { cards: 'AAAAK', bid: 0 }),
  ).toBeGreaterThan(0);
  expect(
    compareHands({ cards: 'AAAAK', bid: 0 }, { cards: 'AAKAK', bid: 0 }),
  ).toBeGreaterThan(0);
  expect(
    compareHands({ cards: 'AAKAK', bid: 0 }, { cards: 'AAAAK', bid: 0 }),
  ).toBeLessThan(0);
  expect(
    compareHands({ cards: 'KK677', bid: 0 }, { cards: 'KTJJT', bid: 0 }),
  ).toBeGreaterThan(0);
  expect(
    compareHands({ cards: 'QQQJA', bid: 0 }, { cards: 'T55J5', bid: 0 }),
  ).toBeGreaterThan(0);

  expect(part1(testInput)).toBe(6440);
});

test(`Day ${day} part 2`, () => {
  // expect(part2(testInput)).toBe(5905);
  // expect(findHighestScoreWithJokers('JJJJJ')).toStrictEqual('JJJJJ');
  // expect(findHighestScoreWithJokers('JJAJJ')).toStrictEqual('AAAAA');
  expect(findHighestScoreWithJokers('JJKJJ')).toStrictEqual('KKKKK');
  expect(findHighestScoreWithJokers('234JJ')).toStrictEqual('23444');
  expect(findHighestScoreWithJokers('232JJ')).toStrictEqual('23222');
  // expect(
  //   compareHands(
  //     { cards: 'AAAAA', bid: 0 },
  //     { cards: 'KKKKK', bid: 0 },
  //     getCardScorePart2,
  //   ),
  // ).toBeGreaterThan(0);
  // expect(
  //   compareHands(
  //     { cards: 'KKKKK', bid: 0 },
  //     { cards: 'AAAAA', bid: 0 },
  //     getCardScorePart2,
  //   ),
  // ).toBeLessThan(0);
  // expect(
  //   compareHands(
  //     { cards: 'KKJKK', bid: 0 },
  //     { cards: 'AAAAA', bid: 0 },
  //     getCardScorePart2,
  //   ),
  // ).toBeLessThan(0);
  // expect(
  //   compareHands(
  //     { cards: 'AAAAA', bid: 0 },
  //     { cards: 'KKJKK', bid: 0 },
  //     getCardScorePart2,
  //   ),
  // ).toBeGreaterThan(0);
  // expect(
  //   compareHands(
  //     { cards: 'KKKKK', bid: 0 },
  //     { cards: 'JAAAA', bid: 0 },
  //     getCardScorePart2,
  //   ),
  // ).toBeGreaterThan(0);
  // expect(
  //   compareHands(
  //     { cards: '333333', bid: 0 },
  //     { cards: 'JAAAA', bid: 0 },
  //     getCardScorePart2,
  //   ),
  // ).toBeGreaterThan(0);
  // expect(
  //   compareHands(
  //     { cards: '323333', bid: 0 },
  //     { cards: 'JAAAA', bid: 0 },
  //     getCardScorePart2,
  //   ),
  // ).toBeLessThan(0);
  // expect(
  //   compareHands(
  //     { cards: 'JJJJJ', bid: 0 },
  //     { cards: 'JAAAA', bid: 0 },
  //     getCardScorePart2,
  //   ),
  // ).toBeGreaterThan(0);
  // expect(
  //   compareHands(
  //     { cards: '2AAAA', bid: 0 },
  //     { cards: '59999', bid: 0 },
  //     getCardScorePart2,
  //   ),
  // ).toBeLessThan(0);

  // expect(
  //   compareHands(
  //     { cards: 'AAAAA', bid: 0 },
  //     { cards: 'KKKKK', bid: 0 },
  //     getCardScorePart2,
  //   ),
  // ).toBeLessThan(0);
  expect(
    compareHands(
      { cards: 'KJJJJ', bid: 0, part2Cards: 'KKKKK' },
      { cards: 'JKJJJ', bid: 0, part2Cards: 'KKKKK' },
      getCardScorePart2,
    ),
  ).toBeGreaterThan(0);
  expect(
    compareHands(
      { cards: '2JJJJ', bid: 0, part2Cards: 'KKKKK' },
      { cards: 'JKJJJ', bid: 0, part2Cards: 'KKKKK' },
      getCardScorePart2,
    ),
  ).toBeGreaterThan(0);
  expect(
    compareHands(
      { cards: 'KJJJJ', bid: 0, part2Cards: 'KKKKK' },
      { cards: 'JJJJJ', bid: 0, part2Cards: 'AAAAA' },
      getCardScorePart2,
    ),
  ).toBeGreaterThan(0);
});
