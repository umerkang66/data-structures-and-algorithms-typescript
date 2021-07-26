import LinkedList from './LinkedList';
import DoublyLinkedList from './DoublyLinkedList';

const linkedList = new LinkedList<number>(5);
const doublyLinkedList = new DoublyLinkedList<number>(5);

console.log(linkedList, doublyLinkedList);
