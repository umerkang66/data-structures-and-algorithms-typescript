export function quickSort(nums: number[], start = 0, end = nums.length - 1) {
  if (start >= end) {
    return;
  }

  const pivot = getPivot(nums, start, end);

  quickSort(nums, start, pivot - 1);
  quickSort(nums, pivot + 1, end);
}

// select a pivot (in our case start element)
// move it to its right position
// and return the index where pivot is moved
function getPivot(nums: number[], start: number, end: number): number {
  const pivot = start;
  let swap_counter = start + 1;

  for (let i = start + 1; i <= end; i++) {
    if (nums[i] < nums[pivot]) {
      swap(nums, i, swap_counter);
      swap_counter++;
    }
  }

  // now swap the pivot with the last_swapped_element
  // that is swapped_counter - 1
  swap(nums, pivot, swap_counter - 1);
  return swap_counter - 1;
}

function swap(nums: number[], first: number, second: number) {
  const temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
}
