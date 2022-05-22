/*
--- Directions
Write a function that accepts an integer N
and returns a NxN spiral matrix.
--- Examples
matrix(2)
  [[1, 2],
  [4, 3]]
matrix(3)
  [[1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]]
matrix(4)
  [[1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]]
*/

export function matrix(n: number): number[][] {
  const results: number[][] = [];
  for (let i = 1; i <= n; i++) results.push([]);

  let counter = 1;
  let colStart = 0;
  let colEnd = n - 1;
  let rowStart = 0;
  let rowEnd = n - 1;

  while (colStart <= colEnd && rowStart <= rowEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      results[rowStart][i] = counter;
      counter++;
    }

    // We are done with the current first row, increment the row
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      results[i][colEnd] = counter;
      counter++;
    }

    // We are done with the current last col, decrement the col
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      results[rowEnd][i] = counter;
      counter++;
    }

    // We are done with the current last row, decrement the row
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      results[i][colStart] = counter;
      counter++;
    }

    // We are done with the current first col, increment the col
    colStart++;
  }

  return results;
}

export function matrix2(n: number): number[][] {
  const results: number[][] = [];
  for (let i = 1; i <= n; i++) {
    results.push([]);
  }

  let counter = 1,
    colStart = 0,
    colEnd = n - 1,
    rowStart = 0,
    rowEnd = n - 1;

  while (colStart <= colEnd && rowStart <= rowEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      results[rowStart][i] = counter;
      counter++;
    }

    // We are done with the current first row, increment the row
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      results[i][colEnd] = counter;
      counter++;
    }

    // We are done with the current last col, decrement the col
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      results[rowEnd][i] = counter;
      counter++;
    }

    // We are done with the current last row, decrement the row
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      results[i][colStart] = counter;
      counter++;
    }

    // We are done with the current first col, increment the col
    colStart++;
  }

  return results;
}
