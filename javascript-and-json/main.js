var books = [
  {
    isbn: '1248023423',
    title: 'Old Man and the Sea',
    author: 'Earnest Hemmingway'
  },
  {
    isbn: '239823052',
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    isbn: '9309782038',
    title: 'It',
    author: 'Stephen King'
  }
];

console.log('Books: ', books);
console.log('typeof(books): ', typeof (books));
console.log('JSON.stringify(books): ', JSON.stringify(books));
console.log('typeof(JSON.stringify(books)): ', typeof (JSON.stringify(books)));

var student = '{"Number id": 1000, "Name": "Fido"}';
console.log('student: ', student);
console.log('typeof(student): ', typeof (student));

console.log('JSON.parse(student): ', JSON.parse(student));
console.log('typeof(JSON.parse(student)): ', typeof (JSON.parse(student)));
