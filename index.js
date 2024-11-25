//player1 random number generating and setting image
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg1 = "dice" + randomNumber1 + ".png";
var randomImgSource1 = "images/" + randomDiceImg1;
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImgSource1);

//2nd player random number and image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImgsource2 = "images/" + randomDiceImg2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgsource2);


//different cases
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 wins, with number: " + randomNumber1;
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 wins, with number: " + randomNumber2;
} else {
    document.querySelector("h1").innerHTML = "Draw! " + randomNumber1 + " - " +randomNumber2;
}










