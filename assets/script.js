var questions = [
  { //index0
    title: "Which symbol terminates a block of JavaScript code?",
    choices: ["period", "curly brackets", "semi-colon", "comma"],
    answer: "semi-colon"
  },
  { //index1
    title: "Which operator indicates that two values are not equal?",
    choices: ["!==", "/", "===", "=/="],
    answer: "!=="
  },
  { //index2
    title: "Which of the following styles can NOT be used to name variables that contain more than one word?",
    choices: ["UpperCamelCase", "lowerCamelCase", "alllowercase", "use-dashes"],
    answer: "use-dashes"
  },
  { //index3
    title: "Objects can be populated by which of the following?",
    choices: ["methods", "numbers", "arrays", "all of the above"],
    answer: "all of the above"
  },
  { //index4
    title: "How would you refer to the value 'yellow' in the given array?   --  var colors = ['red', 'pink', 'yellow', 'white'];",
    choices: ["colors(yellow)", "colors[3]", "colors[2]", "colors[yellow]"],
    answer: "colors[2]"
  },
  { //index5
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<footer>", "<style>", "<script>", "<javascript>"],
    answer: "<script>"
  }, 
  { //index6
    title: "How do you create a function in JavaScript?",
    choices: ["function newFunction()", "var function = newFunction()", "newFunction = ()", "create.newFunction"],
    answer: "function newFunction()"
  }, 
  { //index7
    title: "What is needed to create a for loop?",
    choices: ["for(var i = 0; i < array.length; i++)", "4.loop()", "var for = (0, array.length, i++)", "for(var i = 0 i < array.length i++)"],
    answer: "for(var i = 0; i < array.length; i++)"
  }, 
  { //index8
    title: "How do you create a comment in JavaScript?",
    choices: ["<!--This is a comment-->", "**Comment here**", "--My Comment", "//This is my comment"],
    answer: "//This is my comment"
  }, 
  { //index9
    title: "Java is a nickname of JavaScript.",
    choices: ["true", "false"],
    answer: "false"
  },
]

// variable to keep track of quiz state
var currentQuestionIndex = 0;
var secondsLeft = 60;
var userScore = 0;
// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var scoreEl = document.getElementById("final-score");

//Listen for click on start button to start timer. 
startBtn.addEventListener("click", function (event) {
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
  i.choices.forEach(function (choice) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute('class', 'choice');
    choiceBtn.setAttribute('value', choice);
    choiceBtn.textContent = choice;
    choicesEl.appendChild(choiceBtn);
    choiceBtn.onclick = chooseAnswer;
  })
};

//Timer starts countdown, if it reaches 0 it goes to enterScore
var timerInterval = 0
function startTimer() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's Up!");
      enterScore();
    }
  }, 1000);
};

// // WHEN I answer a question THEN I am presented with another question
function chooseAnswer() {
  if (this.value === questions[currentQuestionIndex].answer) {
    userScore = userScore + 1;
    // console.log(userScore);
    var correct = document.createElement("h6");
    feedbackEl.textContent = correct;
    correct.innerText = "That's Correct!";
    correct.setAttribute('style', 'color: light grey; font-style: italic');

  } else {
    // WHEN I answer a question incorrectly THEN time is subtracted from the clock
    secondsLeft = secondsLeft - 5;
    // console.log(userScore);
    var incorrect = document.createElement("h6");
    feedbackEl.appendChild(incorrect);
    incorrect.textContent = "That's Incorrect!";
    incorrect.setAttribute('style', 'color: light grey; font-style: italic');

  };

  currentQuestionIndex = currentQuestionIndex + 1;
  if (currentQuestionIndex !== questions.length) {
    grabQuestion();
    // WHEN all questions are answered or the timer reaches THEN the game is over
  } else {
    clearInterval(timerInterval);
    secondsLeft = 0;
    enterScore();
  }
};

function enterScore() {
  var endScreen = document.getElementById("end-screen");
  questionsEl.setAttribute("class", "hide");
  endScreen.removeAttribute("class");
  scoreEl.innerText = userScore;
  
}
// // WHEN the game is over THEN I can save my initials and score
function submitScore() {
  //get local storage
  var highscores = JSON.parse(localStorage.getItem("highscores"));
  //create object
  console.log(highscores);
  if (highscores === null) {
    highscores = [];
  };
  var newScore = {
  initials: initialsEl.value,
  score: userScore
  };
  //push obj on array
  highscores.push(newScore);
  //sort array
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });
  //set new array to local stor
  localStorage.setItem("highscores", JSON.stringify(highscores));
  //go to highscores.html
  window.location.href = "assets/highscores.html";
}

submitBtn.addEventListener('click', submitScore)

var highscores = [
  { initials: "", score: 0 },
  { initials: "", score: 0 },
  { initials: "", score: 0 },
  { initials: "", score: 0 },
  { initials: "", score: 0 }
];

