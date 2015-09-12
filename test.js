var request = require('request');
request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     'http://localhost:3000/upload',
  body:    "mes=heydude"
}, function(error, response, body){
  console.log(body);
});
