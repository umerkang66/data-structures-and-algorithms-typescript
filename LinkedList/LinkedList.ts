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
        // IF INDEX IS MORE THAN LENGTH THAN ADD THE VALUE TO THE END OF THE LINKED LIST
        if (index >= this.length) return this.append(value);
        // IF INDEX IS 0 THEN ADD IT TO THE START OF THE LINKED LIST
        if (index === 0) return this.prepend(value);

        // DEALING WITH THE REMAINING CONDITIONS
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
        // IF INDEX IS MORE THAN LENGTH THEN SIMPLY RETURN
        if (index >= this.length) return this;

        // IF INDEX IS ZERO THEN REMOVE THE FIRST ELEMENT
        if (index === 0) {
            if (!this.head) return this;
            const nextPointer = this.head.next;
            this.head = nextPointer;
            this.length--;

            return this;
        }

        // DEALING WITH THE REMAINING CONDITIONS
        const previousPointer = this.traverseToIndex(index - 1);
        if (!previousPointer) return this; // CHECK
        const currentNode = previousPointer.next;
        if (!currentNode) return this; // CHECK
        const nextPointer = currentNode.next;

        // REMOVING
        previousPointer.next = nextPointer;
        this.length--;

        // SETTING THE LAST ELEMENT TO THE TAIL
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

export default LinkedList;
