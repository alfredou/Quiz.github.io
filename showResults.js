const questions = document.querySelector(".questions");
const completed = document.querySelector(".completed");
const resultQuiz = document.querySelector(".result__quiz");
const que__number = document.querySelector(".que__number");

export const showResultBox = (userScore, quesArr)=>{
    questions.classList.remove("questions-active");     
    resultQuiz.classList.add("result__quiz-active"); 
    let tag = `<span>and you, got ${userScore}<span>of</span>${quesArr.length}</span>`;
    let tag2 = `<span>So bad you have to improve</span>`;
    let tag3 = `<span>Regular</span>`;
    let tag4 = `<span>Good</span>`;
    let tag5 = `<span>Very well</span>`;

    if(userScore < 7){
      completed.insertAdjacentHTML("beforeend", tag);
      completed.insertAdjacentHTML("beforeend", tag2);
    }else if(userScore == 7){
      completed.insertAdjacentHTML("beforeend", tag);
      completed.insertAdjacentHTML("beforeend", tag3);
    }else if(userScore == 8 || userScore == 9){
      completed.insertAdjacentHTML("beforeend", tag);
      completed.insertAdjacentHTML("beforeend", tag4);  
    }else if(userScore == 10){
      completed.insertAdjacentHTML("beforeend", tag);
      completed.insertAdjacentHTML("beforeend", tag5);  
    }
  }
export const queNumber = (item, quesArr)=>{
    const numbers = `<span>${item} <p> of </p> ${quesArr.length}</span>`;
    que__number.innerHTML = numbers;    
  }