import { LinkedList } from '../linked-list';

test('can create empty memory space', () => {
  const linkedList = new LinkedList();

  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
  expect(linkedList.length).toBe(0);
});

test('can append new items in list', () => {
  const linkedList = new LinkedList<number>();
  linkedList.append(1, 2, 3, 4);
  linkedList.append(5);

  expect(linkedList.printList()).toEqual([1, 2, 3, 4, 5]);
  expect(linkedList.length).toBe(5);
  expect(linkedList.tail?.value).toBe(5);
  expect(linkedList.tail?.next).toBeNull();
  // check if the returned item is linked list itself through strict checking
  expect(linkedList.append(9)).toBe(linkedList);
});

test('can prepend new items in list', () => {
  const linkedList = new LinkedList<number>();
  linkedList.append(4, 5, 6, 7);
  linkedList.append(8);
  linkedList.prepend(3);
  linkedList.prepend(2, 1);

  expect(linkedList.printList()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(linkedList.length).toBe(8);
  expect(linkedList.tail?.value).toBe(8);
  expect(linkedList.tail?.next).toBeNull();
  // check if the returned item is linked list itself through strict checking
  expect(linkedList.append(9)).toBe(linkedList);
});

test('can insert items at right index', () => {
  const linkedList = new LinkedList<number>();

  linkedList.append(2, 3, 4, 5, 7);
  linkedList.append(8);
  linkedList.insert(0, 1);
  linkedList.insert(5, 6);
  expect(linkedList.printList()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);

  linkedList.insert(20, 9);
  expect(linkedList.printList()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(linkedList.length).toBe(9);
  expect(linkedList.insert(0, -1)).toBe(linkedList);

  // if list is empty, then insert it
  const emptyList = new LinkedList<number>();
  emptyList.insert(0, 1);
  expect(emptyList.printList()).toEqual([1]);
});

test('can remove at given index', () => {
  const linkedList = new LinkedList<number>();

  linkedList.append(2, 3, 4, 5, 7);
  linkedList.append(8, 9, 10, 11);

  linkedList.remove(0);
  linkedList.remove(3);
  linkedList.remove(linkedList.length - 1);
  linkedList.remove(20);

  expect(linkedList.printList()).toEqual([3, 4, 5, 8, 9]);
  expect(linkedList.remove(0)?.value).toBe(3);

  // return null if linked list is empty
  const emptyList = new LinkedList<number>();
  expect(emptyList.remove(0)).toBeNull();
});
