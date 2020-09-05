import Cart from './cartActions';
import Table from './cartTable';

const makeStore = (array, titles = false) => {
  $('#store').html('');

  switch (titles) {
    case true:
      $('#store').removeClass('flex');
      $('#store').append(Table.cartTable(array));
      break;
    default:
      array.forEach((item, index) => {
        $('#store').addClass('flex');
        $('#store').append(
          `<div class="card">
            <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
            <div class="card-body" style="height: 200px;">
              <div class="sale-badge">
                ${item.featured ? '<span class="badge badge-success">FEATURED</span>' : ''}
              </div>
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">Price: $${item.price}</p>
              <button class="btn btn-danger" id="cart-add-${index}">Add to Cart</button>
            </div>
          </div>`
        );
        Cart.addToCart(array, index);
      });
  }
};

const emptyStore = () => {
  $('#store').html('<h1>No Items</h1>');
};

export default { makeStore, emptyStore };
