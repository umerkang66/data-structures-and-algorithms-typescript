export function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const mergedArray = [];
  let firstIter = 0;
  let secondIter = 0;

  while (firstIter < arr1.length && secondIter < arr2.length) {
    if (arr1[firstIter] < arr2[secondIter]) {
      mergedArray.push(arr1[firstIter]);
      firstIter++;
    } else {
      mergedArray.push(arr2[secondIter]);
      secondIter++;
    }
  }

  // if arr1 is larger, there might be some element that are remaining in arr1
  while (firstIter < arr1.length) {
    mergedArray.push(arr1[firstIter]);
    firstIter++;
  }

  // if arr2 is larger, there might be some element that are remaining in arr2
  while (secondIter < arr2.length) {
    mergedArray.push(arr2[secondIter]);
    secondIter++;
  }

  return mergedArray;
}
