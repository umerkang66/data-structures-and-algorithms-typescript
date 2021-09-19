// VALID PALINDROME
const validPalindrome = (str: string): boolean => {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  let leftPointer = 0;
  let rightPointer = str.length - 1;

  while (leftPointer < rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) return false;
    leftPointer++;
    rightPointer--;
  }

  return true;
};

validPalindrome('A man, a plan, a canal: Panama');
validPalindrome('aabaa');
validPalindrome('aabbaa');
validPalindrome('a');

// ALMOST PALINDROME
// prettier-ignore
const validSubPalindrome = (str: string, left: number, right: number):boolean => {
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
};

const almostPalindrome = (str: string): boolean => {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  let leftPointer = 0;
  let rightPointer = str.length - 1;

  while (leftPointer < rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) {
      return (
        validSubPalindrome(str, leftPointer + 1, rightPointer) ||
        validSubPalindrome(str, leftPointer, rightPointer - 1)
      );
    }

    leftPointer++;
    rightPointer--;
  }

  return true;
};

console.log(almostPalindrome('raceacar'));
console.log(almostPalindrome('abccdba'));
console.log(almostPalindrome('abcdefdba'));
console.log(almostPalindrome('racecar'));
