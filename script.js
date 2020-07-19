
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

let score = 0;
let timeRemaining = 90;
let interval;

const start = document.querySelector("#startBtn");
const timerText = document.querySelector("#timerText");
const question = document.querySelector("#questionText");
const answer1 = document.querySelector("#option1");
const answer2 = document.querySelector("#option2");
const answer3 = document.querySelector("#option3");
const answer4 = document.querySelector("#option4");
const rightOrWrongText = document.querySelector("#rightOrWrong");
const startDiv = document.getElementById("startPage");
const quizDiv = document.getElementById("quizSection");
const hiScoreDiv = document.getElementById("hiScoreSection");

let currentQuestion = 0;
const lastQuestion = questions.length;

let questionDisplayed = questions[0];

function startQuiz() {

    startDiv.style.display = "none";
    quizDiv.style.display = "block";
    interval = setInterval(function () {

        if (timeRemaining > 0) {
            timeRemaining--;
            timerText.textContent = " " + timeRemaining;
        }else{
            endQuiz();
        }


    }, 1000);

    showQuestion();

}

function showQuestion() {

    if (currentQuestion < lastQuestion) {

        questionDisplayed = questions[currentQuestion];

        question.textContent = questionDisplayed.question;
        answer1.textContent = questionDisplayed.optionA;
        answer2.textContent = questionDisplayed.optionB;
        answer3.textContent = questionDisplayed.optionC;
        answer4.textContent = questionDisplayed.optionD;

        console.log(questionDisplayed.optionD);

    }

}

function checkAnswer(button) {

    if(button.target.value === questionDisplayed.answer){
        rightOrWrongText.style.display = "block";
        rightOrWrongText.textContent = "Correct!";
    }else{
        rightOrWrongText.style.display = "block";
        rightOrWrongText.textContent = "Incorrect.";
        timeRemaining -= 5;
    }

    nextQuestion();

}

function nextQuestion(){
    if(currentQuestion<lastQuestion){
        currentQuestion++;
        showQuestion();
    }else{
        endQuiz();
    }
}

function endQuiz(){

}


start.addEventListener("click", startQuiz);
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);