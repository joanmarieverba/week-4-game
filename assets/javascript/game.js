"use strict"


let targetValue = 0;
let currentScore = 0;
let numberOfWins = 0;
let numberOfLosses = 0;


$("#target").text(targetValue);
$("#score").text(currentScore);

$("#numwins").text(`Number of wins: ${numberOfWins}`);
$("#numlosses").text(`Number of losses: ${numberOfLosses}`);