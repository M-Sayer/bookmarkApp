import state from './state.js';
import generate from './generate.js';

//  RENDER

const render = function() {
  let bookmarks = [...state.bookmarks];
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



const handleCreateSubmit = function() {
  $('main').on('submit','.new-bookmark-form', event => {
    event.preventDefault();
    console.log('submit btn works');
  });
  //formdata
  //create api
  //toggle state.adding
  //render

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