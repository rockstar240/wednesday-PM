$(document)
.ready(function() {
var pinkButton = $('#pink')
console.log(pinkButton)
pinkButton.click(function(){
pinkButton.css("border","10px solid pink")
});
var blueButton = $('#blue')
console.log(blueButton)
blueButton.click(function(){
blueButton.css("background-color","#5bc5ff")
})

var fadeButton = $('#fade')
console.log(fadeButton)
fadeButton.click(function(){
fadeButton.fadeOut("8000")
})

});
