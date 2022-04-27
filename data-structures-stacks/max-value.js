/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  if (stack.peek() === undefined) {
    return max;
  } else {
    while (stack.peek() !== undefined) {
      max = Math.max(max, stack.pop());
    }
    return max;
  }
}
