const options_items = document.querySelectorAll(".option"); 

export const addQuestions = (quesNumb, quesArr='', optionSelected)=>{
    //console.log(quesArr)
    //console.log(quesNumb)
    const questions_item = document.querySelector(".que__item");
 
     let correctAnswer = quesArr[quesNumb].correct_answer; 
     let incorrectAnswer = quesArr[quesNumb].incorrect_answers;
     let optionsList = incorrectAnswer;
     //creando un numero aleatorio entre 0 y 3 para poner la respuesta correcta aleatoria. 
     optionsList.splice(Math.floor(Math.random()*(incorrectAnswer.length)), 0, correctAnswer);
     
    const quetext = `${quesNumb +1}. `+ `${quesArr[quesNumb].question}`;
    questions_item.innerHTML = quetext; 
     
    for(let i = 0; i< options_items.length; i++){
      options_items[i].textContent = optionsList[i];
      options_items[i].addEventListener("click", (e)=>{ 
          optionSelected(e.target) 
          e.stopImmediatePropagation()
       console.log(e.bubbles, e.cancelBubble)
       });
     }
   }
export const resetOptions =()=>{
    for(let i = 0; i< options_items.length; i++){
      options_items[i].classList.remove("option-incorrect");
      options_items[i].classList.remove("option-correct"); 
      options_items[i].classList.remove("disabled"); 
    }
  }
  