import Store from './store';
import Books from '../helpers/data/bookData';

// navigation events
const navigationEvents = () => {
  $('#featured-books').on('click', () => {
    Store.makeStore(Books.getBooks('featured'));
  });

  $('#all-books').on('click', () => {
    Store.makeStore(Books.getBooks('all'));
  });

  $('#titles').on('click', () => {
    Store.makeStore(Books.getBooks('titles'), true);
  });

  $('#search').keyup((e) => {
    const searchValue = $('#search').val().toLowerCase();
    const searches = Books.getBooks('all').filter((book) => book.title.toLowerCase().includes(searchValue));

    if (searches.length === 0) {
      Store.emptyStore();
    } else {
      Store.makeStore(searches);
    }

    if (e.keyCode === 13) {
      $('#search').val('');
    }
  });
};

export default { navigationEvents };
