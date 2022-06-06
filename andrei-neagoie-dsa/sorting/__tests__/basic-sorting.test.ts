import { bubbleSort } from '../bubble-sort';
import { selectionSort } from '../selection-sort';
import { insertionSort } from '../insertion-sort';

describe('Bubble Sort', () => {
  test('can sort properly with more than one items', () => {
    let nums = [3, 2, 9, 4, 10, 1];
    bubbleSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 9, 10]);

    nums = [3, 2, 9, 4, 10, 1];
    bubbleSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 9, 10]);
  });

  test('can sort properly an empty array', () => {
    let nums: number[] = [];
    bubbleSort(nums);
    expect(nums).toEqual([]);
  });

  test('can sort properly if array has one item', () => {
    let nums: number[] = [3];
    bubbleSort(nums);
    expect(nums).toEqual([3]);
  });
});

describe('Selection Sort', () => {
  test('can sort properly with more than one items', () => {
    let nums = [3, 2, 9, 4, 10, 1];
    selectionSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 9, 10]);

    nums = [3, 2, 9, 4, 10, 1];
    selectionSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 9, 10]);
  });

  test('can sort properly an empty array', () => {
    let nums: number[] = [];
    selectionSort(nums);
    expect(nums).toEqual([]);
  });

  test('can sort properly if array has one item', () => {
    let nums: number[] = [3];
    selectionSort(nums);
    expect(nums).toEqual([3]);
  });
});

describe('Insertion Sort', () => {
  test('can sort properly with more than one items', () => {
    let nums = [3, 2, 9, 4, 10, 1];
    insertionSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 9, 10]);

    nums = [3, 2, 9, 4, 10, 1];
    insertionSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 9, 10]);
  });

  test('can sort properly an empty array', () => {
    let nums: number[] = [];
    insertionSort(nums);
    expect(nums).toEqual([]);
  });

  test('can sort properly if array has one item', () => {
    let nums: number[] = [3];
    insertionSort(nums);
    expect(nums).toEqual([3]);
  });
});
