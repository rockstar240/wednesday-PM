$(document).ready(function() {

var pinkButton = $("#pink");
console.log(pinkButton)

pinkButton.click(function(){
  //console.log("hello")
  pinkButton.css("border", "20px solid pink");
});

var blueButton = $("#blue");

blueButton.click(function(){

blueButton.css("border", "20px solid blue");

});

})
