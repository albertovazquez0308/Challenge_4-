
const startingMinutes = 1; 
let time = startingMinutes * 60; 

const countdownEl = document.getElementById('timer'); 

setInterval(updateCountdown, 1000); 

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds; 

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
  
  if(time < 0) {
    clearInterval(1);
    console.log('Ding');
  }
}

const quizContainer = document.getElementById("quiz");
const timerBox      = document.getElementById("timer");
const resultsBox    = document.getElementById("results");
const submitBtn     = document.getElementById("submit");

const quizQuestions = [  

    {  
    question: "What are the five primitive data types?",
    answers: {
        a: "strings, numbers, booleans, arrays, objects",
        b: "numbers, cords, pools, objects, arrows",
        c: "strings, numbers, booleon, arrangements, objectives"
        },
    correctAnswer: "a"
    },

    { 
      question: "What data type yields true/false?",
      answers: {
        a: "string",
        b: "boolean",
        c: "array"
        },
      correctAnswer: "b"
    },

    { 
      question: "How do you see your result in devTools?",
      answers: {
          a: "display.view(result);",
          b: "council.log(result);",
          c: "console.log(result);"
        },
      correctAnswer: "c"
    },
    
    { 
      question: "How do you call a function?",
      answers: {
          a: "functionName();",
          b: "callFunction();",
          c: "execute(functionName());"
        },
      correctAnswer: "a"
    },

    { 
      question: "What is the index number of coffee in drinks array? drinks=[tea, coffee, water];?",
      answers: {
          a: "0",
          b: "4-9",
          c: "1"
        },
      correctAnswer: "c"
    },      
]; 

(function() {

  function generateQuiz(){

  const output = []; 

  quizQuestions.forEach(
    (currentQuestion, questionNumber) => {

      const answers = [];

      for(letter in currentQuestion.answers){

        answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} : ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      
      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
          </div>`
      );
    }
  );
  quizContainer.innerHTML = output.join('');
  }

  function showResults(){

  const answerContainers = quizContainer.querySelectorAll("#score");

  let numbCorrect = 0;

  quizQuestions.forEach( (currentQuestion, questionNumber) => {

    const answerContainers = answerContainers[questionNumber]; 
    const selector = `input[name=question${questionNumber}]:checked`; 
    const userAnswer = (answerContainer.querySelector(selector)|| {}).value; 

    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;

      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`; 
  }

  function showSlide(n) {


  slides[currentSlide].classList.remove('current-slide');

  slides[n].classList.add('current-slide'); 

  currentSlide = n;

  if(currentSlide === 0){ 
    backBtn.style.display = 'none';
  }

  else{ 
    backBtn.style.display = 'inline-block';
  }

  if(currentSlide === slides.length-1){
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';
  }

  else{
    nextBtn.style.display = 'inline-block';
    submitBtn.style.display = 'none';
  }
  }

  function showNextSlide(){
  showSlide(currentSlide + 1);
  }

  function showPreviousSlide(){
  showSlide(currentSlide - 1);
  }




  generateQuiz();

  const backBtn = document.getElementById("back");
  const nextBtn = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;


  showSlide(currentSlide);

  submitBtn.addEventListener("click", showResults);
  backBtn.addEventListener("click", showPreviousSlide);
  nextBtn.addEventListener("click", showNextSlide);

})();
