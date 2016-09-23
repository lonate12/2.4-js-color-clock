(function(){
"use strict";
var wholeDate = new (Date)();

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

  document.getElementById('clock').innerHTML = displayTime;
  document.getElementById('line').style.width = percentage + '%';
  document.body.style.backgroundColor = '#' + hexNumber;
  document.getElementById('clock').addEventListener("mouseover", function(){
    this.innerHTML = '#' + hexNumber;
  });
  console.log(hexHours);

}

insertTime();
window.setInterval(insertTime, 1000);
}());
