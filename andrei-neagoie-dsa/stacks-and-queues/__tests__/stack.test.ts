import { StackArray, StackLinkedList } from '../stack';

describe('Array stack', () => {
  test('can return null, if stack is empty', () => {
    const stack = new StackArray<number>();
    expect(stack.length).toBe(0);
    expect(stack.peek()).toBeNull();
    expect(stack.pop()).toBeNull();
  });

  test('can correctly push, and pop items in stack', () => {
    const stack = new StackArray<number>();
    stack.push(1).push(2).push(3);

    expect(stack.length).toBe(3);
    expect(stack.peek()).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
  });
});

describe('Linked list stack', () => {
  test('can return null, if stack is empty', () => {
    const stack = new StackLinkedList<number>();
    expect(stack.length).toBe(0);
    expect(stack.peek()).toBeNull();
    expect(stack.pop()).toBeNull();
  });

  test('can correctly push, and pop items in stack', () => {
    const stack = new StackLinkedList<number>();
    stack.push(1).push(2).push(3);

    expect(stack.length).toBe(3);
    expect(stack.peek()?.value).toBe(3);
    expect(stack.pop()?.value).toBe(3);
    expect(stack.pop()?.value).toBe(2);
    expect(stack.pop()?.value).toBe(1);
    expect(stack.pop()).toBeNull();
  });
});
