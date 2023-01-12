// const http = require('http');
// const data = JSON.stringify({name: 'John Smith', username: 'testusername', email: "john@gmail", password: "123456"});
// const options = {
//   hostname: 'api.example.com',
//   port: 80,
//   path: 'http://127.0.0.1:3000/users',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   }
// };

// const req = http.request(options, (res) => {
//   console.log(`statusCode: ${res.statusCode}`);
//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', (error) => {
//   console.error(error);
// });
// req.write(data);
// req.end();
///////////////////
// const request = new XMLHttpRequest();
// const url = 'http://127.0.0.1:3000/users';
// const data = {name: 'John Smith', username: 'testusername', email: "john@gmail", password: "123456"};

// request.open('POST', url, true);
// request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

// request.onreadystatechange = function () {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText);
//   }
// };

// request.send(JSON.stringify(data));


////////////////////////////////


// const axios = require('axios');
// axios.post('http://127.0.0.1:3000/users', {name: 'John Smith', username: 'testusername', email: "john@gmail", password: "123456"})
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });


////////////////////////

// const axios = require('axios');
// axios.post('http://127.0.0.1:3000/auth/login', {email: "john@gmail", password: "123456"})
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

  ///////////////////////////
  // token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NzQxNjc4NjJ9.H2Yp5Cjqzuhl4Nnw-IxS3o4yr0zReYtfvD_VDCovpxc'
  ///////////////////////////////////////////

const axios = require('axios');
axios.defaults.headers.common['Authorization'] = `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NzQxNjg5MDd9.qHIgUDOz4SWqzVMhNFVvsH71RtaDsXYRl8GiQC-1_7k"}`;
axios.get('http://127.0.0.1:3000/message/random_message')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
});

