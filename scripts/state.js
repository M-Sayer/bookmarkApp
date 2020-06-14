const bookmarks = [];  
const adding = false;
const error = null;
const filter = 1;
const isExpanded = {
  expand : false
};

const findById = function(id) {
  return this.bookmarks.find(currentItem => currentItem.id === id);
};

const addBookmark = function(bkmk) {
  $.extend(bkmk, isExpanded);
  this.bookmarks.push(bkmk);
};

const deleteBookmark = function(id) {
  for(let i = 0; i < this.bookmarks.length; i++) {
    if(this.bookmarks[i].id === id){
      this.bookmarks.splice(i, 1);
    }
  }
};

const setError = function(error) {
  this.error = error;
};

export default {
  bookmarks,
  adding,
  error,
  filter,
  findById,
  addBookmark,
  deleteBookmark,
  setError
};