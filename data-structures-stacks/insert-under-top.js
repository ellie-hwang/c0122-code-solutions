/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return;
  }
  const stackValues = [];
  while (stack.peek() !== undefined) {
    stackValues.push(stack.pop());
  }
  stackValues.splice(1, 0, value);
  for (let i = stackValues.length - 1; i >= 0; i--) {
    stack.push(stackValues[i]);
  }
  return stack;
}
