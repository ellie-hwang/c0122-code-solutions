/* exported includes */

function includes(list, value) {
  let listCopy = list;
  while (listCopy.next !== null) {
    if (listCopy.data === value) {
      return true;
    } else {
      listCopy = listCopy.next;
    }
  }
  if (listCopy.data === value) return true;
  return false;
}
