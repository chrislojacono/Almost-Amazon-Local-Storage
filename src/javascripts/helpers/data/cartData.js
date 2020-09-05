import localStorage from '../localStorage';

let cart = [];

const loadCart = () => {
  if (localStorage.getItem('cart')) {
    cart = localStorage.getItem('cart');
  } else {
    cart = [];
  }
};

loadCart();

const setCart = (book) => {
  cart.push(book);
  localStorage.setItem('cart', cart);
};
const getCart = () => cart;
const emptyCart = () => {
  cart.length = 0;

  localStorage.removeItem('cart');
};

const removeItems = (e) => {
  const itemTitle = e.target.closest('tr').id;
  const filteredItems = cart.filter((item) => item.title !== itemTitle);
  cart = filteredItems;

  localStorage.setItem('cart', cart);
};

export default {
  setCart,
  getCart,
  emptyCart,
  removeItems
};
