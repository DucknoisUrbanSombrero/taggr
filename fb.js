var https = require('https'); //Https module of Node.js
var fs = require('fs'); //FileSystem module of Node.js
var FormData = require('form-data'); //Pretty multipart form maker.
 
var ACCESS_TOKEN = "CAACEdEose0cBAL0NZBmEZCrstDynnNqeVm1jG85MjIWsypZAIS5kZAO4qKPDZCV5DxXZBwpEquYq37kIjQ7M7nTyS91fojUKfZAQZCh7d5AnKH5Nl40ewcsfXDUzpzUhvHxbkXWyQrf5z0OJwYgEUgcC2oBNBWZCoouZAUwpNo9o4pCU3perIjQpMKDfT5vXXd64NDTwTK3EOjlY68mroU7LtG";
 var phan = require('./runPhantom');

module.exports = function(path){
  console.log(__dirname);
  console.log('starting upload');
  var form = new FormData(); //Create multipart form
  form.append('file', fs.createReadStream(__dirname+path)); //Put file
  form.append('message', "Test"); //Put message

  //POST request options, notice 'path' has access_token parameter
  var options = {
      method: 'post',
      host: 'graph.facebook.com',
      path: '/me/photos?access_token='+ACCESS_TOKEN,
      headers: form.getHeaders(),
  }
  //Do POST request, callback for response
  var request = https.request(options, function (res){
    phan(function(s){
      console.log(s);
    });
  });
   
  //Binds form to request
  form.pipe(request);
   
  //If anything goes wrong (request-wise not FB)
  request.on('error', function (error) {
       console.log(error);
  });
}