export function reverseString(str: string, ans: string = ''): string {
  if (str.length === 0) {
    return ans;
  }
  return reverseString(str.slice(0, str.length - 1), ans + str[str.length - 1]);
}
