var https = require('https'); //Https module of Node.js
var fs = require('fs'); //FileSystem module of Node.js
var FormData = require('form-data'); //Pretty multipart form maker.
 
var ACCESS_TOKEN = "CAACEdEose0cBAB2bHGIpsG33ZCOB1Np7pWdzAiMtIxZByaNcfVzyIuzs9CIMZB51N8x6RfYorzjF7ZBzOYvVO2NKbUjKVnfYaUmE9sJfzV9gRvGB9ZBLK1ZApnTfFXs7SqgqqZB6eipJBJGWtZBYWCIZClulktrIKcxJex8urrEFuZBvSvSsyZC0PSSAcdaEYABIFdLWAP4T2DD9ZAW5LcEUZAKq0";
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
    var data = "";
    var id;
    res.on('data',function(chunk){
      data += chunk;
    });
    res.on('end',function(){
      id = JSON.parse(data).id;
      console.log('Identifying...');
      phan('getTag.js',function(s){
            cb(s)
      },[id]);
    })
    // phan('getTag.js',function(s){
    //   cb(s)
    // });
  });
   
  //Binds form to request
  form.pipe(request);
   
  //If anything goes wrong (request-wise not FB)
  request.on('error', function (error) {
       console.log(error);
  });
}
