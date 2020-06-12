import state from './state.js';
import api from './api.js';
import generate from './generate.js';
import index from './index.js';

//  RENDER

const render = function() {
  let bookmarks = [...state.bookmarks];
  api.getBookmarks();
  if(!state.adding) {
    // generate HTML
    const bkmkListHtml = generate.bookmarkList();
    // insert that HTML into the DOM
    $('main').html(bkmkListHtml);
  } else if(state.adding) {
    const newBkmkHtml = generate.newBookmarkHtml();
    $('main').html(newBkmkHtml);
  }
  
};

//  HANDLER FUNCTIONS

const handleNewBkmkClick = function() {
  $('main').on('click', '.new-bkmk', event => {
    console.log('newBkmk btn works');
    state.adding = !state.adding;
    generate.newBookmarkHtml();
  });
};

const handleCancelClick = function() {
  $('main').on('click','.cancel-new-bkmk', event => {
    state.adding = !state.adding;
    render();
  });
};

const serializeForm = function() {
  const newBkmkForm = document.getElementById('new-bookmark-form');
  const formData = new FormData(newBkmkForm);
  const newBkmkData = {};
  formData.forEach((val, name) => newBkmkData[name] = val);
  return JSON.stringify(newBkmkData);
};

const handleCreateSubmit = function() {
  $('main').on('submit','#new-bookmark-form', event => {
    event.preventDefault();
    console.log('submit btn works');
    //  formdata
    let newBookmark = serializeForm();
    console.log(newBookmark);
    //create api
    api.createBookmark(newBookmark)
      .then(res => res.json())
      .then(newBkmk => {
        state.addBookmark(newBkmk);
        state.adding = !state.adding;
        render();
      })
   
  });
  
  
  
  

};

function bindEventListeners() {
  handleNewBkmkClick();
  handleCancelClick();
  handleCreateSubmit();
};


export default {
  render,
  bindEventListeners
};