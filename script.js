// menue variables
var startMenu = document.getElementById("start");
var startButton = document.getElementById("startbtn");

// variables that make up the quiz itself
var theQuiz = document.getElementById("quiz");
var stopWatch = document.getElementById("clock");
var quizQuestions = document.getElementById("questions");
var solutions = document.getElementById("solution");
// choices
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");

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
        correct: "a"
    },
    {
        question: "Arrays in javascript can be used to store ___",
        answerA: "numbers and strings",
        answerB: "other arrays",
        answerC: "booleans",
        answerD: "all of the above",
        correct: "d"
    },
    {
        question: "String values must be enclosed within ___ when assigned to variables.",
        answerA: "commas",
        answerB: "curly braces",
        answerC: "quotes",
        answerD: "square brackets",
        correct: "b"
    },
    {
        question: "String values must be enclosed in ___.",
        answerA: "double quotes",
        answerB: "single quotes",
        answerC: "both a and b",
        answerD: "none of the above",
        correct: "c"
    },
    {
        question: "The condition of an if / else statement is closed within ___",
        answerA: "quotes",
        answerB: "curly brackets",
        answerC: "parentheses",
        answerD: "square bracketts",
        correct: "c"
    }
];
