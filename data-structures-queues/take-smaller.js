/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return;
  const top = queue.dequeue();
  if (queue.peek() === undefined) {
    return top;
  } else if (top < queue.peek()) {
    const second = queue.dequeue();
    queue.enqueue(second);
    return top;
  } else if (top === queue.peek()) {
    const second = queue.dequeue();
    queue.enqueue(second);
    return top;
  } else if (top > queue.peek()) {
    const second = queue.peek();
    queue.dequeue();
    queue.enqueue(top);
    return second;
  }
}
