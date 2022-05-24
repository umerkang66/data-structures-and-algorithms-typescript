// return the node that is "n" nodes away from last node
import { LinkedList, Node } from './linked-list';

// by using double-loops
export function fromLast<T>(list: LinkedList<T>, n: number): Node<T> | null {
  let currentNode = list.head;
  const lastNode = list.getLast();

  while (currentNode) {
    let nodeInLoop: Node<T> | null = currentNode;
    for (let i = 1; i <= n; i++) {
      if (nodeInLoop) nodeInLoop = nodeInLoop.next;
    }

    if (nodeInLoop === lastNode) {
      return currentNode;
    }

    currentNode = currentNode.next;
  }

  return null;
}

// by using slow-fast pointers, this one is more efficient
export function fromLast2<T>(list: LinkedList<T>, n: number): Node<T> | null {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    if (fast) fast = fast.next;
    n--;
  }

  while (fast && fast.next) {
    if (slow) slow = slow.next;
    if (fast) fast = fast.next;
  }

  return slow;
}
