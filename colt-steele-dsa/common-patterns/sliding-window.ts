// which subarray of array has maximum sum
export function maxSubarraySum(arr: number[], size: number): number | null {
  if (!arr.length || size > arr.length) {
    return null;
  }
  // start the pointers from start of array to, maximum subArray size - 1 (array is zero-based)
  let start = 0;
  let end = size - 1;
  let maxSum = Number.MIN_SAFE_INTEGER;
  // end will be "$size" apart than start, so end should be less than length
  while (end < arr.length) {
    let tempSum = 0;
    for (let i = start; i <= end; i++) {
      // maximum size of the subarray is from start-th element till end-th element
      tempSum += arr[i];
    }
    maxSum = Math.max(maxSum, tempSum);
    // move the pointers by one index
    start += 1;
    end += 1;
  }
  return maxSum;
}

export function maxSubarraySumSlidingWindow(
  arr: number[],
  size: number
): number | null {
  if (!arr.length || size > arr.length) {
    return null;
  }
  let startPointer = 0;
  let endPointer = size;
  let currentSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  // first find the sum of initial startPointer till endPointer-1 (endPointer is size, and length is 0 based, then from 0 to 2 will be 3 elements) element (first subarray)
  for (let i = startPointer; i < endPointer; i++) {
    currentSum += arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  // start this loop after the first subarray, we have already calculated the sum of first subarray, for to find the sum of next subarray, add the next element to it, and subtract the first element of the previous subarray, which is  not the part of current subarray
  while (endPointer < arr.length) {
    // add the current endPointer element to the currentSum
    currentSum += arr[endPointer];
    // remove the current startPointer element from the currentSum
    currentSum -= arr[startPointer];
    // find the max at each iteration
    maxSum = Math.max(maxSum, currentSum);
    // move the sliding window
    startPointer++;
    endPointer++;
  }
  return maxSum;
}
