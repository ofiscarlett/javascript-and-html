//button press
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i=0 ; i<numberOfDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
   });
}

//detecting keypress sounds
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//detecting keyborad press to make sound
function makeSound(key){
  switch (key) {
   case "w":
   var tom1 = new Audio('sounds/tom-1.mp3');
   tom1.play();
     break;
   case "a":
   var tom2 = new Audio('sounds/tom-2.mp3');
   tom2.play();
     break;
   case "s":
   var tom3 = new Audio('sounds/tom-3.mp3');
   tom3.play();
     break;
   case "d":
   var tom4= new Audio('sounds/tom-4.mp3');
   tom4.play();
     break;
   case "j":
   var crash= new Audio('sounds/crash.mp3');
   crash.play();
     break;
   case "k":
   var kick=new Audio('sounds/kick-bass.mp3');
   kick.play();
     break;
   case "l":
   var snare =  new Audio('sounds/snare.mp3');
   snare.play();
     break;
   default: console.log(key);

}}
function buttonAnimation(currentKey){
  //activeButton is for changing style
  //var 這邊要記得有等號,不然會有錯誤
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
//notice, remember () pair
setTimeout (function(){activeButton.classList.remove("pressed");},200);
}

//var audio = new Audio('sounds\tom-1.mp3');
//audio.play();
