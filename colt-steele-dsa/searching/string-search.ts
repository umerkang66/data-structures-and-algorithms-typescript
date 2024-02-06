export function stringSearch(str: string, target: string): number {
  for (let strPointer = 0; strPointer < str.length; strPointer++) {
    let tempStrPointer = strPointer;

    if (str[tempStrPointer] === target[0]) {
      // one is already found here in above line
      let foundCounter = 1;

      for (let i = 1; i < target.length; i++) {
        tempStrPointer++;

        if (str[tempStrPointer] !== target[i]) {
          break;
        } else {
          foundCounter++;
        }
      }

      if (foundCounter === target.length) {
        return strPointer;
      }
    }
  }

  return -1;
}
