 export const loadQuestions = async ()=>{
        let consulta = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"); 
        let pregunta = await consulta.json(); 
        let quesArr = []

        if(consulta.status == 200){
          return quesArr = pregunta.results;          
          console.log(quesArr); 
        }else{
          console.log("un error ocurrio"); 
         } 
        }    

/*export const loadQuestions = ()=>{
     let consulta = fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple");
     return consulta.then(res=> res.json()).catch(e=>console.log("ocurrio un error")) 
     }*/
        