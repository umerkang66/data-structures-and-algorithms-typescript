// Best Case O(n log(n)), Worst Case O(n^2) if pivot is smallest or largest element.
// Space complexity is O(log (n))

export function quickSort(
  nums: number[],
  start: number = 0,
  end: number = nums.length - 1
): void {
  if (start >= end) {
    return;
  }

  let pivot = end;
  let partitionIndex = getPartition(nums, end, start, end);

  quickSort(nums, start, partitionIndex - 1);
  quickSort(nums, partitionIndex + 1, end);
}

// find the partition index, and get the pivot at partitionIndex, left side to the partition index elements should be lower than pivot, and on the right side, elements should be higher
function getPartition(
  nums: number[],
  pivot: number,
  start: number,
  end: number
): number {
  let partitionIndex = start;

  for (let i = start; i < end; i++) {
    // don't include the last element pivot (in current stage)
    if (nums[i] < nums[pivot]) {
      // if ith element is bigger, the i will move forward, but partitionIndex doesn't, at the end, bigger elements should be before the pivot
      swap(nums, i, partitionIndex);
      partitionIndex++;
    }
  }

  // now bigger elements are before pivot, so move the pivot to its right position, and move the bigger elements to the "right"
  swap(nums, pivot, partitionIndex);
  return partitionIndex;
}

function swap(arr: number[], first: number, second: number) {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}
