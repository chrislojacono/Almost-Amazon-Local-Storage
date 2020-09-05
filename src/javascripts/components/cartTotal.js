import Cart from '../helpers/data/cartData';

// OWN FILE because there are various components that need access to this function
const cartTotal = () => {
  const myCart = Cart.getCart();
  const total = myCart.reduce((a, b) => a + b.price, 0);

  return total;
};

export default { cartTotal };
