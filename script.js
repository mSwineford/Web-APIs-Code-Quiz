// menue variables
var startMenu = document.getElementById("start");
var startButton = document.getElementById("startbtn");

// variables that make up the quiz itself
var theQuiz = document.getElementById("quiz");
var stopWatch = document.getElementById("clock");
var quizQuestions = document.getElementById("questions");
var solutions = document.getElementById("solution");
// answers
var answerA = document.getElementById("a");
var answerB = document.getElementById("b");
var answerC = document.getElementById("c");
var answerD = document.getElementById("d");

// results
var gameOver = document.getElementById("gameOver");
var grades = document.getElementById("grade");
var inputInitials = document.getElementById("initials");
var saveButton = document.getElementById("saveScore");

// score board
var scoreContainers = document.getElementById("scoreContainer");
var scoreBoard = document.getElementById("scoreBoard");
var finishLine = document.getElementById("finish");
var scoreName = document.getElementById("scoreInitials");
var scoreTotal = document.getElementById("finalScore");

// questions
var questionsArray = [
    {
        question: "Commonly used datatypes DO NOT include ___.",
        answerA: "strings",
        answerB: "booleans",
        answerC: "alerts",
        answerD: "numbers",
        correctAnswer: "a"
    },
    {
        question: "Arrays in javascript can be used to store ___",
        answerA: "numbers and strings",
        answerB: "other arrays",
        answerC: "booleans",
        answerD: "all of the above",
        correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within ___ when assigned to variables.",
        answerA: "commas",
        answerB: "curly braces",
        answerC: "quotes",
        answerD: "square brackets",
        correctAnswer: "b"
    },
    {
        question: "String values must be enclosed in ___.",
        answerA: "double quotes",
        answerB: "single quotes",
        answerC: "both a and b",
        answerD: "none of the above",
        correctAnswer: "c"
    },
    {
        question: "The condition of an if / else statement is closed within ___",
        answerA: "quotes",
        answerB: "curly brackets",
        answerC: "parentheses",
        answerD: "square bracketts",
        correctAnswer: "c"
    }
];

var lastQuestionIndex = questionsArray.length;
var currentIndex = 0;
var timeRemains = 60;
var timeInterval;
var score = 0;
var correct;

function generateQuestion() {
    gameOver.style.display = "none";
    if (currentIndex === lastQuestionIndex) {
        return showScore;
    }
    var currentQuestion = questionsArray[currentIndex];
    quizQuestions.innerHTML = "<p>" + currentQuestion.question + "</p>";
    answerA.innerHTML = currentQuestion.answerA;
    answerB.innerHTML = currentQuestion.answerB;
    answerC.innerHTML = currentQuestion.answerC;
    answerD.innerHTML = currentQuestion.answerD;
};

function startFunction() {
    gameOver.style.display = "none";
    startMenu.style.display = "none";
    generateQuestion();

    timeInterval = setInterval(function() {
        timeRemains--;
        stopWatch.textContent = "Remaining Time: " + timeRemains;
        if(timeRemains === 0) {
            clearInterval(timeInterval);
            showScore();
        }
    }, 1000);
    theQuiz.style.display = "block"
};

function showScore() {
    theQuiz.style.display = "none";
    gameOver.style.display = "flex";
    clearInterval(timeInterval);
    inputInitials.value = "";
    scoreTotal.innerHTML = "You scored" + score + "/" + questionsArray.length + " questions.";
};

saveButton.addEventListener("click", function highscores() {
    if (inputInitials.value === "") {
        alert("Please enter your initials.");
        return false;
    } else {
        var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
        var player = inputInitials.value.trim();
        var playerScore = {
            name: player,
            score: score,
        };
        gameOver.style.display = "none";
        scoreContainers.style.display = "flex";
        scoreBoard.style.display = "block";
        finishLine.style.display = "flex";
        savedScores.push(playerScore);
        localStorage.setItem("savedScores", JSON.stringify(savedScores));
        generateScores();
    }
});

function generateScores() {
    scoreName.innerHTML = "";
    scoreTotal.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedScores")) || [];
    for (i=0; i < highscores.length; i++) {
        var newInitials = document.createElement("div");
        var newScore = document.createElement("div");
        newInitials.textContent = highscores[i].name;
        newScore.textContent = highscores[i].score;
        scoreName.appendChild(newInitials);
        scoreTotal.appendChild(newScore);
    }
};

function showScoreBoard() {
    startMenu.style.display = "none";
    gameOver.style.display = "none";
    scoreContainers.style.display = "flex";
    scoreBoard.style.display = "block";
    finishLine.style.display = "flex";
    generateScores();
};

function deleteScore() {
    window.localStorage.clear();
    scoreName.textContent = "";
    scoreTotal.textContent = "";
};

function playAgain() {
    scoreContainers.style.display = "none";
    gameOver.style.display = "none";
    startMenu.style.display = "flex";
    timeRemains = 60;
    score = 0;
    currentIndex = 0;
};

function checkQuestion(answer) {
    correct = questionsArray[currentIndex].correctAnswer;
    if (answer === correct && currentIndex !== lastQuestionIndex) {
        score++;
        currentIndex++;
        generateQuestion();
    } else if (answer !== correct && currentIndex !== lastQuestionIndex) {
        currentIndex++;
        timeRemains = timeRemains - 12;
        generateQuestion();
    } else {
        showScore();
    }
};

startButton.addEventListener("click", startFunction);