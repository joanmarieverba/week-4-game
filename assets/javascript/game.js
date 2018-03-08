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