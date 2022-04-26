/* exported maxValue */

function maxValue(stack) {
  const stackValues = [];
  let max = -Infinity;
  if (stack.peek() === undefined) {
    return max;
  } else {
    while (stack.peek() !== undefined) {
      stackValues.push(stack.pop());
    }
    for (let i = 0; i < stackValues.length; i++) {
      if (stackValues[i] > max) {
        max = stackValues[i];
      }
    }
    return max;
  }
}
