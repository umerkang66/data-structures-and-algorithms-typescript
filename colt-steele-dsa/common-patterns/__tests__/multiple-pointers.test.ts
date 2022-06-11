import { sumZeroInSortedArr, countUnique } from '../multiple-pointers';

describe('Question SumZeroInSortedArr', () => {
  test('can return correct pairs that result in 0 by addition', () => {
    expect(sumZeroInSortedArr([-4, -3, -2, -1, 0, 1, 2, 5])).toEqual([-2, 2]);
  });

  test('can return empty array result in 0 by addition', () => {
    expect(sumZeroInSortedArr([-4, -3, -2, -1, 0, 7, 6, 5])).toEqual([]);
  });
});

describe('Question CountUnique', () => {
  test('can return correct unique values', () => {
    expect(countUnique([1, 1, 2, 3, 3, 4, 5, 6, 6, 7])).toBe(7);
  });

  test('can return 0 for empty arr', () => {
    expect(countUnique([])).toBe(0);
  });

  test('can return 1 for 1 element arr', () => {
    expect(countUnique([3])).toBe(1);
  });
});
