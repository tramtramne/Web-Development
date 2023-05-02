let gamePattern = [];
let userClickedPattern =[];
let userChosenColor;
const buttonColors = ["red", "blue", "green", "yellow"];
let level = 0;
let start = false;


document.addEventListener('keydown', (event) => {
  let name = event.key;
  
  // Alert the key name and key code on keydown
  if (!start)
  {
    $("h1").text("Level " + level);
    nextStep();
    start = true;
  }
}, false);


$(".btn").click(function() {
userChosenColor = $(this).attr("id");
console.log(userChosenColor);
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswer(userClickedPattern.length-1);
});
  
function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

     
      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
          nextStep();
        }, 1000);

      }

  } else {

    console.log("wrong");
    $("body").addClass("game-over");
    playSound("wrong");
    //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press A to Restart");
    startAgain();
  }
}

function nextStep(){
  level ++;
  userClickedPattern = [];
  $("h1").text("Level " + level);

  let iran = Math.random();
  console.log(iran);
  iran *= 4;
  iran = Math.floor(iran) + 1 ;
  console.log(iran);
  let randomChosenColor = buttonColors[iran-1];
  console.log(randomChosenColor);
  gamePattern.push(randomChosenColor);
  animatePress(randomChosenColor);
  playSound(randomChosenColor);
}

  function animatePress(currentColor) {

    //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $("#" + currentColor).addClass("pressed");
  
    //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startAgain(){
  level =0;
  gamePattern=[];
  start=false;
}