export function fizzBuzz(n: number): (string | number)[] {
  const result: (string | number)[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('fizzbuzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else {
      result.push(i);
    }
  }

  return result;
}
