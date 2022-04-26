/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const firstValue = queue.dequeue();
  queue.enqueue(firstValue);
  return queue;
}
