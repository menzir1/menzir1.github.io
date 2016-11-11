var qNum = 1;
function gamestart(){
  

function answerBus5() {
  alert("You get home, amazing...");
}
function answerTrain2(){
  alert("you run too quick and trip on to the track and you get run over")
}
function wrongAnswer5() {
  alert("you run late for the train and trip on to the tracks unfortunately, a train comes... gg m8");
}

function answerBus() {
  alert("ok");
  qNum = 1;
  nextQuestion();
}

function wrongAnswer4() {
  alert("you punch him straght across the face and it knocks him out, the guards grab you and you get fired");
}

function wrongAnswer2() {
  alert("The maniac bus driver had a bad day and ended up drinking loads of beer and is drunk and ends up sending you to the hospital");
}

function answerBus1() {
  alert("Ok...One Hour later.");
  qNum = 2;
  nextQuestion();
}

function answerBus3() {
  alert("You leave the bus and as soon as you leave the traffic begins to move");
  qNum = 3;
  nextQuestion();
}
function answerBus2(){
  alert("Your boss is happy that you get to work on time :), you did gr8 you got 1000 dollars")
  qNum =7;
  nextQuestion();
}
function answerBus4() {
  alert("You resist the urge to punch him and carry on with your work. you lose gg m8");
}

function nextQuestion() {
  switch (qNum) {
    case 1:
      document.getElementById("main").style.display = "none";
      document.getElementById("busq1").style.display = "inherit";
      document.getElementById("mainAnswer").style.display = "none";
      document.getElementById("busq1A").style.display = "inherit";
      break;

    case 2:
      document.getElementById("busq1").style.display = "none";
      document.getElementById("busq2").style.display = "inherit";
      document.getElementById("busq1A").style.display = "none";
      document.getElementById("busq2A").style.display = "inherit";
      break;

    case 3:
      document.getElementById("busq2").style.display = "none";
      document.getElementById("busq3").style.display = "inherit";
      document.getElementById("busq2A").style.display = "none";
      document.getElementById("busq3A").style.display = "inherit";
      break;
    case 4:
      document.getElementById("busq3").style.display = "none";
      document.getElementById("busq4").style.display = "inherit";
      document.getElementById("busq3A").style.display = "none";
      document.getElementById("busq4A").style.display = "inherit";
      break;
              }
}
}