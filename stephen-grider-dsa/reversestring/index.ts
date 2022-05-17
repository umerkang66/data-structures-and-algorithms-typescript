// make the name "reverse" which function we want to test
export function reverse(str: string): string {
  let reversedStr = '';
  for (const char of str) {
    reversedStr = char + reversedStr;
  }

  return reversedStr;
}

// Using reduce function
export function reverse2(str: string): string {
  return str.split('').reduce((acc, char) => char + acc, '');
}

export function reverse3(str: string): string {
  return str.split('').reverse().join('');
}
