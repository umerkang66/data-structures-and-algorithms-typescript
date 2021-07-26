const str1 = 'abc#d';
const str2 = 'abzz##d';

// CODING OUR BRUTE FORCE SOLUTION
const strBackspacedBruteForce = (str: string): string => {
  const strArr = str.split('');
  let strArrBackspaced: string[] = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== '#') strArrBackspaced.push(strArr[i]);
    else strArrBackspaced.pop();
  }

  return strArrBackspaced.join('');
};

const isTypedOutStringsEqualBruteForce = (
  str1: string,
  str2: string
): boolean => {
  const str1Backspaced = strBackspacedBruteForce(str1);
  const str2Backspaced = strBackspacedBruteForce(str2);

  if (str1Backspaced === str2Backspaced) return true;
  else return false;
};

isTypedOutStringsEqualBruteForce(str1, str2);

// EXPLANATION: We have written an if else block, in the if block we only deals with the case if there are hashes in strings and move the pointers accordingly, if there is 1 hashe the pointer will move 2 times, if there are 2 hashes the pointer will move 4 times. Then after the if block we deals with checking if the two strings are equal and we also move the normal pointers backwards without the influence of hashes
const isTypedOutStrings = (str1: string, str2: string): boolean => {
  let pointer1 = str1.length - 1;
  let pointer2 = str2.length - 1;

  while (pointer1 >= 0 || pointer2 >= 0) {
    if (str1[pointer1] === '#' || str2[pointer2] === '#') {
      if (str1[pointer1] === '#') {
        let backCount = 2;

        while (backCount > 0) {
          pointer1--;
          backCount--;

          if (str1[pointer1] === '#') backCount += 2;
        }
      }

      if (str2[pointer2] === '#') {
        let backCount = 2;

        while (backCount > 0) {
          pointer2--;
          backCount--;

          if (str2[pointer2] === '#') backCount += 2;
        }
      }
    }

    if (str1[pointer1] !== str2[pointer2]) return false;
    pointer1--;
    pointer2--;
  }

  return true;
};

isTypedOutStrings(str1, str2);
