/* exported getTail */

function getTail(list) {
  let listCopy = list;
  let lastItem = listCopy.data;
  while (listCopy.next !== null) {
    lastItem = listCopy.next.data;
    listCopy = listCopy.next;
  }
  return lastItem;
}
