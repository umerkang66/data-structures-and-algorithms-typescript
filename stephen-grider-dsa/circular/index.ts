import { LinkedList } from './linked-list';

export function circular<T>(list: LinkedList<T>): boolean {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast && fast.next && fast.next.next) {
    if (slow) slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // strict checking of objects if they are same, same object in memory
      return true;
    }
  }

  return false;
}
