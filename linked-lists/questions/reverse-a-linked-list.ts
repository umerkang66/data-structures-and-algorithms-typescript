import { LinkedListNode } from '../linked-list';

export function reverseLinkedList<T>(
  head: LinkedListNode<T> | null
): LinkedListNode<T> | null {
  if (!head) {
    return null;
  }
  if (head && !head.next) {
    return head;
  }

  let prev: LinkedListNode<T> | null = null;
  let curr: LinkedListNode<T> | null = head;
  let next = curr && curr.next;

  while (curr) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = curr && curr.next;
  }

  return prev;
}
