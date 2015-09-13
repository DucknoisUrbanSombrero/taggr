var page = require('webpage').create();
var page2 = require('webpage').create();
var system = require('system');
var args = system.args;
var id = args[1]
var login = function login(){
      page.evaluate(function(){
        document.querySelector("input[name='email']").value = "mhacksglassbot@gmail.com";
        document.querySelector("input[name='pass']").value = "franksafuck";
        document.querySelector("#login_form").submit();   
      });
};
var photo = function(){
  page2.open('https://www.facebook.com/photo.php?fbid='+id,function(){
  }); 
}
var tag = function(){
  var name = page2.evaluate(function(){
    return document.getElementsByClassName('_570u faceboxSuggestion')[0].getAttribute('data-text');
  });
  console.log(name);
  phantom.exit();
}
var onFunc = -1;
var funcs = [login,photo];

page.onLoadFinished = function(){
  var title = page.evaluate(function(){
    return document.title;
  });
  onFunc++;
  if(onFunc < funcs.length){
    funcs[onFunc]();
    page.render(onFunc + '.png');
  }
}

page.open('https://facebook.com', function(status) {
});

page2.onLoadFinished = function(){
  tag();
}