import animals from '../../../assets/images/animals.jpeg';
import bacon from '../../../assets/images/bacon.jpg';
import chicken from '../../../assets/images/chicken.jpg';
import gravy from '../../../assets/images/gravy.jpg';
import kale from '../../../assets/images/kale.jpg';
import zombie from '../../../assets/images/zombie.jpg';

const bookInfo = [
  {
    price: 25.99,
    title: 'Fifty Shades of Chicken',
    image: chicken,
    featured: false,
  },
  {
    price: 15.45,
    title: 'Fifty Shades of Bacon',
    image: bacon,
    featured: true,
  },
  {
    price: 5,
    title: 'Fifty Shades of Kale',
    image: kale,
    featured: false,
  },
  {
    price: 2,
    title: 'Fifteen Shades for Grey',
    image: animals,
    featured: false,
  },
  {
    price: 50,
    title: 'Fifty Shades of Zombie',
    image: zombie,
    featured: true,
  },
  {
    price: 0.75,
    title: 'Fifty Shades of Gravy',
    image: gravy,
    featured: false,
  },
];

const featured = bookInfo.filter((book) => book.featured);

const getBooks = (type) => {
  switch (type) {
    case 'all':
      return bookInfo;
    case 'featured':
      return featured;
    case 'titles':
      return bookInfo;
    default:
      return bookInfo;
  }
};

export default { getBooks };
