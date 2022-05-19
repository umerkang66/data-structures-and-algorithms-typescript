// capitalize the first letter of each word in the string.

export function capitalize2(str: string): string {
  const words: string[] = [];
  str.split(' ').forEach(word => {
    words.push(word[0].toUpperCase() + word.slice(1));
  });

  return words.join(' ');
}

export function capitalize(str: string): string {
  let capitalizeStr = '';

  for (let i = 0; i < str.length; i++) {
    if (i === 0) capitalizeStr += str[i].toUpperCase();
    else if (i > 0 && str[i - 1] === ' ') capitalizeStr += str[i].toUpperCase();
    else capitalizeStr += str[i];
  }

  return capitalizeStr;
}
