// the code below makes sign in request by registering new user

// const axios = require('axios');
// axios.post('http://127.0.0.1:3000/users', {name: 'John Smith', username: 'testusername', email: "john@gmail", password: "123456"})
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });


////////////////////////

// the code below makes log in request

// const axios = require('axios');
// axios.post('http://127.0.0.1:3000/auth/login', {email: "john@gmail", password: "123456"})
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });


///////////////////////////
  


// the below code makes api get request to fetch some resourses
// it is worth mentioning that code in line 75 is making sure to send the token along with 
// the request
const axios = require('axios');
axios.defaults.headers.common['Authorization'] = `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NzQxNjg5MDd9.qHIgUDOz4SWqzVMhNFVvsH71RtaDsXYRl8GiQC-1_7k"}`;
axios.get('http://127.0.0.1:3000/message/random_message')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
});
