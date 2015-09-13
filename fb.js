var https = require('https'); //Https module of Node.js
var fs = require('fs'); //FileSystem module of Node.js
var FormData = require('form-data'); //Pretty multipart form maker.
 
var ACCESS_TOKEN = "CAACEdEose0cBAHp3d2uV8y8AsVcJSJrA1Vb8JCLVeGmsMFhceZBzRC7d2fGZBj7DJDssuZA31uzQc4DQzA6Gv3Yc8sL2ZBdAYMiyLj6LpF5MSXMqpuW2NcOZAaJILgSgbXnTAQd3jN7tFHNcxFwG9FnfP4bj12E9o2FB6341fe7r85hKQoVgPteAAYn8MoGoGFmHJSU2dW7gLxSCTZCi09";
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