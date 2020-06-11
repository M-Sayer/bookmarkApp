

import api from './api.js';
import state from './state.js';
import bookmarks from './bookmarks.js';


const main = function() {
  api.getBookmarks()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => state.addBookmark(item));
    bookmarks.render();
  });
    // .then((data) => {
    //   data.forEach((bookmark) => state.addBookmark(bookmark));
    //   bookmarks.render();
    //   console.log(data);
    // });
  bookmarks.bindEventListeners();
  bookmarks.render();
};



$(main);