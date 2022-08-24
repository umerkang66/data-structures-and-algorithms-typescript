import {
  sumZeroInSortedArr,
  countUnique,
  isSubsequence,
  isSubsequence2,
} from '../multiple-pointers';

describe('Question SumZeroInSortedArr', () => {
  test('can return correct pairs index that result in 0 by addition', () => {
    expect(sumZeroInSortedArr([-4, -3, -2, -1, 0, 1, 2, 5])).toEqual([2, 6]);
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

describe('IsSubsequence', () => {
  test('returns true if string1 is subsequence of string2', () => {
    const str1 = 'abc';
    const str2 = 'ahbgdc';
    expect(isSubsequence(str1, str2)).toBe(true);
    expect(isSubsequence2(str1, str2)).toBe(true);
  });

  test('returns false if string1 is not subsequence of string2', () => {
    const str1 = 'axc';
    const str2 = 'ahbgdc';
    expect(isSubsequence(str1, str2)).toBe(false);
    expect(isSubsequence2(str1, str2)).toBe(false);
  });

  test('returns true if string1 empty, but string 2 is not', () => {
    const str1 = '';
    const str2 = 'ahbgdc';
    expect(isSubsequence(str1, str2)).toBe(true);
    expect(isSubsequence2(str1, str2)).toBe(true);
  });
});
