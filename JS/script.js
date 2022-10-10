// gonna need some variables here:
var questions = [


    {
        question: "question",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },

    {
        question: "question 2",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },

    {
        question: "question 3",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },

    {
        question: "question 4",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "question 5",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "question 6",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "question 7",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    }
]
var questionIndex = 0;

var startArea = document.querySelector(".start");
var startButton = document.querySelector(".startButton");
var quizArea = document.querySelector(".quiz");
startButton.addEventListener("click", function () {
    startArea.style.display = "none"
    quizArea.style.display = "block"
    displayQuestion()
    quizTimer()
})
function displayQuestion() {
    if (questionIndex === questions.length){
        quizArea.style.display = "none"
        clearInterval(timer)
        return
    }
    document.querySelector(".questionText").innerText = questions[questionIndex].question
    document.querySelector(".button1").innerText = questions[questionIndex].choices[0]
    document.querySelector(".button2").innerText = questions[questionIndex].choices[1]
    document.querySelector(".button3").innerText = questions[questionIndex].choices[2]
    document.querySelector(".button4").innerText = questions[questionIndex].choices[3]
}

function answerQuestion(event){
    var choice=event.target.innerText
    var correct=questions[questionIndex].answer
    if (choice === correct){
        questionIndex++
        displayQuestion()
    } else {
        questionIndex++
        time= time-10
        displayQuestion()
    }
}

var timer
var time =60
function quizTimer(){
    timer=setInterval(function(){
        if (time >0){
            time=time-1
            document.querySelector(".time").innerText = time
        }
    },1000)
}

document.querySelector(".button1").addEventListener("click", answerQuestion)
document.querySelector(".button2").addEventListener("click", answerQuestion)
document.querySelector(".button3").addEventListener("click", answerQuestion)
document.querySelector(".button4").addEventListener("click", answerQuestion)
// var timerEl = document.querySelector(".timer-count");
// var startButton = document.querySelector(".start-button");
//vars for correct and incorrect?

// init function when page loads

//startQuiz function called when start button is clicked

//setTimer function starts and stops the timer and calls score results when timer=0

//functions used by init for high score storage and display

// tests if button clicked is correct answer

//var [questionIndex]

// counts number of correct answers for score

//event listener for clicks on buttons

//event listener 

//test if button clicked is correct answer, add point if correct, add zero if not

//event listener for start button to call startQuiz function
// document.addEventListener("click", function(event) {
    // If the count is zero, exit function
 //   if (timerCount === 0) {
  //    return;
  //  }

  //call init() so it runs when page is opened
//init(); 