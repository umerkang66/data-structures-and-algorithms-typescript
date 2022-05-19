// If two different strings have same characters, arranged in different order, they are anagrams of each other

// Solution 1
export function anagrams(stringA: string, stringB: string): boolean {
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  const mapA = buildCharMap(stringA);
  const mapB = buildCharMap(stringB);

  if (stringA.length !== stringB.length) return false;

  for (const char in mapA) {
    if (!mapB[char] || mapB[char] !== mapA[char]) return false;
  }

  return true;
}

function buildCharMap(str: string) {
  interface CharMap {
    [key: string]: number;
  }
  const charMap: CharMap = {};

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// Solution 2
export function anagrams2(stringA: string, stringB: string): boolean {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str: string): string {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
