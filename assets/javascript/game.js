"use strict"

//create function to get a random number between min and max, inclusive
function getRandomInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let targetValue = 0;
let currentScore = 0;
let numberOfWins = 0;
let numberOfLosses = 0;

let blue = 0;
let diamond = 0;
let purple = 0;
let yellow = 0;

let done = false;
let win = false;
let lose = false;

// assign random numbers to target and crystals
targetValue = getRandomInclusive(19, 120);
blue = getRandomInclusive(1, 12);
diamond = getRandomInclusive(1, 12);
purple = getRandomInclusive(1, 12);
yellow = getRandomInclusive(1, 12);

$("#target").text(targetValue);
$("#score").text(currentScore);

$("#numwins").text(`Number of wins: ${numberOfWins}`);
$("#numlosses").text(`Number of losses: ${numberOfLosses}`);





//blue button clicked
$(".btn1").on("click", function () {
    console.log("currentscorebefore ", currentScore);
    currentScore += blue;
    console.log("currentscoreafter ", currentScore);
    console.log("blue ", blue);
    $("#score").text(currentScore);

});

//diamond button clicked
$(".btn2").on("click", function () {
    currentScore += diamond;
    console.log("diamond ", diamond);
    $("#score").text(currentScore);

});

//purple button clicked
$(".btn3").on("click", function () {
    currentScore += purple;
    console.log("purple ", purple);
    $("#score").text(currentScore);

});

//yellow button clicked
$(".btn4").on("click", function () {
    currentScore += yellow;
    console.log("yellow ", yellow);
    $("#score").text(currentScore);

});


if (currentScore === targetValue) {
    win = true;
    numberOfWins++;
    $("#numwins").text(`Number of wins: ${numberOfWins}`);
    done = true;
}
if (currentScore > targetValue) {
    lose = true;
    numberofLosses++;
    $("#numlosses").text(`Number of losses: ${numberOfLosses}`);
    done = true;
}


