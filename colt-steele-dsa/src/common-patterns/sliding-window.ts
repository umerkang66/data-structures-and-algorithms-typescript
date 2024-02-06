// which subarray of array has maximum sum
export function maxSubarraySumNaive(
  arr: number[],
  size: number
): number | null {
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
  let start = 0;
  let end = size;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;

  // first find the sum of initial startPointer till endPointer-1 (endPointer is size, and length is 0 based, then from 0 to 2 will be 3 elements) element (first subarray)
  for (let i = start; i < end; i++) {
    currentSum += arr[i];
  }
  maxSum = Math.max(maxSum, currentSum);

  // start this loop after the first subarray, we have already calculated the sum of first subarray, for to find the sum of next subarray, add the next element to it, and subtract the first element of the previous subarray, which is  not the part of current subarray
  while (end < arr.length) {
    // add the current endPointer element to the currentSum
    currentSum += arr[end];
    // remove the current startPointer element from the currentSum
    currentSum -= arr[start];
    // find the max at each iteration
    maxSum = Math.max(maxSum, currentSum);
    // move the sliding window
    start++;
    end++;
  }
  return maxSum;
}

export function longestSubstringWithMap(str: string): number {
  const seenHash = new Map<string, number>();
  // counter for starting elements, if reoccurring elements exists, remove this start element, and increment it.
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < str.length; end++) {
    seenHash.set(str[end], (seenHash.get(str[end]) || 0) + 1);

    // if the seenHash size is equal to current window size, all elements in current subarray window are unique characters
    if (seenHash.size === end - start + 1) {
      // length of current window can be found by "end-start+1"
      maxLength = Math.max(maxLength, end - start + 1);
    } else {
      // if current window size is not equal to the hashMap size, it means window has an element that appears twice
      seenHash.set(str[start], (seenHash.get(str[start]) as number) - 1);
      if (seenHash.get(str[start]) === 0) {
        // if it has become 0 delete it
        seenHash.delete(str[start]);
      }
      // we can decrease the window size by increasing the start, and remove the start element (if element count is more than 1 in map, we just decrease the count)
      start++;
    }
  }

  return maxLength;
}

export function longestSubstringWithObj(str: string): number {
  interface SeenHash {
    [key: string]: number;
  }
  const seenHash: SeenHash = {};
  // counter for starting elements, if reoccurring elements exists, remove this start element, and increment it.
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < str.length; end++) {
    seenHash[str[end]] = (seenHash[str[end]] || 0) + 1;

    // if the seenHash size is equal to current window size, all elements in current subarray window are unique characters
    if (Object.keys(seenHash).length === end - start + 1) {
      // length of current window can be found by "end-start+1"
      maxLength = Math.max(maxLength, end - start + 1);
    } else {
      // if current window size is not equal to the hashMap size, it means window has an element that appears twice
      seenHash[str[start]] = (seenHash[str[start]] as number) - 1;
      if (seenHash[str[start]] === 0) {
        // if it has become 0 delete it
        delete seenHash[str[start]];
      }
      // we can decrease the window size by increasing the start, and remove the start element (if element count is more than 1 in map, we just decrease the count)
      start++;
    }
  }

  return maxLength;
}
