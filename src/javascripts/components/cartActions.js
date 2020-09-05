import CartData from '../helpers/data/cartData';
import Modal from './cartModal';
import Dom from './cartDom';

const makeCart = () => {
  Modal.cartModal();
  Dom.cartDom();
};

const addToCart = (array, index) => {
  const cartButton = $(`#cart-add-${index}`);
  cartButton.on('click', () => {
    CartData.setCart(array[index]);
    makeCart();
  });
};

export default { addToCart, makeCart };
