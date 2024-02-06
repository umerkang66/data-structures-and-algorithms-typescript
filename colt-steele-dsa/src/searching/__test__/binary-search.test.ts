import { binarySearch } from '../binary-search';

it('returns the correct index of element', () => {
  const nums = [1, 7, 12, 98, 99, 120];
  const target = 99;

  const index = binarySearch(nums, target);

  expect(index).toBe(4);
});

it('return -1 if element is not found', () => {
  const nums = [1, 7, 12, 98, 99, 120];
  const target = 8;

  const index = binarySearch(nums, target);

  expect(index).toBe(-1);
});
