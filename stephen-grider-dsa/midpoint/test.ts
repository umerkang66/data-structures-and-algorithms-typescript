import { midpoint, midpoint2 } from './index';
import { LinkedList } from './linked-list';

test('Midpoint is a function', () => {
  expect(typeof midpoint).toEqual('function');
});

describe('Midpoint returns the middle node of an odd numbered list', () => {
  test('when the list has 3 elements', () => {
    const l = new LinkedList<string>();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    expect(midpoint<string>(l)?.data).toEqual('b');
    expect(midpoint2<string>(l)?.data).toEqual('b');
  });

  test('when the list has 5 elements', () => {
    const l = new LinkedList<string>();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertLast('e');
    expect(midpoint<string>(l)?.data).toEqual('c');
    expect(midpoint2<string>(l)?.data).toEqual('c');
  });
});

describe('Midpoint returns the middle node of an even numbered list', () => {
  test('when the list has 2 elements', () => {
    const l = new LinkedList<string>();
    l.insertLast('a');
    l.insertLast('b');
    expect(midpoint<string>(l)?.data).toEqual('a');
    expect(midpoint2<string>(l)?.data).toEqual('a');
  });

  test('when the list has 4 elements', () => {
    const l = new LinkedList<string>();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    expect(midpoint<string>(l)?.data).toEqual('b');
    expect(midpoint2<string>(l)?.data).toEqual('b');
  });
});
