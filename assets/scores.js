function populateHighscores() {
    var highscores = JSON.parse(localStorage.getItem("highscores"));
    var table = document.getElementById('table');
    for (var i = 0; i < highscores.length; i++){
      var tr = document.createElement("tr");
      table.appendChild(tr);
      tr.textContent =  (i + 1) + ".  " + highscores[i].initials + " --- " + highscores[i].score;
    }
};

var backBtn = document.getElementById('go-back');
function goBack(){
    window.location.href = "../index.html";
};

var clearBtn = document.getElementById('clear-scores');
function clearScores(){
    localStorage.clear();
};

clearBtn.addEventListener('click', clearScores);
backBtn.addEventListener('click', goBack);
populateHighscores();
