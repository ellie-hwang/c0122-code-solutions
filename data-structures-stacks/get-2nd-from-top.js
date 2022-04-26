/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const stackValues = [];
  while (stack.peek() !== undefined) {
    stackValues.push(stack.pop());
  }
  for (let i = stackValues.length - 1; i >= 0; i--) {
    stack.push(stackValues[i]);
  }
  if (stackValues.length <= 1) {
    return undefined;
  } else {
    return stackValues[1];
  }
}
