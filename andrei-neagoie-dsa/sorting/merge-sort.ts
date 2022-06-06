// MERGE SORT IS STABLE, Time complexity is O(n log n), and space-complexity is O(n)
// This function creates a new array
export function mergeSort(nums: number[]): number[] {
  if (nums.length === 1 || nums.length === 0) {
    return nums;
  }

  const mid = Math.floor(nums.length / 2);
  return merge(
    mergeSort(nums.slice(0, mid)),
    mergeSort(nums.slice(mid, nums.length))
  );
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift() as number);
    } else {
      result.push(right.shift() as number);
    }
  }

  while (left.length) {
    result.push(left.shift() as number);
  }
  while (right.length) {
    result.push(right.shift() as number);
  }

  return result;
}

export function mergeSortInPlace(
  nums: number[],
  start: number = 0,
  end: number = nums.length
): void {
  // at leasts there should be two elements in array when it should be passed into mergeInPlace
  if (end - start === 1 || !nums.length) {
    return;
  }

  // mid should be first element from the second half of array
  const mid = start + Math.floor((end - start) / 2);
  mergeSortInPlace(nums, start, mid);
  mergeSortInPlace(nums, mid, end);

  mergeInPlace(nums, start, mid, end);
}

function mergeInPlace(
  nums: number[],
  start: number,
  mid: number,
  end: number
): void {
  const result = new Array<number>(end - start);
  let pointer1 = start;
  let pointer2 = mid;
  // for the whole result array pointer
  let k = 0;

  while (pointer1 < mid && pointer2 < end) {
    if (nums[pointer1] < nums[pointer2]) {
      result[k] = nums[pointer1];
      pointer1++;
    } else {
      result[k] = nums[pointer2];
      pointer2++;
    }

    k++;
  }

  while (pointer1 < mid) {
    result[k] = nums[pointer1];
    pointer1++;
    k++;
  }

  while (pointer2 < end) {
    result[k] = nums[pointer2];
    pointer2++;
    k++;
  }

  for (let i = 0; i < result.length; i++) {
    nums[start + i] = result[i];
  }
}
