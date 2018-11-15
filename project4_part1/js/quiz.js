"use strict";
/**
 * Gets the answers from the form.
 */
var getAns = function() {
  validateAnswers();
  var userAnswers = []; // Store all question values in an array.
  // TODO: Add some input validation to make sure that the radios won't be null.
  var q1 = document.querySelector("input[name='q1']:checked").value;
  userAnswers.push(q1);
  var q2 = document.querySelector("input[name='q2']:checked").value;
  userAnswers.push(q2);
  var q3 = document.querySelector("input[name='q3']:checked").value;
  userAnswers.push(q3);
  var q4 = document.querySelector("input[name='q4']:checked").value;
  userAnswers.push(q4);
  var q5 = document.querySelector("input[name='q5']:checked").value;
  userAnswers.push(q5);
  return userAnswers;
};

/**
 * Returns the number of questions the user got correct.
 * @param {Array} answers
 */
var getNumCorrect = function(answers) {
  var numCorrect = 0;
  for (var i = 0; i < 5; i++) {
    if (answers[i] == "correct") {
      numCorrect++;
    }
  }
  return numCorrect;
};

/**
 * Shows the results to the user.
 * @param {number} nc number correct
 */
var showResults = function(name) {
  // Get number of questions correct
  var nc = getNumCorrect(getAns());
  // Show score
  document.getElementById("resultsP").innerHTML =
    name + "'s " + "Score: " + nc + "/5 " + "- " + (nc / 5) * 100 + "&percnt;";

  // Get a list of spans that display the correct answers.
  var status = document.getElementsByClassName("answerStatus");
  // Get user answers for comparison.
  var a = getAns();

  /* Iterate through the HTML elements that have class "answerStatus". */
  for (var i = 0; i < status.length; i++) {
    if (a[i] != "correct") {
      status[i].innerHTML = "Incorrect";
      status[i].style.display = "block"; // Elements hidden by default.
    } else {
      status[i].style.display = "none";
    }
  }
};

var getUsername = function() {
  var name = prompt("What is your name?");
  while (name == "") {
    name = prompt("What is your name?");
  }
  return name;
};

var validateAnswers = function() {
  if (document.querySelector("input[name='q1']:checked") == null) {
    document.getElementById("q1AnswerStatus").innerHTML = "Answer Required.";
    document.getElementById("q1AnswerStatus").style.display = "block";
  }
  if (document.querySelector("input[name='q2']:checked") == null) {
    document.getElementById("q2AnswerStatus").innerHTML = "Answer Required.";
    document.getElementById("q2AnswerStatus").style.display = "block";
  }
  if (document.querySelector("input[name='q3']:checked") == null) {
    document.getElementById("q3AnswerStatus").innerHTML = "Answer Required.";
    document.getElementById("q3AnswerStatus").style.display = "block";
  }
  if (document.querySelector("input[name='q4']:checked") == null) {
    document.getElementById("q4AnswerStatus").innerHTML = "Answer Required.";
    document.getElementById("q4AnswerStatus").style.display = "block";
  }
  if (document.querySelector("input[name='q5']:checked") == null) {
    document.getElementById("q5AnswerStatus").innerHTML = "Answer Required.";
    document.getElementById("q5AnswerStatus").style.display = "block";
  }
};

window.onload = function() {
  var name = getUsername();
  // On submit
  document.getElementById("submitQuiz").onclick = function() {
    var answers = getAns();
    var score = getNumCorrect(answers);
    showResults(name);
  };
};
