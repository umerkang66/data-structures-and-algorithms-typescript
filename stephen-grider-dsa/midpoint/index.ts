import { LinkedList, Node } from './linked-list';

// move fast by jumping one node, move slow by going through every node, when fast will reach end, slow will be at mid
export function midpoint<T>(list: LinkedList<T>): Node<T> | null {
  let mid: Node<T> | null = null;
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (true) {
    mid = slow;
    if (slow) slow = slow.next;

    // in case of odd numbers, fast can reach at the end of list, so "fast.next" will be null
    // in case of even numbers, fast can reach at the second last element of list, so "fast.next.next" will be null
    if (fast && (!fast.next || !fast.next?.next)) break;

    if (fast && fast.next) fast = fast.next.next;
  }

  return mid;
}

export function midpoint2<T>(list: LinkedList<T>): Node<T> | null {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast && fast.next && fast.next.next) {
    if (slow) slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
