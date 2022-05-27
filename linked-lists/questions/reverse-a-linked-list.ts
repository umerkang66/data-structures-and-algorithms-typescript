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

  while (curr) {
    // in last don't need to update the next, because that will automatically be updated in next loop
    let next: LinkedListNode<T> | null = curr.next;

    // curr should point to the previous element
    curr.next = prev;
    // update
    prev = curr;
    curr = next;
  }

  return prev;
}
