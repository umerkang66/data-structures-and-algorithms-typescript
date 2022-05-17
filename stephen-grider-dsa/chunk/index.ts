export function chunk(array: number[], size: number): number[][] {
  const chunked: number[][] = [];

  for (let i = 0; i < array.length; i++) {
    const lastChunk: number[] | undefined = chunked[chunked.length - 1];

    // We have a chunk, but it not full
    // Before "and" check is for if there are not any chunks in chunked array
    if (lastChunk && lastChunk.length < size) {
      lastChunk.push(array[i]);
    } else {
      // If there is no chunk, or previous chunk is full of size, add new chunk with current element in it
      chunked.push([array[i]]);
    }
  }

  return chunked;
}

export function chunk2(array: number[], size: number): number[][] {
  const chunked: number[][] = [];
  let start = 0;

  // Assuming if in slice method, index out of bounds gives an error (in reality, that doesn't happen)
  while (start < array.length) {
    if (start <= array.length - size) {
      chunked.push(array.slice(start, start + size));

      start += size;
    } else {
      chunked.push(array.slice(start, array.length));

      start += array.length - start;
    }
  }

  return chunked;
}

export function chunk3(array: number[], size: number): number[][] {
  const chunked: number[][] = [];
  let start = 0;

  while (start < array.length) {
    // If the end if out of bounds, this will get the last chunk to the end
    chunked.push(array.slice(start, start + size));
    start += size;
  }

  return chunked;
}
