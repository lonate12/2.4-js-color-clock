(function(){
"use strict";
var wholeDate = new (Date)();
var run;
var clock = document.getElementById('clock');
var line = document.getElementById('line');
var body = document.body;

function start(){
  run = window.setInterval(insertTime, 1000);
}

var isHovering = false;

clock.addEventListener('mouseover', function(){
  isHovering = true;
});

clock.addEventListener('mouseout', function(){
  isHovering = false;
});

function insertTime(){
  var wholeDate = new (Date)();
  var hours = ( '0' + (wholeDate.getHours() % 12 || 12)).slice(-2);
  var minutes = ('0' + wholeDate.getMinutes()).slice(-2);
  var seconds = ('0' + wholeDate.getSeconds()).slice(-2);
  var hexHours = ('0' + wholeDate.getHours()).toString(16);
  var currentTime = hours + minutes + seconds;
  var displayTime = hours + ':' + minutes + ':' + seconds;
  var percentage = ((seconds / 60) * 100).toFixed();
  var hexNumber = hours.toString(16) + minutes.toString(16) + seconds.toString(16);

  if(isHovering === true) {
    clock.innerHTML = '#' + hexNumber;
  } else {
    clock.innerHTML = displayTime;
  }

  line.style.width = percentage + '%';
  body.style.backgroundColor = '#' + hexNumber;
  console.log(seconds);

}
insertTime();
start();
// run();
}());
