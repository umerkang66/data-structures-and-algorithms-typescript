export function pyramid(n: number): string {
  const totalCols = n * 2 - 1;
  let pyramid = '',
    colStart = n,
    colEnd = n;

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= totalCols; col++) {
      // "colStart", and "colEnd" limits: this is not necessary because loop will already end when if "colStart", or "colEnd" will become out of bounds of range
      if (colStart >= 1 && colEnd <= totalCols) {
        if (col >= colStart && col <= colEnd) pyramid += '#';
        else pyramid += ' ';
      }
    }

    colStart--;
    colEnd++;

    // Here this colStart and colEnd becomes out of the bound of range, but that doesn't affect the solution, because when this happens, the outer loop has already been ended

    if (row !== n) pyramid += '\n';
  }

  return pyramid;
}

export function pyramidRecursive(
  n: number,
  row: number = 1,
  col: number = 1,
  colStart: number = n,
  colEnd: number = n,
  ans: string = ''
): string {
  if (row > n) {
    return ans;
  }

  const totalCols = n * 2 - 1;

  if (col <= totalCols) {
    if (col >= colStart && col <= colEnd) {
      ans += '#';
    } else {
      ans += ' ';
    }

    return pyramidRecursive(n, row, col + 1, colStart, colEnd, ans);
  }

  if (row < n) ans += '\n';
  // change colStart and colEnd only when row is changed
  return pyramidRecursive(n, row + 1, 1, --colStart, ++colEnd, ans);
}

export function pyramidRecursive2(
  n: number,
  row: number = 1,
  col: number = 1,
  colStart: number = n,
  colEnd: number = n,
  ans: string = ''
) {
  if (row > n) {
    return;
  }

  const totalCols = n * 2 - 1;

  if (col <= totalCols) {
    if (col >= colStart && col <= colEnd) {
      ans += '#';
    } else {
      ans += ' ';
    }

    if (col === totalCols) {
      console.log(ans);
    }

    pyramidRecursive2(n, row, col + 1, colStart, colEnd, ans);

    // make sure to return it, otherwise multiple recursion calls will happen
    return;
  }

  // change colStart and colEnd only when row is changed
  pyramidRecursive2(n, row + 1, 1, --colStart, ++colEnd, '');
}

pyramidRecursive2(4);
