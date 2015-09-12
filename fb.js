var https = require('https'); //Https module of Node.js
var fs = require('fs'); //FileSystem module of Node.js
var FormData = require('form-data'); //Pretty multipart form maker.
 
var ACCESS_TOKEN = "CAACEdEose0cBALQ9l0wc1pE0HCme7dkpnmFwjMWOVCc4e2Agw5EMTEBoQFyOIg9BVecwknlj1UC1d8WUH7hIUGSZCtaItMVMlxnviGN1yK6fcjEcOKWLoPUIzhl1b7ZCceidBUSZApiwU4AKZCfH1mZAJJifE3Yi4CbCm8hR2ytUn24k9OgNwan9sUjax1wXXUzQZAZCH1SfxZAOyYCbOgFS";
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