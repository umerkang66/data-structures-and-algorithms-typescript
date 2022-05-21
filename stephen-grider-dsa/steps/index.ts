export function steps(n: number): string {
  let steps = '';

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      steps += '#';
    }
    if (row !== n) steps += '\n';
  }

  return steps;
}

export function stepsRecursive(
  n: number,
  row: number,
  col: number,
  ans: string
): string {
  if (row > n) return ans;

  if (col > row) {
    if (row < n) ans += '\n';
    // Reset the column to 1
    return stepsRecursive(n, row + 1, 1, ans);
  }

  ans += '#';
  return stepsRecursive(n, row, col + 1, ans);
}

// console.log the answer, not return it
export function stepsRecursive2(
  n: number,
  row: number = 0,
  ans: string = ''
): void {
  if (row === n) {
    return;
  }

  if (ans.length === n) {
    console.log(ans);
    stepsRecursive2(n, row + 1);
    return;
  }

  if (ans.length <= row) {
    ans += '#';
  } else {
    ans += ' ';
  }

  stepsRecursive2(n, row, ans);
}
