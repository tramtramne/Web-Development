let randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
document.getElementsByClassName("img1")[0].setAttribute("src",getImage(randomNumber1));;


let randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);
document.getElementsByClassName('img2')[0].setAttribute("src",getImage(randomNumber2));


let title = document.getElementsByTagName("h1")[0].innerText;
if (randomNumber1 > randomNumber2)
  document.getElementsByTagName("h1")[0].innerText = "Player 1 "+title;
else if (randomNumber1 < randomNumber2)
  document.getElementsByTagName("h1")[0].innerText = "Player 2 " + title;
else document.getElementsByTagName("h1")[0].innerText = "No one "+title;



function getImage(number)
{
  switch (number){
    case 1:
      return "./images/dice1.png";
    case 2:
      return "./images/dice2.png";
    case 3:
      return "./images/dice3.png";
    case 4:
      return "./images/dice4.png";
    case 5:
      return "./images/dice5.png";
    case 6:
      return "./images/dice6.png"
  }
}