// Best Case O(n log(n)), Worst Case O(n^2) if pivot is smallest or largest element.
// Space complexity is O(log (n))

export function quickSort(
  array: number[],
  left: number = 0,
  right: number = array.length - 1
) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }

  return array;
}

function partition(
  array: number[],
  pivot: number,
  left: number,
  right: number
) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(arr: number[], first: number, second: number) {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}
