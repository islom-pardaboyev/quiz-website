"use strict";

const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");

startBtn.addEventListener("click", () => {
  popupInfo.classList.add("active");
  main.classList.add("active");
});

exitBtn.addEventListener("click", () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
});

continueBtn.addEventListener("click", () => {
  quizSection.classList.add("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");

  showQuestion(0);
  questionCounter(1);
});

let questionCount = 0;
let questionNumber = 1;
let userScore = 0;

const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestion(questionCount);

    questionNumber++;
    questionCounter(questionNumber);
  } else {
    console.log("Question Completed");
  }
});

const optionList = document.querySelector(".option-list");

function showQuestion(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTag = "";
  questions[index].options.forEach((option, i) => {
    optionTag += `<div class="option" data-index="${i}"> <span>${option}</span></div>`;
  });
  optionList.innerHTML = optionTag;

  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      optionSelected(option);
    });
  });
}

function optionSelected(answer) {
  const userAnswer = answer.textContent.trim();
  const correctAnswer = questions[questionCount].answer;
  const allOptions = document.querySelectorAll(".option");

  if (userAnswer === correctAnswer) {
    answer.classList.add("correct");
    userScore++;
    headerScore()
  } else {
    answer.classList.add("incorrect");
    allOptions.forEach((option) => {
      if (option.textContent.trim() === correctAnswer) {
        option.classList.add("correct");
      }
    });
  }

  allOptions.forEach((option) => {
    option.classList.add("disabled");

    nextBtn.classList.add("active");
  });
}

function questionCounter(index) {
  const questionTotal = document.querySelectorAll(".question-total");
  questionTotal.forEach((total) => {
    total.textContent = `${index} of ${questions.length} Questions`;
  });
}

function headerScore() {
  const headerScoreText = document.querySelector('.header-score');
  headerScoreText.textContent = `Your Score: ${userScore} / ${questions.length}`;
}