import Cart from './cartTotal';
import CartData from '../helpers/data/cartData';
import CartDom from './cartDom';

const chargeIt = (ccNum) => {
  if (ccNum === '') {
    $('#error-message').html('Please enter a credit card number');
  } else {
    CartData.emptyCart();
    $('.modal-backdrop').remove();
    $('#buy-modal').hide();
    CartDom.cartDom();
  }
};

const showCartItems = () => {
  $('tbody').html('');
  $('#cart-total').html(
    `<b>Your total is: $${Cart.cartTotal().toFixed(2)}</b>`
  );

  if (!CartData.getCart().length) {
    $('#cart-table-info').html('<h2 class="mt-2">Cart Empty</h2>');
  }
  const obj = {};

  CartData.getCart().forEach((item) => {
    // LOOKING to see if a key of item exists
    if (item.title in obj) {
      obj[item.title].quantity += 1;
      obj[item.title].price += item.price;
    } else {
      obj[item.title] = { quantity: 1, price: item.price };
    }
  });

  Object.keys(obj).map((title) => $('tbody').append(`<tr id="${title}">
      <td>${title}</td>
      <td>${obj[title].quantity}</td>
      <td>$${obj[title].price.toFixed(2)}</td>
      <td><button class="btn btn-danger remove"><i class="fas fa-trash"></i></button></td>
    </tr>`));
};

const modalFooter = () => {
  // Check length every time footer
  const cartLength = CartData.getCart().length;
  $('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary" id="charge-it" ${cartLength > 0 ? '' : 'disabled'}>Charge it!</button>`);

  // ADD EVENT LISTENER To modal button AFTER BUTTON IS ON THE DOM
  $('body').on('click', '#charge-it', () => {
    const ccNum = $('#credit-card').val();
    chargeIt(ccNum);
  });
};

const removeItems = () => {
  $('body').on('click', '.remove', (e) => {
    CartData.removeItems(e);
    modalFooter();
    showCartItems();
    CartDom.cartDom();
  });
};

const cartModal = () => {
  $('#cart-modal').html(` 
    <div class="modal fade" id="buy-modal" tabindex="-1" role="dialog" aria-labelledby="buy-modalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="buy-modalLabel">Order Total</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="cart-items" id="cart-table-info">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          
          <div class="modal-body">
          <div id="cart-total"></div>
            <div id="error-message" style="color: red;"></div>
            <input class="form-control mr-sm-2" id="credit-card" type="number" placeholder="Enter Credit Card Number" aria-label="Credit Card">
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>`);

  modalFooter();
  showCartItems();
  removeItems();
};

export default { cartModal };
