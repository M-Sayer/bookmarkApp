import state from './state.js';

const createBookmarkListHtml = function(bkmkListHtml) {
  const bookmarkHtml = `
  <div class="bookmarks">
    <button type="button" name="new-bkmk" class="new-bkmk">New Bookmark</button>

    <button type="button" name="Filter">Filter</button>

    <ul class="bookmarks-list">
      ${bkmkListHtml}
    </ul>
  </div>
  `;
  $('main').html(bookmarkHtml);
};

const bookmarkList = function(){
  let bkmkListHtml = ``;
  for(let i = 0; i < state.bookmarks.length; i++) {
    bkmkListHtml += `<li>
      <span>${state.bookmarks[i].title}</span>
      <span>${state.bookmarks[i].rating}</span>
      </li>`;
  }
  createBookmarkListHtml(bkmkListHtml);
};

const newBookmarkHtml = function() {
  const newBkmkHtml = `<div class="new-bookmark">
  <p>Add New Bookmark:</p>
  <form class="new-bookmark-form" id="new-bookmark-form">
    <input type="text" name="title" placeholder="Enter a title">
    <section>
      <input type="text" name="url" placeholder="URL">
    </section>
  
    <input type="text" name="desc" placeholder="Enter a Desription (Optional)">

    <section>
      <label for="rating">Rating:</label>
      <select name="rating" id="rating">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </section>

  <section>
    <button type="button" name="cancel-new-bkmk" class="cancel-new-bkmk">Cancel</button>

    <input type="submit" value="Create" class="create-new-bkmk">
  </section>

  </form>
  
</div>`;
$('main').html(newBkmkHtml);
};



export default {
  bookmarkList,
  newBookmarkHtml
};