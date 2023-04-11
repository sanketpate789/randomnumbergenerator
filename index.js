var randomNumber1=Math.random();
randomNumber1=Math.floor((randomNumber1*6)+1);
var randomDiceImage="dice" + randomNumber1 +".png";
var RandomImageSource="images/"+ randomDiceImage;
var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",RandomImageSource);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6)+1);
var randomDiceImage1 ="dice"+randomNumber2+".png";
var RandomImageSource1="images/" + randomDiceImage1;
var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",RandomImageSource1);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 player 1 won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="🚩 player 2 won";
}
else{
    document.querySelector("h1").textContent="its a tie"
}