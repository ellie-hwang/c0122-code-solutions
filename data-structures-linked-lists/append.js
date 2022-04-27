/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const newValue = new LinkedList(value);
  let listCopy = list;
  while (listCopy.next != null) {
    listCopy = listCopy.next;
  }
  listCopy.next = newValue;
  return listCopy;
}
