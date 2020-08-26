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
var questionTitle = document.getElementById("question-title");
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
  grabQuestion();
  startTimer();
});
// THEN I am presented with a question and start screen disappears
function startQuiz() {
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    //a function that grabs a questiontitle from array and populate questionTitle
};

function grabQuestion() {
  questionTitle.textContent = questions[currentQuestionIndex].title;
  var i = questions[currentQuestionIndex];
  choicesEl.innerHTML = "";
  i.choices.forEach(function (choice, i) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute('class', 'choice');
    choiceBtn.setAttribute('value', choice);
    choiceBtn.textContent = choice;
    choicesEl.appendChild(choiceBtn);
    choiceBtn.onclick = chooseAnswer;
  })
};
// WHENI click the start button, timer starts countdown
function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's Up!")
        }
    }, 1000);

};

// // WHEN I answer a question THEN I am presented with another question
function nextQuestion() {
};
function chooseAnswer(event) {
  
  if (this.value === questions[currentQuestionIndex].answer) {
    // console.log('correct');
    var correct = document.createElement("h6");
    choicesEl.appendChild(correct);
    correct.textContent = "That's Correct!";
    
  } else {
    var incorrect = document.createElement("h6");
    choicesEl.appendChild(incorrect);
    incorrect.textContent = "That's Incorrect!";
    // console.log("nope");
  }
  currentQuestionIndex = currentQuestionIndex + 1;
  if (currentQuestionIndex !== questions.length) {

    grabQuestion();
  } else {
    enterScore();
}
};

function enterScore() {
  alert("Quiz is Over!")
}
// // WHEN I answer a question incorrectly THEN time is subtracted from the clock
// // WHEN all questions are answered or the timer reaches THEN the game is over
// // WHEN the game is overTHEN I can save my initials and score
var highscores = [
  { initials: "", score: 0 },
  { initials: "", score: 0 },
  { initials: "", score: 0 },
  { initials: "", score: 0 },
  { initials: "", score: 0 },
];
//return in descending order of score
highscores.sort(function(a,b) {
  return b.score - a.score;
})
// // Start game button

