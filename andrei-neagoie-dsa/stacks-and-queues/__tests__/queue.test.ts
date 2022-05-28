import { Queue } from '../queue';

test('can add and remove item from queue', () => {
  const queue = new Queue<number>();
  queue.enqueue(1).enqueue(2).enqueue(3);

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
