const openQuiz = document.querySelector(".btn__openquiz");
const quizRules = document.querySelector(".quiz__rules"); 
const btnContinue = document.querySelector(".btn__continue");
const questions = document.querySelector(".questions");
const btnNext = document.querySelector(".btn__next");
const btnQuit = document.querySelector(".result__quiz_quit");
const resultQuiz = document.querySelector(".result__quiz");
const options_items = document.querySelectorAll(".option"); 
const timetag = document.querySelector(".que__time__numb"); 
const timeleft = document.querySelector(".que__time__left");

import { loadQuestions } from './services/api.js'
import { addQuestions, resetOptions } from './addQ_resetQ.js'
import { showResultBox, queNumber } from './showResults.js'
import { seconds, countersecond } from './count/countDown.js'

loadQuestions().then(res=>{
 let quesArr = res
  console.log(quesArr)

let userScore = 0
let number = 1; 
let quesNumb = 0; 
let QueCount = 0;

openQuiz.addEventListener("click",()=>{
  quizRules.classList.add("quiz__rules-active"); 
}) 
btnQuit.addEventListener("click",()=>{
  resultQuiz.classList.remove("result__quiz-active");
  window.location.reload(); 
})
btnContinue.addEventListener("click",()=>{
  quizRules.classList.remove("quiz__rules-active");
  questions.classList.add("questions-active");   
  addQuestions(0, quesArr); 
  queNumber(number,quesArr);
  btnNext.style.display = "none"; 
  seconds(15, quesArr, QueCount); 
})
btnNext.addEventListener("click",()=>{
  
  if(quesNumb < quesArr.length -1){
  quesNumb ++;
  addQuestions(quesNumb, quesArr);
  number++; 
  queNumber(number,quesArr);
  QueCount++;  
  resetOptions(); 
  clearTimeout(countersecond);  
  seconds(15, quesArr, QueCount); 
  timetag.textContent = "15";
  timeleft.textContent = "time left";

}else{
  console.log("Questions Completed");
  showResultBox(userScore, quesArr); 
}
btnNext.style.display = "none";
});

const optionSelected =(answer)=>{
  let correctAns = quesArr[QueCount].correct_answer; 
  let userAns = answer.textContent.trim();   
  
  if(correctAns === userAns){   
    userScore++;
    console.log("respuesta correcta"); 
    answer.classList.add("option-correct");
  }else{
    console.log("Respuesta Incorrecta"); 
    answer.classList.add("option-incorrect");
  }
  for(let i =0; i<options_items.length; i++){
    options_items[i].classList.add("disabled");
  }
   clearTimeout(countersecond); 
  btnNext.style.display = "block"; 
}

addQuestions(quesNumb, quesArr, optionSelected)

resetOptions()

})