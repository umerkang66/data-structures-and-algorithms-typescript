import Node from './SinglyNode';

class LinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number = 0;

  constructor(value: T) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;

    this.length++;
  }

  public getLength(): number {
    return this.length;
  }

  public getHead(): Node<T> | null {
    return this.head;
  }

  public getTail(): Node<T> | null {
    return this.tail;
  }

  public printList(): T[] {
    const result = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }

  public append(value: T, ...otherValues: T[]): LinkedList<T> {
    if (!this.tail) return this;

    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    if (otherValues.length) {
      for (const value of otherValues) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
      }
    }

    return this;
  }

  public prepend(value: T, ...otherValues: T[]): LinkedList<T> {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    if (otherValues.length) {
      for (const value of otherValues) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
      }
    }

    return this;
  }

  public insert(index: number, value: T): LinkedList<T> {
    // If index is more than length than add the value to the end of the linked list
    if (index >= this.length) return this.append(value);
    // If index is 0 then add it to the start of the linked list
    if (index === 0) return this.prepend(value);

    // Dealing with the remaining cases
    const newNode = new Node(value);
    const previousPointer = this.traverseToIndex(index - 1);
    if (!previousPointer) return this;
    const nextPointer = previousPointer.next;
    previousPointer.next = newNode;
    newNode.next = nextPointer;
    this.length++;

    return this;
  }

  public remove(index: number): LinkedList<T> {
    // If index is more than length then simply return
    if (index >= this.length) return this;

    // If index is 0 then remove the first element
    if (index === 0) {
      if (!this.head) return this;
      const nextPointer = this.head.next;
      this.head = nextPointer;
      this.length--;

      return this;
    }

    // Dealing with the remaining conditions
    const previousPointer = this.traverseToIndex(index - 1);
    if (!previousPointer) return this; // CHECK
    const currentNode = previousPointer.next;
    if (!currentNode) return this; // CHECK
    const nextPointer = currentNode.next;

    // Removing
    previousPointer.next = nextPointer;
    this.length--;

    // Setting the last element to the tail
    const lastElement = this.traverseToIndex(this.length - 1);
    this.tail = lastElement;

    return this;
  }

  public traverseToIndex(index: number): Node<T> | null {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      if (!currentNode) return null;
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  public reverse(): LinkedList<T> {
    let previousPointer: Node<T> | null = null;
    let current = this.head;
    let nextPointer: Node<T> | null;
    this.tail = current;

    while (current) {
      nextPointer = current.next;
      current.next = previousPointer;

      previousPointer = current;
      current = nextPointer;
    }

    this.head = previousPointer;
    return this;
  }
}

export const printList = (head: Node<number> | null): number[] => {
  const printResult = [];
  let currentNode = head;
  while (currentNode) {
    printResult.push(currentNode.value);
    currentNode = currentNode.next;
  }

  return printResult;
};

export default LinkedList;
