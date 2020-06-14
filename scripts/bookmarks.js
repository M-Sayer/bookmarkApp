import state from './state.js';
import api from './api.js';
import generate from './generate.js';

//    RENDER

const render = function() {
  // if(state.filter > 0) {
  //   $('#filter-select').val('3');
  // };
  if(!state.adding) {
    const listHtml = generate.bookmarkList();
    $('main').html(listHtml);
  } else if(state.adding) {
    const newBkmkHtml = generate.newBookmarkHtml();
    $('main').html(newBkmkHtml);
  }
  
};

//    HANDLER FUNCTIONS

const handleFilterChange = function() {
  $('main').on('change', '#filter-select', event => {
    state.filter = $('option:selected').val();
    console.log(state.filter);
    render();
  });
};

const handleNewBkmkClick = function() {
  $('main').on('click', '.new-bkmk', event => {
    state.error = null;
    // console.log('newBkmk btn works');
    state.adding = !state.adding;
    render();
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
    // console.log('submit btn works');
    //  formdata
    let newBookmark = serializeForm();
    // console.log(newBookmark);
    //create api
    api.createBookmark(newBookmark)
      .then(newBkmk => {
        state.addBookmark(newBkmk);
        state.adding = !state.adding;
        render();
      })
      .catch((error) => {
        // console.log(error);
        state.setError(error.message);
        render();
      });
  });
};

const getBkmkId = function(item) {
  return $(item)
    .closest('li')
    .data('bkmk-id');
};

const handleExpandClick = function() {
  $('main').on('click','.bookmark', event => {
    const id = getBkmkId(event.currentTarget);
    const bkmk = state.findById(id);
    // console.log(bkmk);
    bkmk.expand = !bkmk.expand;
    render();
  });
};

const handleDeleteClick = function() {
  $('main').on('click', '.delete-bkmk', event => {
    event.preventDefault();
    // console.log('delete btn works');
    const id = getBkmkId(event.currentTarget);
    // console.log(id);
    api.deleteBookmark(id)
      .then(() => {
        state.deleteBookmark(id);
        render();
      })
      .catch((error) => {
        state.setError(error.message);
        render();
      });
  });
};

function bindEventListeners() {
  handleNewBkmkClick();
  handleCancelClick();
  handleCreateSubmit();
  handleExpandClick();
  handleFilterChange();
  handleDeleteClick();
};

export default {
  render,
  bindEventListeners
};