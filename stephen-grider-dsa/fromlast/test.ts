import { fromLast, fromLast2 } from './index';
import { LinkedList as List } from './linked-list';

test('fromLast is a function', () => {
  expect(typeof fromLast).toEqual('function');
});

test('fromLast returns the node n elements from the end', () => {
  const l = new List<string>();

  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');
  l.insertLast('d');
  l.insertLast('e');

  expect(fromLast<string>(l, 3)?.data).toEqual('b');
  expect(fromLast2<string>(l, 3)?.data).toEqual('b');
});
