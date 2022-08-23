// This pattern uses object or sets to collect values / frequencies of values.

export function sameArrSquared(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  interface Hash {
    [key: number]: number;
  }
  const hash: Hash = {};
  for (const num of arr1) {
    const square = num ** 2;
    // set square as key, and counter as value
    if (hash[square]) hash[square] += 1;
    else hash[square] = 1;
  }
  for (const num of arr2) {
    if (hash[num] && hash[num] > 0) {
      hash[num] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

export function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  interface Hash {
    [key: string]: number;
  }
  function buildCharMap(str: string): Hash {
    const hash: Hash = {};
    for (const char of str) {
      if (hash[char]) hash[char] += 1;
      else hash[char] = 1;
    }
    return hash;
  }

  const hash1 = buildCharMap(str1);
  const hash2 = buildCharMap(str2);
  for (const char in hash1) {
    if (!hash2[char] || hash2[char] !== hash1[char]) {
      return false;
    }
  }
  return true;
}
