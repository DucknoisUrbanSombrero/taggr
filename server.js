/*Define dependencies.*/
var express=require("express");
var multer  = require('multer');
var app=express();
var done=false;
var fb = require('./fb');
var phan = require('./runPhantom');
var recentName = '';
/*Configure the multer.*/

app.use(multer({ dest: './uploads/',
 rename: function (fieldname, filename) {
    return 'image';
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
}
}));

/*Handling routes.*/

app.get('/',function(req,res){
      res.sendfile("index.html");
});

app.post('/api/photo',function(req,res){
  if(done==true){
    var cb = function(name){
      console.log(name);
      res.end(name);
      recentName = name;
      // console.log('deleting album');
      // phan('removeTag.js',function(){console.log('album deleted')});
    }
    fb('/uploads/image.jpg',cb);
  }
});
app.get('/api/getName',function(req,res){
      res.end(recentName);
});

var port = process.env.PORT || 3000;

/*Run the server.*/
app.listen(port,function(){
    console.log("Working on port 3000");
});