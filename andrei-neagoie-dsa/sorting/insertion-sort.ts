// For every index: put that element in the correct index of left-hand side
// Time Complexity: Worst Case (descending sorted) O(n^2) and the best Case is linear time complexity O(n)
// Space complexity is constant, we are not using an extra object or array

// WHY USE INSERTION SORT:
// 1) It is adaptive, steps get reduced, if the array is sorted or nearly sorted, due
// to breaking the loop
// 2) It is stable
// 3) Used for smaller values for N, works good when array is partially sorted, that's
// why it takes part in hybrid sorting algorithms (hybrid algorithms' means it combines merge sort or quick sort and combines some parts with insertion sort)

export function insertionSort(nums: number[]): void {
  // We have to decrease the "i" by 1 from the length - 1 (< length) because "j" is considered as i + 1, if "i" will point to the last element, "j" will become index out of bounds

  for (let i = 0; i < nums.length; i++) {
    // This loop will run from next element from i, and starts the loop to previous elements till it reaches 0 + 1, because it checks for j - 1 element in the array. It checks if the element is smaller than the previous element is just swap it till it reaches the start of the array.

    for (let j = i + 1; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        swap(nums, j, j - 1);
      } else {
        // if previous element is smaller, then all the previous elements before that should also be smaller, so just break the second loop
        break;
      }
    }
  }
}

function swap(nums: number[], first: number, second: number) {
  const temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
}
