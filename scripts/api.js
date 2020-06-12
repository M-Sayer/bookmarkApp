const BASE_URL = 'https://thinkful-list-api.herokuapp.com/muhajir';

// const bookmarkApiFetch = function(...args) {
//   let error;
//   return fetch(...args) 
//     .then(res => {
//       if(!res.ok) {
//         error = {code : res.statusText};

//         if(!res.headers.get('content-type').includes('json')) {
//           error.message = res.statusText;
//           return Promise.reject(error);
//         }
//       }
//       // return res.json;
//     })
//     .then(data => {
//       if(error) {
//         error.message = data.message;
//         return Promise.reject(error);
//       }
//       console.log(data);
//       return data;
//     });
  
// };

const getBookmarks = function() {
  // return bookmarkApiFetch(`${BASE_URL}/bookmarks`);
  return fetch(`${BASE_URL}/bookmarks`);
    
};

const createBookmark = function(newBookmark) {
  return fetch(`${BASE_URL}/bookmarks`, {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : newBookmark
  });
  
//   return listApiFetch(`${BASE_URL}/bookmarks`, {
//     method : 'POST',
//     headers : {'Content-Type': 'application/json'},
//     body : newBkmk
//   });
// };

// const deleteBookmark = function(id) {
//   return bookmarkApiFetch(`${BASE_URL}/bookmarks/${id}`, {
//     method : 'DELETE'
//   });
};

export default {
  // bookmarkApiFetch,
  getBookmarks,
  createBookmark,
  // deleteBookmark
};