// what are the number of nodes at each level
import { Node } from './node';

// when we want to find width, use bfs
export function levelWidth<T>(root: Node<T>): number[] {
  const children: (Node<T> | null)[] = [root, null];
  const maxLevels = [0];

  while (children.length > 1) {
    const firstChild = children.shift();

    if (firstChild) {
      children.push(...firstChild.children);
      maxLevels[maxLevels.length - 1] += 1;
    } else if (firstChild === null) {
      children.push(firstChild); // null
      maxLevels.push(0);
    }
  }

  return maxLevels;
}
