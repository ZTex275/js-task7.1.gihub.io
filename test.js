function delay(mymessage, msec) {
    return function() {
      var a = this;
      var b = arguments;
        setTimeout(function(){mymessage(a,b);}, msec);}
      }
  




function mymessage(arg) {
  console.log('Message: ' + arg);
}

var superFunc = delay(mymessage, 2000);

superFunc('Привет'); // сообщение отобразится через 2 секунды


