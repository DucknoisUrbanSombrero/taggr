var page = require('webpage').create();

var login = function login(){
      document.querySelector("input[name='email']").value = "mhacksglassbot@gmail.com";
      document.querySelector("input[name='pass']").value = "franksafuck";
      document.querySelector("#login_form").submit();    
};
var photosNav = function photosNav(){
  window.setTimeout(function(){
    var li = document.getElementById('navItem_2305272732');
    var anchors = li.getElementsByTagName('a');
    var e = document.createEvent('MouseEvents');
    e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    anchors[1].dispatchEvent(e);
  },200);
};
var getTag = function getTag(){
   window.setTimeout(function(){
      window.callPhantom();

  },1000);
};
var onFunc = -1;
var funcs = [login, photosNav, getTag];
var returnTag = function(t){
  console.log(t);
  phantom.exit();
};
page.onLoadFinished = function(){
  var title = page.evaluate(function(){
    return document.title;
  });
  console.log(title);
  page.render(onFunc+ '.png');
  onFunc++;
  page.evaluate(funcs[onFunc]);
}
page.onConsoleMessage = function(m){
  console.log(m);
}
page.onCallback = function(data) {
  page.evaluate(function(){
      var image = document.getElementsByClassName('_wgz')[0];
      var e = document.createEvent('MouseEvent');
      e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      image.dispatchEvent(e);
      for(var i =0; i < 6000000;i++){}
    });
    page.render('3.png');
   page.evaluate(function(){
      var e = document.createEvent('MouseEvent');
      e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      var no = document.getElementsByClassName('_570w');
      console.log(no.length);
      no[1].dispatchEvent(e);
    });
    phantom.exit();
};
page.open('https://facebook.com', function(status) {
});