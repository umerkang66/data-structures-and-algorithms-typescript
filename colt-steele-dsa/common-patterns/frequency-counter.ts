// This pattern uses object or sets to collect values / frequencies of values.

// check if one array is the actual squared array of other, array can also contains duplicate
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

// if characters of second string are present in first string but in different order, they are anagrams of each other
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

export function containsDuplicate(arr: number[]): boolean {
  interface DuplicateHash {
    [key: number]: number;
  }
  const duplicateHash: DuplicateHash = {};

  for (let i = 0; i < arr.length; i++) {
    if (duplicateHash[arr[i]]) {
      // if it already exists in the hash, increase the counter
      duplicateHash[arr[i]] += 1;
    } else {
      // otherwise add the current element in the hash, with the counter of 1
      duplicateHash[arr[i]] = 1;
    }
  }

  for (const key in duplicateHash) {
    if (duplicateHash[key] > 1) {
      return true;
    }
  }

  return false;
}
