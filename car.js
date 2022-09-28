var blackcar = document.getElementById("blackcar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result")
const score =  document.getElementById("score")
var game =  document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")



// bluecar move
blackcar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    blackcar.style.left = random + "px";
    counter++
})

//racecar move

window.addEventListener("keydown", function(e){
    if(e.keyCode == "39"){ var racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
     if(racecarLeft < 260){racecar.style.left = (racecarLeft + 130) + "px"}
     jumpsound.play()
 };
 
     if(e.keyCode == "37"){
         var racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
         if(racecarLeft > 0){racecar.style.left = (racecarLeft - 130) + "px"
         jumpsound.play()
     }
 
     }
 })

//Game over
setInterval(function Gameover (){
    var blackcarTop = parseInt(window.getComputedStyle(blackcar).getPropertyValue("top"))
    var blackcarLeft = parseInt(window.getComputedStyle(blackcar).getPropertyValue("left"));
    var racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
        if((blackcarLeft === racecarLeft) && (blackcarTop > 250) && (blackcarTop < 450)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10)
