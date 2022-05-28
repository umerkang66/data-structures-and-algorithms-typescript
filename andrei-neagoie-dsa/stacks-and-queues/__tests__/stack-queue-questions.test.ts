import { QueueFromStack } from '../questions/queue-from-stack';

test('queue from stack', () => {
  const queue = new QueueFromStack<number>();
  queue.enqueue(1).enqueue(2).enqueue(3);

  expect(queue.peek()).toBe(1);
  expect(queue.length).toBe(3);
  expect(queue.dequeue()).toBe(1);
  expect(queue.length).toBe(2);
  expect(queue.dequeue()).toBe(2);
  expect(queue.length).toBe(1);
  expect(queue.dequeue()).toBe(3);
  expect(queue.length).toBe(0);
  expect(queue.dequeue()).toBeNull();
  expect(queue.length).toBe(0);
});
