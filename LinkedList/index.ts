import DoublyLinkedList from './DoublyLinkedList';

const doublyLinkedList = new DoublyLinkedList(5);
doublyLinkedList.append(6, 7, 8, 9);
doublyLinkedList.prepend(4, 3, 2, 1);

console.log(doublyLinkedList.printList());
console.log(doublyLinkedList);
