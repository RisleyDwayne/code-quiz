
let questions = [
    {
        question: "The document body consists of ____ that contain data to be stored in the document.",
        optionA: "Variables",
        optionB: "Elements",
        optionC: "Selectors",
        optionD: "Codes",
        answer: "2"
    },
    {
        question: "An array in javascript always begins at index ____.",
        optionA: "x",
        optionB: "1",
        optionC: "null",
        optionD: "0",
        answer: "4"
    },
    {
        question: "What is the meaning of the abbreviation 'DOM'?",
        optionA: "Database Objective Model",
        optionB: "Document Object Management",
        optionC: "Development Output Manager",
        optionD: "Document Object Model",
        answer: "4"
    },
    {
        question: "With which tag pair should all HTML documents begin and end?",
        optionA: "<html></html>",
        optionB: "<body></body>",
        optionC: "<tag></tag>",
        optionD: "<page></page>",
        answer: "1"
    },
    {
        question: "Which element would one use to create an internal style sheet?",
        optionA: "<div>",
        optionB: "<style>",
        optionC: "<p>",
        optionD: "<script>",
        answer: "2"
    },
    {
        question: "The declaration for an ID selector in CSS must be preceded by a ____ symbol.",
        optionA: "$",
        optionB: "<ID>",
        optionC: "#",
        optionD: "<selector>",
        answer: "3"
    },
    {
        question: "Which of the following syntax signifies 'and'?",
        optionA: "$$",
        optionB: "==",
        optionC: "||",
        optionD: "&&",
        answer: "4"
    },
    {
        question: "An 'if' statement is an example of a ____ operation",
        optionA: "conditional",
        optionB: "syntatic",
        optionC: "looping",
        optionD: "objective",
        answer: "1"
    },
    {
        question: "Which of the following is an example of valid CSS syntax?",
        optionA: "#id{}",
        optionB: "header a, p{}",
        optionC: "div h1{}",
        optionD: "all of the above",
        answer: "4"
    },
    {
        question: "Which alert is written in a valid way?",
        optionA: "postAlert();",
        optionB: "<alert></alert>",
        optionC: "alert('text');",
        optionD: "none of the above",
        answer: "3"
    },
];
let timeRemaining = 90;
let interval;
let score = 100;

let scoresArray = localStorage.getItem("savedScores");

const start = document.querySelector("#startBtn");
const timerText = document.querySelector("#timerText");
const question = document.querySelector("#questionText");
const answer1 = document.querySelector("#option1");
const answer2 = document.querySelector("#option2");
const answer3 = document.querySelector("#option3");
const answer4 = document.querySelector("#option4");
const scoreList = document.querySelector("#hiScoreList");
const rightOrWrongText = document.querySelector("#rightOrWrong");
const initialsInput = document.querySelector("#inputInitials");
const finalScore = document.querySelector("#finalScore");
const submitBtn = document.querySelector("#submit");
const clearBtn = document.querySelector("#clearHiScoreBtn");
const newQuizBtn = document.querySelector("#newQuizBtn");
const startDiv = document.getElementById("startPage");
const quizDiv = document.getElementById("quizSection");
const hiScoreDiv = document.getElementById("hiScoreSection");
const quizEndDiv = document.getElementById("quizEndSection");
const hiScoreNav = document.getElementById("hiScoreNav");
const newQuizNav = document.getElementById("newQuizNav");


let currentQuestion = 0;
const lastQuestion = questions.length - 1;

let questionDisplayed = questions[0];

// initializes display and quiz logic
function startQuiz() {

    hiScoreDiv.style.display = "none";
    newQuizNav.style.display = "none";
    hiScoreNav.style.display = "block";
    startDiv.style.display = "none";
    quizDiv.style.display = "block";
    rightOrWrongText.style.display = "none";
    
    timeRemaining = 90;
    currentQuestion = 0;

    interval = setInterval(function () {

        if (timeRemaining > 0) {
            timeRemaining--;
            timerText.textContent = " " + timeRemaining;
        } else {
            endQuiz();
        }


    }, 1000);

    showQuestion();

}

//displays next question if there are more to answer
function showQuestion() {

    if (currentQuestion <= lastQuestion) {

        console.log(currentQuestion);
        questionDisplayed = questions[currentQuestion];

        question.textContent = questionDisplayed.question;
        answer1.textContent = questionDisplayed.optionA;
        answer2.textContent = questionDisplayed.optionB;
        answer3.textContent = questionDisplayed.optionC;
        answer4.textContent = questionDisplayed.optionD;

    }

}

//compares user input to correct answer
function checkAnswer(button) {

    if (button.target.value === questionDisplayed.answer) {
        rightOrWrongText.style = "color: green";
        rightOrWrongText.style.display = "block";
        rightOrWrongText.textContent = "Correct!";
    } else {
        rightOrWrongText.style = "color: red";
        rightOrWrongText.style.display = "block";
        rightOrWrongText.textContent = "Incorrect.";
        timeRemaining -= 5;
        score -= 10;
    }

    nextQuestion();

}

//determines whether more questions are to be displayed
function nextQuestion() {

    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        showQuestion();
    } else {
        endQuiz();
    }
}

//moves on to initals entry screen
function endQuiz() {

    clearInterval(interval);
    startDiv.style.display = "none";
    quizDiv.style.display = "none";
    quizEndDiv.style.display = "block";
    finalScore.textContent = "Your final score is " + score + " out of 100.";

}

//shows stored scores
function displayHighScores() {
    quizEndDiv.style.display = "none";
    startDiv.style.display = "none";
    quizDiv.style.display = "none";
    hiScoreDiv.style.display = "block";
    newQuizNav.style.display = "block";
    hiScoreNav.style.display = "none";

    
        updateHighScores();
    
}

//pushes new score to localStorage 
function saveScore() {


    
    if (!scoresArray) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(scoresArray);
    }
    if (currentQuestion === lastQuestion) {
    const initials = document.getElementById("inputInitials").value;
    let userScore = { initials, score };
    scoresArray.push(userScore);
    localStorage.setItem("savedScores", JSON.stringify(scoresArray));
    }
}

function updateHighScores() {

    if (!scoresArray) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(scoresArray);
    }

    scoresArray.sort(function (a, b) {
        return b.score - a.score;
    });


    for (var i = 0; i < scoresArray.length; i++) {
        let li = document.createElement("li");

        li.textContent = scoresArray[i].initials.toUpperCase() + " " + "-" + " " + scoresArray[i].score;
        scoreList.appendChild(li);
    }

}

//listeners
start.addEventListener("click", startQuiz);
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    saveScore();
    displayHighScores();
});
hiScoreNav.addEventListener("click", function () {
    clearInterval(interval);
    displayHighScores();
});
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    scoreList.innerHTML = "";
});
newQuizNav.addEventListener("click", startQuiz);
newQuizBtn.addEventListener("click", startQuiz);