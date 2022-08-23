// point two pointers at different position in iterable.

export function sumZeroInSortedArr(arr: number[]): number[] {
  // array is sorted
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  // don't run the loop on the same number
  while (pointer1 < pointer2) {
    const sum = arr[pointer1] + arr[pointer2];
    if (sum > 0) {
      // there might be the another number of side side of arr, that matches the pointer1 in the left, to turn it into zero, so decrease the right number pointer
      pointer2--;
    } else if (sum < 0) {
      // there is not another number on the right side for matching the, so increase the left number pointer
      pointer1++;
    } else {
      // sum===0
      return [pointer1, pointer2];
    }
  }
  return [];
}

// array that is provided is SORTED
export function countUnique(arr: number[]): number {
  if (!arr.length) {
    return 0;
  }
  // expects a sorted array
  // pointer 1 will collect the unique elements at the first
  let pointer1 = 0;
  // pointer will go further, and check if it is equal to the first pointer
  let pointer2 = pointer1 + 1;
  while (pointer2 < arr.length) {
    if (arr[pointer1] !== arr[pointer2]) {
      // once we find the another unique value, move the first pointer up and, add that unique value there
      pointer1++;
      arr[pointer1] = arr[pointer2];
    } else {
      pointer2++;
    }
  }
  // all the unique values will be at the start of the array, til the pointer1, pointer1 is zero based.
  return pointer1 + 1;
}
