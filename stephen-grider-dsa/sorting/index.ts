export function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

export function bubbleSort2(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}

export function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    // selection sort thinks that this is the lowest value in array, prove it wrong
    let indexOfMin = i;

    // prove me wrong that other element at index other indexOfMin is lesser than indexOfMin element, if it is update the index of min
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) indexOfMin = j;
    }

    if (indexOfMin !== i) {
      const lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

export function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  return merge(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid, arr.length))
  );
}

export function merge(left: number[], right: number[]): number[] {
  const results: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift() as number);
    } else {
      results.push(right.shift() as number);
    }
  }

  // one of the left or right, should have elements inside them, so handle the case
  while (left.length) {
    results.push(left.shift() as number);
  }

  while (right.length) {
    results.push(right.shift() as number);
  }

  return results;
}
