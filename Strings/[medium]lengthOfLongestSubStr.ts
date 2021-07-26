const str = 'abccabb';

// CODING OUR BRUTE FORCE SOLUTION WITH (n^2) TIME COMPLEXITY, AND O(n) SPACE COMPLEXITY
const lengthOfLongestSubStrBruteForce = function (str: string): number {
  if (str.length <= 0) return str.length;
  let longest = 0;

  for (let i = 0; i < str.length; i++) {
    interface SeenChar {
      [key: string]: boolean;
    }

    let seenChar: SeenChar = {};
    let curLength = 0;

    for (let j = i; j < str.length; j++) {
      const curChar = str[j];
      if (!seenChar[curChar]) {
        curLength++;
        seenChar[curChar] = true;
        longest = Math.max(longest, curLength);
      } else break;
    }
  }

  return longest;
};

lengthOfLongestSubStrBruteForce(str);

// CODING OUT OPTIMAL SOLUTION WITH O(n) TIME COMPLEXITY, AND O(n) SPACE COMPLEXITY
const lengthOfLongestSubStr = (str: string): number => {
  if (str.length <= 1) return str.length;

  interface SeenChar {
    [key: string]: number;
  }

  const seenChar: SeenChar = {};
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    const curChar = str[right];
    if (seenChar[curChar] >= left) left = seenChar[curChar] + 1;
    seenChar[curChar] = right;

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubStr(str));
