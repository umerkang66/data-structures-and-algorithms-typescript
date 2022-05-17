export function palindrome(str: string): boolean {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }

  return true;
}

// using reverse function
export function palindrome2(str: string): boolean {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// using every function
export function palindrome3(str: string): boolean {
  // this runs double comparisons, that is not necessary
  return str.split('').every((char, i, strArr) => {
    return char === strArr[strArr.length - 1 - i];
  });
}
