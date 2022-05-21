export function vowels(str: string): number {
  const vowelsChars = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (const char of str.toLowerCase()) {
    if (vowelsChars.includes(char)) count++;
  }

  return count;
}
