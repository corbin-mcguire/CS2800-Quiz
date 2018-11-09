"use strict";
/**
 * Gets the answers from the form.
 */
var getAns = function () {
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
 * @param {Array} ans 
 */
var getNumCorrect = function (ans) {
    var numCorrect = 0;
    for (var i = 0; i < 5; i++) {
        if (ans[i] == "correct") {
            numCorrect++;
        }
    }
    return numCorrect;
};

/**
 * Shows the results to the user.
 * @param {number} nc number correct
 */
var showResults = function (nc) {
    // Show score
    document.getElementById("resultsP").innerHTML = "Score: " + nc + "/5 " + "- " + ((nc / 5) * 100) + "&percnt;";

    // Get a list of spans that display the correct answers.
    var status = document.getElementsByClassName("answerStatus");
    // Get user answers for comparison.
    var a = getAns();

    /* Iterate through the HTML elements that have class "answerStatus". These  elements will only be shown if the user's answers do not match the     answer key. */
    for (var i = 0; i < status.length; i++) {
        if (a[i] != "correct") {
            status[i].style.display = "block"; // Elements hidden by default.
        } else {
            status[i].style.display = "none";
        }
    }
};

window.onload = function () {
    // On submit
    document.getElementById("submitQuiz").onclick = function () {
        var answers = getAns();
        var score = getNumCorrect(answers);
        showResults(score);
    };
};