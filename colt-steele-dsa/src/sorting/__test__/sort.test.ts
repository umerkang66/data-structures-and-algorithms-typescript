import { bubbleSort } from '../bubble-sort';
import { insertionSort } from '../insertion-sort';
import { mergeSort } from '../merge-sort';
import { quickSort } from '../quick-sort';
import { radixSort } from '../radix-sort';

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

it('sorts the array using quick sort', () => {
  const nums = [7, 2, 12, 8, 16, 9];
  quickSort(nums, 0, nums.length - 1);
  expect(nums).toEqual([2, 7, 8, 9, 12, 16]);
});

it('sorts the array using radix sort', () => {
  const nums = [7, 2, 12, 8, 16, 9];
  radixSort(nums);
  expect(nums).toEqual([2, 7, 8, 9, 12, 16]);

  const nums2 = [1, 2343, 123, 2343434, 12, 15, 35];
  radixSort(nums2);
  expect(nums2).toEqual([1, 12, 15, 35, 123, 2343, 2343434]);
});
