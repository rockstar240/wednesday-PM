$(document).ready(function() {

 var pinkbutton = $('#pink');
 console.log (pinkbutton)

 pinkbutton.click(function() {
   pinkbutton.css("border","20px solid hotpink");


});

var bluebutton = $("#blue");

bluebutton.click(function() {
  $("#blueSquare")
  .css("background-color","blue");

})

})
