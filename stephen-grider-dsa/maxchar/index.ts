export function maxChar(str: string): string {
  interface CharMap {
    [key: string]: number;
  }

  const charMap: CharMap = {};

  for (const char of str) {
    if (!charMap[char]) charMap[char] = 1;
    else charMap[char] += 1;
  }

  let max = 0;
  let maxOccurChar = '';

  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxOccurChar = char;
    }
  }

  return maxOccurChar;
}
