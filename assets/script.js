var questions = [
    { //index0
      title: "Which symbol terminates a block of JavaScript code?",
      choices: ["period", "curly brackets", "semi-colon", "comma"],
      answer: "semi-colon"
    },
    { //index1
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    { //index2
      title: "Which of the folowing styles can NOT be used to name variables that contain more than one word?",
      choices: ["Upper camel case", "Lower camel case", "Underscore", "Dash"],
      answer: "Dash"
    },
    { //index3
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    { //index4
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
]

// variables to keep track of quiz state
var currentQuestionIndex = 0;
// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

var secondsLeft = 60;

//Listen for click on start button to start timer. 
startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    startQuiz();
    startTimer();
});
// THEN I am presented with a question and start screen disappears
function startQuiz() {
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    //a function that grabs a question from the array
}
// WHEN I click the start button, timer starts countdown
function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's Up!")
        }
    }, 1000);
}
// Declare a function that will populate the page with the questions
var questionTitle = document.getElementById("question-title");
var x = (i = 0, i < questions.length, i++) 
function printQuestion(x) {
    questionsTitle.textContent(questions.title);
    choicesEl.setAttribute("button", questions.choices);
}



// // WHEN I answer a question
// // THEN I am presented with another question
// // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock
// // WHEN all questions are answered or the timer reaches 0
// // THEN the game is over
// // WHEN the game is over
// // THEN I can save my initials and score
// // Start game button

// addEventListener("click", startQuiz());
