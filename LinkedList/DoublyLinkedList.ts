import DoublyNode from './DoublyNode';

class DoublyLinkedList<T> {
  private head: DoublyNode<T> | null;
  private tail: DoublyNode<T> | null;
  private length: number = 0;

  constructor(value: T) {
    const newNode = new DoublyNode(value);
    this.head = newNode;
    this.tail = this.head;

    this.length++;
  }

  public getLength(): number {
    return this.length;
  }

  public getHead(): DoublyNode<T> | null {
    return this.head;
  }

  public getTail(): DoublyNode<T> | null {
    return this.tail;
  }

  public printList(): T[] {
    const results: T[] = [];
    let currentNode = this.head;
    while (currentNode) {
      results.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return results;
  }

  public append(value: T, ...otherValues: T[]): DoublyLinkedList<T> {
    const newNode = new DoublyNode(value);
    if (!this.tail) return this;

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;

    if (otherValues.length) {
      for (const value of otherValues) {
        const newNode = new DoublyNode(value);
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
      }
    }

    return this;
  }

  public prepend(value: T, ...otherValues: T[]): DoublyLinkedList<T> {
    const newNode = new DoublyNode<T>(value);
    if (!this.head) return this;

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;

    if (otherValues.length) {
      for (const value of otherValues) {
        const newNode = new DoublyNode<T>(value);

        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
      }
    }

    return this;
  }

  public insert(index: number, value: T): DoublyLinkedList<T> {
    // IF THE INDEX IS MORE THAN THE LENGTH OF THE LINKED LIST, THEN ADD TO THE END OF THE LINKED LIST
    if (index >= this.length) return this.append(value);

    // IF INDEX IS ZERO THEN ADD TO THE FIRST OF ARRAY
    if (index === 0) return this.prepend(value);

    // DEALING WITH REMAINING CASES
    const newNode = new DoublyNode(value);
    const previousNode = this.traverseToIndex(index - 1);
    if (!previousNode) return this;
    const nextNode = previousNode.next;

    // INSERTING
    previousNode.next = newNode;
    newNode.previous = previousNode;
    newNode.next = nextNode;
    newNode.previous = newNode;
    this.length++;

    return this;
  }

  public remove(index: number): DoublyLinkedList<T> {
    // IF INDEX IS MORE THAN OR EQUAL TO LENGTH THEN RETURN
    if (index >= this.length) return this;

    // IF INDEX IS ZERO REMOVE THE FIRST ELEMENT IN LINKED LIST
    if (index === 0) {
      const currentNode = this.head;
      if (!currentNode) return this;
      const nextPointer = currentNode.next;

      if (!nextPointer) return this;
      nextPointer.previous = null;
      this.head = nextPointer;
      this.length--;

      return this;
    }

    // IF REMOVING THE LAST ELEMENT
    if (index === this.length - 1) {
      const currentNode = this.tail;
      const previousPointer = currentNode?.previous;
      if (!previousPointer) return this;

      previousPointer.next = null;
      this.tail = previousPointer;
      this.length--;

      return this;
    }

    // DEALING WITH THE REMAINING CASES
    const previousPointer = this.traverseToIndex(index - 1);
    if (!previousPointer) return this;

    const nextPointer = previousPointer.next?.next;
    if (!nextPointer) return this;

    // REMOVING
    previousPointer.next = nextPointer;
    nextPointer.previous = previousPointer;
    this.length--;

    return this;
  }

  reverse(): DoublyLinkedList<T> {
    let pointer1 = this.head;
    if (!pointer1) return this;

    this.tail = pointer1;
    let pointer2 = pointer1.next;

    pointer1.next = null;
    pointer1.previous = pointer2;

    while (pointer2 !== null) {
      pointer2.previous = pointer2.next;
      pointer2.next = pointer1;

      pointer1 = pointer2;
      pointer2 = pointer2.previous;
    }

    this.head = pointer1;
    return this;
  }

  public traverseToIndex(index: number): DoublyNode<T> | null {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      if (!currentNode) return null;
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

export default DoublyLinkedList;
