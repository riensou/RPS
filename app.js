let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

var rock_slider = document.getElementById("rock_slider");
var paper_slider = document.getElementById("paper_slider");
var scissors_slider = document.getElementById("scissors_slider");

function getWinPoints(winnerChoice) {
    if (winnerChoice == "Rock") {
        return parseInt(rock_slider.value)
    }
    else if (winnerChoice == "Paper") {
        return parseInt(paper_slider.value)
    }
    else {
        return parseInt(scissors_slider.value)
    }
}

function getCompChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function game(userChoice) {
    const compChoice = getCompChoice()
    if (userChoice == compChoice) {
        tie(userChoice, compChoice);
    }
    else if (userChoice == "Rock" && compChoice == "Scissors") {
        win(userChoice, compChoice);
    }
    else if (userChoice == "Paper" && compChoice == "Rock") {
        win(userChoice, compChoice);
    }
    else if (userChoice == "Scissors" && compChoice == "Paper") {
        win(userChoice, compChoice);
    }
    else {
        lose(userChoice, compChoice);
    }
}

function win(userChoice, compChoice) {
    console.log("User wins."); 
    userScore += getWinPoints(userChoice);
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = userChoice + " beats " + compChoice + ". You win!";
}

function tie(userChoice, compChoice) {
    console.log("User ties.");
    result_p.innerHTML = userChoice + " equals " + compChoice + ". Draw.";
}

function lose(userChoice, compChoice) {
    console.log("User loses.");
    compScore += getWinPoints(compChoice);
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = compChoice + " beats " + userChoice + ". You lose.";
}

function main() {
    rock_div.addEventListener('click', function() {
        game("Rock");
    })

    paper_div.addEventListener('click', function() {
        game("Paper");
    })

    scissors_div.addEventListener('click', function() {
        game("Scissors");
    })
}

main()


