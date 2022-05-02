/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const prependValues = new LinkedList(value);
  prependValues.next = list;
  return prependValues;
}
