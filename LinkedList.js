class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;

    this.length = 1;
  }

  getLength() {
    return this.length;
  }

  printList() {
    const result = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }

  append(value, ...otherValues) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    if (otherValues.length) {
      otherValues.forEach(value => {
        if (!this.tail) return;

        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
      });
    }

    return this;
  }

  prepend(value, ...otherValues) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    if (otherValues.length) {
      otherValues.forEach(value => {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
      });
    }

    return this;
  }

  insert(index, value) {
    // IF INDEX IS MORE THAN LENGTH THAN ADD THE VALUE TO THE END OF THE LINKED LIST
    if (index >= this.length) return this.append(value);

    // IF INDEX IS 0 THEN ADD IT TO THE START OF THE LINKED LIST
    if (index === 0) return this.prepend(value);

    // DEALING WITH THE REMAINING CONDITIONS
    const newNode = new Node(value);

    const previousPointer = this.traverseToIndex(index - 1);
    const nextPointer = previousPointer.next;

    previousPointer.next = newNode;
    newNode.next = nextPointer;
    this.length++;

    return this;
  }

  remove(index) {
    // IF INDEX IS MORE THAN LENGTH THEN SIMPLY RETURN
    if (index >= this.length) return this;

    // IF INDEX IS ZERO THEN REMOVE THE FIRST ELEMENT
    if (index === 0) {
      const nextPointer = this.head.next;
      this.head = nextPointer;
      this.length--;

      return this;
    }

    // DEALING WITH THE REMAINING CONDITIONS
    const previousPointer = this.traverseToIndex(index - 1);
    const currentNode = previousPointer.next;
    const nextPointer = currentNode.next;

    // REMOVING
    previousPointer.next = nextPointer;
    this.length--;

    // SETTING THE LAST ELEMENT TO THE TAIL
    const lastElement = this.traverseToIndex(this.length - 1);
    this.tail = lastElement;

    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  reverse() {
    let previousPointer = null;
    let current = this.head;
    let nextPointer;
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

const linkedList = new LinkedList(5);
