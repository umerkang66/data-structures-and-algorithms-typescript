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
