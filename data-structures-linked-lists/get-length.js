/* exported getLength */

function getLength(list) {
  let listCopy = list;
  let count = 1;
  while (listCopy.next !== null) {
    listCopy = listCopy.next;
    count++;
  }
  return count;
}
