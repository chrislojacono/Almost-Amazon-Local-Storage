import Nav from './components/navigation';
import Store from './components/store';
import Books from './helpers/data/bookData';
import CartActions from './components/cartActions';

import '../styles/main.scss';

const init = () => {
  CartActions.makeCart();
  Nav.navigationEvents();
  Store.makeStore(Books.getBooks('all'));
};

init();
