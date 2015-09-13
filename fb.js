var https = require('https'); //Https module of Node.js
var fs = require('fs'); //FileSystem module of Node.js
var FormData = require('form-data'); //Pretty multipart form maker.
 
var ACCESS_TOKEN = "CAACEdEose0cBAHx4MOGCRKM6yK9Kb4dIxcZAet3eVjBSbqrzCZAUdUQZAZBtZAD8wi7hlVtcvjqzASUW7iyXpAWDE7BR3Y8OMmnpfp5QdVriOXqkeWf4smdkIY9udw4o8PDjaKGVZBqdRmry1yB8LzrGEBhdNWDZAy1NyZAqCTaj1RAmDMSDedZBuZC7ObEWRLPDV0kKUXWTNXHnKFVWCSYFlD";
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