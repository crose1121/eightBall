var answer = document.getElementById("answer");
var ballImg = document.getElementById("ballImg");
var question = document.getElementById("question")

function askQuestion() {
    question.value = "";
    ballImg.src = "imgs/ball1.jpg";

    var possibleResponses = [
        "very yes",
        "yes",
        "no",
        "not likely",
        "hmmmm not  yet",
        "the winds of Saturn don't seem to be in alignment",
        "hahahaha of course not"
    ];

    var randAnswer = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];

    answer.innerText = randAnswer;
}

function shakeBall () {
    console.log("shake ball");
    ballImg.src = "imgs/ball2.gif";
    setTimeout(askQuestion, 1000);
}