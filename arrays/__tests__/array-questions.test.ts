import { mergeSortedArrays } from '../questions/merge-sorted-arrays';
import { reverseStr } from '../questions/reverse-a-string';

test('can merge sorted arrays', () => {
  // merge-sorted-array.ts
  const sortedNums1 = [3, 5, 9, 10, 15];
  const sortedNums2 = [1, 4, 6, 12, 13, 18];
  const sortedNums = mergeSortedArrays(sortedNums1, sortedNums2);

  expect(sortedNums).toEqual([1, 3, 4, 5, 6, 9, 10, 12, 13, 15, 18]);
});

test('can reverse a string', () => {
  // reverse-a-string
  const str = 'abc d';
  const str2 = 'equal';
  expect(reverseStr(str)).toBe('d cba');
  expect(reverseStr(str2)).toBe('lauqe');
});
