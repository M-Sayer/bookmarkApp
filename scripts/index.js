import api from './api.js';
import state from './state.js';
import bookmarks from './bookmarks.js';


const main = function() {
  api.getBookmarks()
    .then((items) => {
      items.forEach((item) => state.addBookmark(item));
      bookmarks.render();
    });
  bookmarks.bindEventListeners();
  bookmarks.render();
};

$(main);