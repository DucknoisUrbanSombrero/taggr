var https = require('https'); //Https module of Node.js
var fs = require('fs'); //FileSystem module of Node.js
var FormData = require('form-data'); //Pretty multipart form maker.
 
var ACCESS_TOKEN = "CAACEdEose0cBAGRBhisgesHeKUIo18yUrxIWgq5QbH1k0GL3bJrhNMEO9AVja8g5NcHSikGqHRmIJjFzY1t72sZBfncB7RyZAZCAoRVVZAZCyk4pfkZAfTmPg7MAtXfPibQbJj7ZBeLdPN77pfxxZBPp2A6ZBM91BBoOALvkxYl89qrR9KdGN1G6FmZBZBm4x8u6LEnShldI07QnBj2AYU8sOHu";
 var phan = require('./runPhantom');

module.exports = function(path,cb){
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
    console.log('upload complete, extracting data');
    phan('getTag.js',function(s){
      cb(s)
    });
  });
   
  //Binds form to request
  form.pipe(request);
   
  //If anything goes wrong (request-wise not FB)
  request.on('error', function (error) {
       console.log(error);
  });
}