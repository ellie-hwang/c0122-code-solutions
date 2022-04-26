/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  let i = 0;
  while (i < index) {
    const first = queue.dequeue();
    queue.enqueue(first);
    i++;
  }
  const value = queue.dequeue();
  return value;
}
