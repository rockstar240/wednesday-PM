$(document).ready(function() {
// your javascript and jQuery code goes below
var blueButton = $("#blue")
blueButton.click(function(event){
  blueButton.css("border", "20px solid blue");
})

var otherBlueButton = $("#otherBlue");
var blueButton2 = $("#blueButton2");
otherBlueButton.click(function(event){
  blueButton2.css("background-color", "blue");
  otherBlueButton.css("background-color", "blue");
})

var fadeButton = $("#fade");
var fadeDiv = $("#fadeDiv");
fadeButton.click(function(event){
  fadeDiv.fadeOut(5000);
})

var lottery = $("#lottery");
lottery.click(function(event){
  alert("YOU LOST THE LOTTERY!!!!!!!!");
})

var confirm = $("#confirm");
confirm.click(function(event){
  confirmation()
})

function confirmation() {
  var hi = window.confirm("Are you sure?");
}

var puppy =$("#puppy")
var puppyDiv = $("#puppyDiv")
puppy.click(function(event){
  puppyDiv.css("background-image", "https://raw.githubusercontent.com/hello-world-tech-studios/wednesday-PM/master/images/puppy.jpg")
})

})
