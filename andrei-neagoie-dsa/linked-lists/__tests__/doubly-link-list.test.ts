import { DoublyLinkedList } from '../doubly-linked-list';

describe('Appending in doubly list', () => {
  test('can create empty memory, on initializing list', () => {
    const list = new DoublyLinkedList();

    if (list.head) {
      expect(list.head.value).toBeNull();
      expect(list.head.next).toBeNull();
      expect(list.head.previous).toBeNull();
    }
  });

  test('can append items, and can point to next and previous', () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);

    if (
      list.head &&
      list.head.next &&
      list.head.next.previous &&
      list.tail &&
      list.tail.previous
    ) {
      expect(list.head.value).toBe(1);
      expect(list.head.previous).toBeNull();
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.previous.value).toBe(1);
      expect(list.tail.value).toBe(2);
      expect(list.tail.next).toBeNull();
      expect(list.tail.previous.value).toBe(1);
      expect(list.length).toBe(2);
    }
  });
});

describe('Prepend in doubly list', () => {
  test('it can prepend to doubly list, and can point to next and previous', () => {
    const list = new DoublyLinkedList();
    list.prepend(2);
    list.prepend(1);

    if (
      list.head &&
      list.head.next &&
      list.head.next.previous &&
      list.tail &&
      list.tail.previous
    ) {
      expect(list.head.value).toBe(1);
      expect(list.head.previous).toBeNull();
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.previous.value).toBe(1);
      expect(list.tail.value).toBe(2);
      expect(list.tail.next).toBeNull();
      expect(list.tail.previous.value).toBe(1);
      expect(list.length).toBe(2);
    }
  });
});

describe('Inserting in doubly list', () => {
  test('it can insert at index 0, and can point to the correct next and previous', () => {
    const list = new DoublyLinkedList();
    list.prepend(3);
    list.prepend(2);
    list.insert(0, 1);

    if (
      list.head &&
      list.head.next &&
      list.head.next.next &&
      list.head.next.previous &&
      list.head.next.next.previous &&
      list.tail &&
      list.tail.previous
    ) {
      expect(list.head.value).toBe(1);
      expect(list.head.previous).toBeNull();
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);

      expect(list.head.next.previous.value).toBe(1);
      expect(list.head.next.next.previous.value).toBe(2);

      expect(list.tail.value).toBe(3);
      expect(list.tail.next).toBeNull();
      expect(list.tail.previous.value).toBe(2);

      expect(list.length).toBe(3);
    }
  });

  test('it can insert at mid index, and can point to the correct next and previous', () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(3);
    list.append(4);
    list.insert(1, 2);

    if (
      list.head &&
      list.head.next &&
      list.head.next.next &&
      list.head.next.next.next &&
      list.head.next.previous &&
      list.head.next.next.previous &&
      list.head.next.next.next.previous &&
      list.tail &&
      list.tail.previous
    ) {
      expect(list.head.value).toBe(1);
      expect(list.head.previous).toBeNull();
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);
      expect(list.head.next.next.next.value).toBe(4);
      expect(list.head.next.next.next.next).toBeNull();

      expect(list.head.next.previous.value).toBe(1);
      expect(list.head.next.next.previous.value).toBe(2);
      expect(list.head.next.next.next.previous.value).toBe(3);

      expect(list.tail.value).toBe(4);
      expect(list.tail.next).toBeNull();
      expect(list.tail.previous.value).toBe(3);

      expect(list.length).toBe(4);
    }
  });

  test('it can insert at last index, and can point to the correct next and previous', () => {
    const list = new DoublyLinkedList();
    list.prepend(3);
    list.prepend(1);
    list.insert(1, 2);

    if (
      list.head &&
      list.head.next &&
      list.head.next.next &&
      list.head.next.previous &&
      list.head.next.next.previous &&
      list.tail &&
      list.tail.previous
    ) {
      expect(list.head.value).toBe(1);
      expect(list.head.previous).toBeNull();
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);

      expect(list.head.next.previous.value).toBe(1);
      expect(list.head.next.next.previous.value).toBe(2);

      expect(list.tail.value).toBe(3);
      expect(list.tail.next).toBeNull();
      expect(list.tail.previous.value).toBe(2);

      expect(list.length).toBe(3);
    }
  });

  test('it can insert at end of list, if index >= length, and can point to the correct next and previous', () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.insert(20, 3);

    if (
      list.head &&
      list.head.next &&
      list.head.next.next &&
      list.head.next.previous &&
      list.head.next.next.previous &&
      list.tail &&
      list.tail.previous
    ) {
      expect(list.head.value).toBe(1);
      expect(list.head.previous).toBeNull();
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);

      expect(list.head.next.previous.value).toBe(1);
      expect(list.head.next.next.previous.value).toBe(2);

      expect(list.tail.value).toBe(3);
      expect(list.tail.next).toBeNull();
      expect(list.tail.previous.value).toBe(2);

      expect(list.length).toBe(3);
    }
  });
});

describe('Remove items from doubly list', () => {
  test('it can remove at index 0, and can point to the correct next and previous', () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.remove(0);

    if (
      list.head &&
      list.head.next &&
      list.head.next.previous &&
      list.tail &&
      list.tail.previous
    ) {
      expect(list.head.value).toBe(2);
      expect(list.head.previous).toBeNull();
      expect(list.head.next.value).toBe(3);
      expect(list.head.next.next).toBeNull();

      expect(list.head.next.previous.value).toBe(2);

      expect(list.tail.value).toBe(3);
      expect(list.tail.next).toBeNull();
      expect(list.tail.previous.value).toBe(2);

      expect(list.length).toBe(2);
    }
  });

  test('it can remove at end index, and can point to the correct next and previous', () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.remove(list.length - 1);

    if (
      list.head &&
      list.head.next &&
      list.head.next.previous &&
      list.tail &&
      list.tail.previous
    ) {
      expect(list.head.value).toBe(1);
      expect(list.head.previous).toBeNull();
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next).toBeNull();

      expect(list.head.next.previous.value).toBe(1);

      expect(list.tail.value).toBe(2);
      expect(list.tail.next).toBeNull();
      expect(list.tail.previous.value).toBe(1);

      expect(list.length).toBe(2);
    }
  });

  test('it can remove if there is only one item in list, and can point to the correct next and previous', () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.remove(0);

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);
  });

  test('it can remove last item, if very large index is provided, and can point to the correct next and previous', () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.remove(11);

    if (
      list.head &&
      list.head.next &&
      list.head.next.previous &&
      list.tail &&
      list.tail.previous
    ) {
      expect(list.head.value).toBe(1);
      expect(list.head.previous).toBeNull();
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next).toBeNull();

      expect(list.head.next.previous.value).toBe(1);

      expect(list.tail.value).toBe(2);
      expect(list.tail.next).toBeNull();
      expect(list.tail.previous.value).toBe(1);

      expect(list.length).toBe(2);
    }
  });
});
