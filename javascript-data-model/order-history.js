var orderHistory = [
  {
    book: {
      title: 'Javascript for Impatient programmers',
      author: 'Dr. Axel Rauschmayer'
    },
    itemImg: true,
    orderDate: 'August 4, 2020',
    orderStatus:
    {
      deliveryStatus: true,
      deliveryDate: 'August 8, 2020',
      returnCloseDate: 'September 7, 2020'
    },
    price: 31.55
  },
  {
    book: {
      title: 'The Timeless Way of Building',
      author: 'Christopher Alexander'
    },
    itemImg: true,
    orderDate: 'July 19, 2020',
    orderStatus:
    {
      deliveryStatus: true,
      deliveryDate: 'July 20, 2020',
      returnCloseDate: 'August 19, 2020'
    },
    price: 41.33
  },
  {
    electronics: {
      itemName: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No lag-Gamecube Adapter'
    },
    itemImg: true,
    orderDate: 'July 4, 2020',
    orderStatus:
    {
      deliveryStatus: true,
      deliveryDate: 'July 7, 2020',
      returnCloseDate: 'August 5, 2020'
    },
    price: 15.98
  },
  {
    electronics: {
      itemName: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)'
    },
    itemImg: true,
    orderDate: 'July 3, 2020',
    orderStatus:
    {
      deliveryStatus: true,
      deliveryDate: 'July 5, 2020',
      returnCloseDate: 'August 4, 2020'
    },
    price: 94.95
  },
  {
    book: {
      title: 'The Art of Sql',
      author: 'Stephane Faroult'
    },
    itemImg: true,
    orderDate: 'July 3, 2020',
    orderStatus:
    {
      deliveryStatus: true,
      deliveryDate: 'July 5, 2020',
      returnCloseDate: 'August 4, 2020'
    }
  }
];

console.log('Title of book ordered on August 4, 2020:', orderHistory[0].book.title);
console.log('Delivery date for Gamecube Controller: ', orderHistory[3].orderStatus.deliveryDate);
console.log('Order History: ', orderHistory);
