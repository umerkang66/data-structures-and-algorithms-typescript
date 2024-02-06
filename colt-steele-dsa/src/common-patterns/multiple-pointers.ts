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

/**
 * IsSubsequence - Returns true if it is or false if it is not.

 * Link: https://leetcode.com/problems/is-subsequence/
 */
export function isSubsequence(str1: string, str2: string): boolean {
  if (!str1.length) return true;

  let firstStrPointer = 0;
  let secondStrPointer = 0;
  let answer = false;

  while (firstStrPointer < str1.length && secondStrPointer < str2.length) {
    if (str1[firstStrPointer] === str2[secondStrPointer]) {
      answer = true;
      // if current char is equal, move the both pointers
      firstStrPointer++;
      secondStrPointer++;
    } else {
      if (firstStrPointer < str1.length) {
        // firstString might have been completed, so if it is completed, not change the previous answer, otherwise set the answer to "false"
        answer = false;
      }
      // if current char is not equal, move only the second pointer, because current char of first string might exist in the second string in later iterations
      secondStrPointer++;
    }
  }

  if (firstStrPointer < str1.length) {
    return false;
  }
  return answer;
}

export function isSubsequence2(str1: string, str2: string): boolean {
  if (str1.length > str2.length) {
    return false;
  }
  let str1Counter = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1[str1Counter] === str2[i]) {
      str1Counter++;
    }
  }
  // check if string1 counter have moved to the end of string 1, otherwise some elements in string1 are left
  return str1Counter === str1.length;
}
