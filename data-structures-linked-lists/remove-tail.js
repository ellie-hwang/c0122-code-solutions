/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return;
  let listCopy = list;
  while (listCopy.next.next !== null) {
    listCopy = listCopy.next;
  }
  listCopy.next = null;
  return listCopy;
}
