const timetag = document.querySelector(".que__time__numb"); 
const timeleft = document.querySelector(".que__time__left");
const options_items = document.querySelectorAll(".option"); 
const btnNext = document.querySelector(".btn__next");

let allOptions = options_items.length;

let countersecond;    
const seconds = (second, quesArr, QueCount)=>{
  let correct = quesArr[QueCount].correct_answer;
  countersecond = setInterval(time, 1000);
  function time(){
    timetag.textContent = second; 
    second--; 
    if(second < 9){
      let zero = timetag.textContent;  
      timetag.textContent = "0" + zero;
     }
    if(second < 0){
      timetag.textContent = "00";
      timeleft.textContent = "time out";
      clearTimeout(countersecond); 
      for(let i =0; i<allOptions; i++){
        options_items[i].classList.add("disabled");
        if(correct == options_items[i].textContent){ 
          options_items[i].classList.add("option-correct");
        }
      } 
      btnNext.style.display = "block"; 
    }
  } 
}
export {seconds, countersecond}