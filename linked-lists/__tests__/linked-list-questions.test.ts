import { LinkedList } from '../linked-list';
import { reverseLinkedList } from '../questions/reverse-a-linked-list';

describe('Reverse a Linked List', () => {
  test('returns null if list is empty', () => {
    const list = new LinkedList<number>();

    expect(reverseLinkedList<number>(list.head)).toBeNull();
  });

  test('can reverse a linked list with only one item', () => {
    const list = new LinkedList<number>();
    list.append(1);

    expect(reverseLinkedList<number>(list.head)?.value).toBe(1);
    expect(reverseLinkedList<number>(list.head)?.next).toBeNull();
  });

  test('can reverse a linked list with many items', () => {
    const list = new LinkedList<number>();
    list.append(1, 2, 3, 4);

    const head = reverseLinkedList<number>(list.head);

    if (head && head.next && head.next.next && head.next.next.next) {
      expect(head.value).toBe(4);
      expect(head.next.value).toBe(3);
      expect(head.next.next.value).toBe(2);
      expect(head.next.next.next.value).toBe(1);
      expect(head.next.next.next.next).toBeNull();
    }
  });
});
