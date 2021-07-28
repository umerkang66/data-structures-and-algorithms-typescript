import LinkedList from './LinkedList';
import SinglyNode from './SinglyNode';

const printList = (head: SinglyNode<number> | null): number[] => {
    const printResult = [];
    let currentNode = head;
    while (currentNode) {
        printResult.push(currentNode.value);
        currentNode = currentNode.next;
    }

    return printResult;
};

const traverseToIndex = (
    head: SinglyNode<number> | null,
    index: number
): SinglyNode<number> | null => {
    let counter = 1;
    let currentNode = head;
    while (counter !== index) {
        if (currentNode) currentNode = currentNode.next;
        counter++;
    }

    return currentNode;
};

const traverseToLastIndex = (
    head: SinglyNode<number> | null,
    linkedListLength: number
): SinglyNode<number> | null => {
    let currentNode = head;
    let counter = 0;

    while (counter !== linkedListLength - 1) {
        if (currentNode) currentNode = currentNode.next;
        counter++;
    }

    return currentNode;
};

const findLinkedLength = (head: SinglyNode<number> | null): number => {
    let counter = 0;
    let currentNode = head;
    while (currentNode) {
        counter++;
        currentNode = currentNode.next;
    }

    return counter;
};

const reverseAtIndex = (
    head: SinglyNode<number> | null,
    M: number,
    N: number
): SinglyNode<number> | null => {
    let previousPointer = null;
    let currentPointer = traverseToIndex(head, M);
    let nextPointer;

    let startingIndex = M;
    while (startingIndex !== N + 1) {
        if (!currentPointer) return head;
        nextPointer = currentPointer.next;
        currentPointer.next = previousPointer;

        previousPointer = currentPointer;
        currentPointer = nextPointer;

        startingIndex++;
    }

    return previousPointer;
};

const reverseAtMandN = (
    head: SinglyNode<number> | null,
    M: number,
    N: number
): SinglyNode<number> | null => {
    // FINDING LENGTH OF ORIGINAL HEAD
    const lengthOfOriginalHead = findLinkedLength(head);
    // DEALING WITH CASE IF SECOND NUMBER N IS MORE THAN LENGTH OF LINKED LIST OR FIRST NUMBER M IS LESS THAN 0
    if (M < 1 || N > lengthOfOriginalHead) return head;

    const afterReverseNode = traverseToIndex(head, N + 1);
    // DEALING WITH THE CASE IF M IS 1: THAT MEANS WE DON'T HAVE TO JOIN AT THE LEFT
    if (M === 1) {
        const reversedRequestedList = reverseAtIndex(head, M, N);
        console.log(reversedRequestedList);

        const lengthPreviousReverseNode = findLinkedLength(
            reversedRequestedList
        );

        const previousPointerMovedToLast = traverseToLastIndex(
            reversedRequestedList,
            lengthPreviousReverseNode
        );

        if (previousPointerMovedToLast)
            previousPointerMovedToLast.next = afterReverseNode;

        // RETURNING REVERSED HEAD
        return (head = reversedRequestedList);
    }

    // GETTING THE BEFORE AND AFTER VALUES OF LINKED LIST BEFORE
    const previousReverseNode = traverseToIndex(head, M - 1);

    // REVERSING THE REQUESTED NODES
    const reversedRequestedList = reverseAtIndex(head, M, N);

    // INSERTING IN THE ORIGINAL HEAD
    // Inserting on the left side of original node
    if (previousReverseNode) previousReverseNode.next = reversedRequestedList;

    // Inserting on the right side of original node
    const lengthPreviousReverseNode = findLinkedLength(previousReverseNode);

    const previousPointerMovedToLast = traverseToLastIndex(
        previousReverseNode,
        lengthPreviousReverseNode
    );

    if (previousPointerMovedToLast)
        previousPointerMovedToLast.next = afterReverseNode;

    // RETURNING REVERSED HEAD
    return head;
};

const linkedList = new LinkedList(1);
linkedList.append(2, 3, 4, 5);

console.log(printList(linkedList.getHead()));
const reversedHead = reverseAtMandN(linkedList.getHead(), 1, 4);
console.log(printList(reversedHead));
