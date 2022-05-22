import { Queue } from './queue';

// combine two weaves in altering form, and returns the new queue
export function weave<T, K>(sourceOne: Queue<T>, sourceTwo: Queue<K>) {
  const newQueue = new Queue<T | K>();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      const sourceOneData = sourceOne.remove();

      if (sourceOneData) newQueue.add(sourceOneData);
    }

    if (sourceTwo.peek()) {
      const sourceTwoData = sourceTwo.remove();

      if (sourceTwoData) newQueue.add(sourceTwoData);
    }
  }

  return newQueue;
}
