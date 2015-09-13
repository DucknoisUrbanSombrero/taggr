var https = require('https'); //Https module of Node.js
var fs = require('fs'); //FileSystem module of Node.js
var FormData = require('form-data'); //Pretty multipart form maker.
 
var ACCESS_TOKEN = "CAACEdEose0cBAEXD5L0gELA0pXF5rnm3ZBgujA6zc0GZCPtHY4UOM3044E4kArba2B9uykADPrqBzPMFodPsG21yoz7Wsv8wRPVLabMfjggSRCu3q8IT5SV8nZCtr0U5yYNq0jQfxro5szAZAUEtx79DQE9ZCIF1AFsRkHyRZAr7im2AmDEtrflibiBZCVPkVmRcSsBisExwZBtvx5W3A10M";
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