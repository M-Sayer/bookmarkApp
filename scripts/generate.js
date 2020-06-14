import state from './state.js';

const createBookmarkListHtml = function(bkmkListHtml) {
  const bookmarkHtml = `
  <div class="bookmarks">
    <button type="button" name="new-bkmk" class="new-bkmk">New Bookmark</button>

    
    <select name="filter" id="filter-select">
      <option value="">Filter By Rating</option>  
      <option value="1">1+</option>
      <option value="2">2+</option>
      <option value="3">3+</option>
      <option value="4">4+</option>
      <option value="5">5</option>
    </select>

    <ul class="bookmarks-list">
      ${bkmkListHtml}
    </ul>
  </div>`;
  return bookmarkHtml;
};

const bookmarkList = function(){
  let bkmkListHtml = ``;
  for(let i = 0; i < state.bookmarks.length; i++) {
    let expandedBkmk = ``;
    let starIcon = `star_border`;

    if(state.bookmarks[i].rating) {
      starIcon = starIcon.repeat(state.bookmarks[i].rating);
    }  
   
    if(state.bookmarks[i].expand) {
      expandedBkmk = `<div id="expanded">${state.bookmarks[i].desc}</div>
      <a class="button" href="${state.bookmarks[i].url}" target="_blank">Visit Site</a>
      <button class="delete-bkmk">Delete</button>`;
    }
    
    if(state.bookmarks[i].rating >= state.filter) {
      bkmkListHtml += `<li class="bookmark" data-bkmk-id="${state.bookmarks[i].id}">
      <span id="title">${state.bookmarks[i].title}</span>
      <span class="material-icons" id="star-rating">
    ${starIcon}
    </span>
      ${expandedBkmk}
      </li>`;
    } 
  }
  return createBookmarkListHtml(bkmkListHtml);
};

const newBookmarkHtml = function() {
  let errorHtml = ``;
  if(state.error) {
    errorHtml = `<div class="error">${state.error}</div>`;
  }
  const newBkmkHtml = `
  <div class="new-bookmark">
    <p>Add New Bookmark:</p>
    <form class="new-bookmark-form" id="new-bookmark-form">
      <input required type="text" name="title" placeholder="Enter a title">
      <section>
      </section>
      <input required type="text" name="url" placeholder="URL">
      <section>
      </section>
      <input id="desc-input" type="text" name="desc" placeholder="Enter a Desription (Optional)">
      <textarea id="desc-textarea">Enter A Description</textarea>

      <section>
        <label class="rating-label" for="rating">Rating:</label>
        <select name="rating" id="rating">  
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </section>

      ${errorHtml}
      
      <section>
        <button type="button" name="cancel-new-bkmk" class="cancel-new-bkmk">Cancel</button>
        <input type="submit" value="Create" class="create-new-bkmk">
      </section>
    </form>
  </div>`;
  return newBkmkHtml;
};

export default {
  bookmarkList,
  newBookmarkHtml
};