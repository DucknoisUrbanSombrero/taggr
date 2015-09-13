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
var gotoAlbums = function gotoAlbums(){
    var a = Array.prototype.slice.call(document.getElementsByTagName('a'));
    var e = document.createEvent('MouseEvent');
    e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.every(function(anchor,i){
      if(anchor.innerHTML.indexOf('Albums')!== -1){
        console.log(anchor.innerHTML);
        anchor.dispatchEvent(e);
        return false;
      }else {
        return true;
      }
    });
};
var openAlbum = function(){
    var a = Array.prototype.slice.call(document.getElementsByTagName('a'));
    var e = document.createEvent('MouseEvent');
    e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.every(function(anchor,i){
      if(anchor.innerHTML.indexOf('Graph API Explorer Photos')!== -1){
        console.log(anchor);
        anchor.dispatchEvent(e);
        return false;
      }else {
        return true;
      }
    });
}
var editAlbum = function(){
  var e = document.createEvent('MouseEvent');
  e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  var i = document.getElementsByClassName('img sp_U0hSS2umViQ sx_04bb31')[0];
  i.parentNode.parentNode.dispatchEvent(e);
  var anchors = Array.prototype.slice.call(document.getElementsByTagName('a'));
  anchors.forEach(function(a,i){
    console.log(i+ ' ---- '+ anchors.length);
    if(a.innerHTML.indexOf('Delete Album')!== -1){
      a.dispatchEvent(e)
      console.log('found link, about to delete')
    }
  });
  window.setTimeout(function(){
    window.callPhantom();
  }, 1000);
}

var onFunc = -1;
var funcs = [login, photosNav, gotoAlbums,openAlbum, function(){console.log('inbetween time!')},
editAlbum];
page.onCallBack = function(){
  console.log('7');
  phantom.render('7.png');
  var buttons = Array.prototype.slice.call(document.getElementsByTagName('button'));
  buttons[buttons.length -1].dispatchEvent(e);
};
page.onLoadFinished = function(){
  console.log('-----------------------');
  onFunc++;
  page.render(onFunc + '.png');
  console.log(onFunc);
  if(onFunc <funcs.length){
  page.evaluate(funcs[onFunc]);
    // phantom.exit();
  }
}
page.onConsoleMessage = function(m){
  console.log(m);
}

page.open('https://facebook.com', function(status) {
});