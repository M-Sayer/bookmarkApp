const BASE_URL = 'https://thinkful-list-api.herokuapp.com/muhajir';

const bookmarkApiFetch = function(...args) {
  let error;
  return fetch(...args) 
    .then(res => {
      if(!res.ok) {
        error = {code : res.statusText};
      }
      return res.json();
    })
    .then(data => {
      if(error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      // console.log(data);
      return data;
    });
};

const getBookmarks = function() {
  return bookmarkApiFetch(`${BASE_URL}/bookmarks`);
};

const createBookmark = function(newBookmark) {
  return bookmarkApiFetch(`${BASE_URL}/bookmarks`, {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : newBookmark
  });
};

const deleteBookmark = function(id) {
  return bookmarkApiFetch(`${BASE_URL}/bookmarks/${id}`, {
    method : 'DELETE'
  });
};

// const updateBookmark = function(id, updateData) {
//   const newData = JSON.stringify(updateData);
//   return fetch(`${BASE_URL}/bookmarks`, {
//     method : 'PATCH',
//     headers : {
//       'Content-Type' : 'application/json'
//     },
//     body : newData
//   });
// };

export default {
  getBookmarks,
  createBookmark,
  deleteBookmark
};