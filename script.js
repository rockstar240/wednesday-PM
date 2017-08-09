$(document).ready(function() {
// your javascript and jQuery code goes below
  var pinkPink = $('#pink');
  console.log(pinkPink);
  pinkPink.click(function() {
    pinkPink.css("border", "20px solid pink");
});
  var bloo = $('#blue');
  bloo.click(function() {
    $("#div2").css("background-color", "#4d75b7");
});
  var fadingAway = $('#fade');
  fadingAway.click(function() {
    fadingAway.fadeOut(10000);
});
});
