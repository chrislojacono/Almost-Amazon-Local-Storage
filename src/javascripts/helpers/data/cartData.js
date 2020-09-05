let cart = [];

const setCart = (book) => cart.push(book);
const getCart = () => cart;
const emptyCart = () => {
  cart.length = 0;
};

const removeItems = (e) => {
  const itemTitle = e.target.closest('tr').id;
  const filteredItems = cart.filter((item) => item.title !== itemTitle);
  cart = filteredItems;
};

export default {
  setCart,
  getCart,
  emptyCart,
  removeItems
};
