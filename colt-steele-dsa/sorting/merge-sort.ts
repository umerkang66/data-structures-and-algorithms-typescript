export function mergeSort(nums: number[], start: number, end: number) {
  if (start >= end) {
    return;
  }
  const mid = Math.trunc((start + end) / 2);
  // sort the left half of array
  mergeSort(nums, start, mid);
  // sort the right half of array
  mergeSort(nums, mid + 1, end);
  // merge the both arrays
  merge(nums, start, mid, end);
}

function merge(nums: number[], start: number, mid: number, end: number) {
  const result = new Array(end - start + 1);

  let i = start,
    j = mid + 1,
    k = 0;

  while (i <= mid && j <= end) {
    if (nums[i] < nums[j]) {
      result[k] = nums[i];
      i++;
    } else {
      result[k] = nums[j];
      j++;
    }
    k++;
  }

  while (i <= mid) {
    result[k] = nums[i];
    i++;
    k++;
  }

  while (j <= end) {
    result[k] = nums[j];
    j++;
    k++;
  }

  for (let i = 0; i < result.length; i++) {
    nums[i + start] = result[i];
  }
}
