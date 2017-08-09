$(document).ready(function() {
// your javascript and jQuery code goes below
var pinkButton = $('#pink');
console.log(pinkButton);
pinkButton.click(function(){
  pinkButton.css("border", "20px solid pink");
});

var blueButton = $('#blue');
console.log(blueButton);
blueButton.click(function(){
  $("#blueBack").css("background-color", "#1379c1");
});

var fadeButton = $('#fade');

});
