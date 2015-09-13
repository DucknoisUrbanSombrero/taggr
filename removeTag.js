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
    window.setTimeout(function(){
      var a = Array.prototype.slice.call(document.getElementsByTagName('a'));
      var e = document.createEvent('MouseEvent');
      e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.every(function(anchor,i){
        if(anchor.innerHTML.indexOf('Graph API Explorer Photos')!== -1){
          anchor.dispatchEvent(e);
          return false;
        }else {
          return true;
          }
        });
      },2000);
};
var openAlbum = function(){
    var a = Array.prototype.slice.call(document.getElementsByTagName('a'));
    var e = document.createEvent('MouseEvent');
    e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.every(function(anchor,i){
      if(anchor.innerHTML.indexOf('Graph API Explorer Photos')!== -1){
        anchor.dispatchEvent(e);
        return false;
      }else {
        return true;
      }
    });
}
var editAlbum = function(){
  var anchors = Array.prototype.slice.call(document.getElementsByTagName('a'));
  var e = document.createEvent('MouseEvent');
  e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  anchors.forEach(function(a,i){
    if(a.innerHTML.indexOf('Edit')!== -1){
      a.dispatchEvent(e)
    }
  });
}
var deleteAlbum = function(){
   var but = document.getElementsByClassName('_42ft _42me _42mf');
    console.log(JSON.stringify(but));
    var e = document.createEvent('MouseEvent');
    e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    but[0].dispatchEvent(e);
    window.setTimeout(function(){
      console.log('g');
      var buttons = Array.prototype.slice.call(document.getElementsByTagName('button'));
      buttons.forEach(function(b,i){
        if(b.innerHTML.indexOf('Delete Album')!==-1){
            var e = document.createEvent('MouseEvent');
            e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            b.dispatchEvent(e);
        }
      });
    },1500);
}
var onFunc = -1;
var funcs = [login, photosNav, getTag,function(){},editAlbum, deleteAlbum];

page.onLoadFinished = function(){
  console.log('-----------------------');
  var title = page.evaluate(function(){
    return document.title;
  });
  console.log(title);
  onFunc++;
  page.render(onFunc+ '.png');
  console.log(onFunc);
  page.evaluate(funcs[onFunc]);
  if(onFunc === funcs.length -1){
    phantom.exit();
  }
}
page.onConsoleMessage = function(m){
  console.log(m);
}
page.onCallback = function(data) {
  page.evaluate(function(){
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
    });
  page.render('3.5.png')
  page.evaluate(function(){
    window.setTimeout(function(){
      var a = Array.prototype.slice.call(document.getElementsByTagName('a'));
      var e = document.createEvent('MouseEvent');
      e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.every(function(anchor,i){
        if(anchor.innerHTML.indexOf('Graph API Explorer Photos')!== -1){
          anchor.dispatchEvent(e);
          return false;
        }else {
          return true;
          }
        });
      });
    },2000);
};
page.open('https://facebook.com', function(status) {
});