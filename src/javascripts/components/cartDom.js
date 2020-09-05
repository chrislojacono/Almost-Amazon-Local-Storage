import Cart from './cartTotal';

const cartDom = () => {
  $('#cart-button').html(`
          <button class="btn btn-${Cart.cartTotal() === 0 ? 'secondary' : 'success'}" data-toggle="modal" data-target="#buy-modal" ${Cart.cartTotal() === 0 && 'disabled'} id="checkout">
            <i class="fas fa-shopping-cart cart"></i>
            <div id="cart-price">
              <div>$${Cart.cartTotal().toFixed(2)}</div>
            </div>
          </button>
      `);
};

export default { cartDom };
