import { bubbleSort } from '../bubble-sort';
import { insertionSort } from '../insertion-sort';
import { mergeSort } from '../merge-sort';

it('sorts the array using bubble sort', () => {
  const nums = [7, 2, 12, 8, 16, 9];
  bubbleSort(nums);
  expect(nums).toEqual([2, 7, 8, 9, 12, 16]);
});

it('sorts the array using insertion sort', () => {
  const nums = [7, 2, 12, 8, 16, 9];
  insertionSort(nums);
  expect(nums).toEqual([2, 7, 8, 9, 12, 16]);
});

it('sorts the array using merge sort', () => {
  const nums = [7, 2, 12, 8, 16, 9];
  mergeSort(nums, 0, nums.length - 1);
  expect(nums).toEqual([2, 7, 8, 9, 12, 16]);
});
