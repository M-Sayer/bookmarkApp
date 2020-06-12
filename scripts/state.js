const bookmarks = [];  
const adding = false;
const error = null;
const filter = 0;

const findById = function(id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addBookmark = function(bkmk) {
  this.bookmarks.push(bkmk);
};

// const toggleState = function() {
//   adding = !adding;
// }

export default {
  bookmarks,
  adding,
  error,
  filter,
  findById,
  addBookmark,
};