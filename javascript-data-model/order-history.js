var orderHistory = [
  {
    items: [
      {
        itemType: 'book',
        title: 'Javascript for Impatient programmers',
        author: 'Dr. Axel Rauschmayer',
        itemImg: true,
        price: 31.55
      }
    ],
    orderDate: 'August 4, 2020',
    orderStatus:
    {
      deliveryStatus: true,
      deliveryDate: 'August 8, 2020',
      returnCloseDate: 'September 7, 2020'
    },
    price: 34
  },
  {
    items: [
      {
        itemType: 'book',
        title: 'The Timeless Way of Building',
        author: 'Christopher Alexander',
        itemImg: true,
        price: 41.33
      }
    ],
    orderDate: 'July 19, 2020',
    orderStatus:
    {
      deliveryStatus: true,
      deliveryDate: 'July 20, 2020',
      returnCloseDate: 'August 19, 2020'
    },
    totalPrice: 44.53
  },
  {
    items: [
      {
        itemType: 'electronics',
        itemName: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No lag-Gamecube Adapter',
        itemImg: true,
        price: 15.98
      }
    ],
    orderDate: 'July 4, 2020',
    orderStatus:
    {
      deliveryStatus: true,
      deliveryDate: 'July 7, 2020',
      returnCloseDate: 'August 5, 2020'
    },
    totalPrice: 17.22
  },

  {
    items: [
      {
        itemType: 'electronics',
        itemName: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        itemImg: true,
        price: 94.95
      },
      {
        itemType: 'book',
        title: 'The Art of Sql',
        author: 'Stephane Faroult',
        itemImg: true,
        price: 33.99
      }
    ],
    orderDate: 'July 3, 2020',
    orderStatus:
    {
      deliveryStatus: true,
      deliveryDate: 'July 5, 2020',
      returnCloseDate: 'August 4, 2020'
    },
    totalPrice: 138.93
  }
];

console.log('Order History: ', orderHistory);
