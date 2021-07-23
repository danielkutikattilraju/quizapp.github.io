const quizData=[
  {
    question:'A light sensitive device that converts drawing, printed text or other images into digital form is',
    a:'Scanner',
    b:'Printer',
    c:'Monitor',
    d:'CPU',
    correct:'a'
  },
  {
    question:'Which protocol provides e-mail facility among different hosts?',
    a:'htps',
    b:'tcp',
    c:'Ftp',
    d:'Smtp',
    correct:'d'
  },
  {
    question:'The basic architecture of computer was developed by',
    a:'Charles Babbage',
    b:'John Von Neumann',
    c:'Blaise Pascal',
    d:'Steve jobs',
    correct:'b'
  },
  {
    question:'In order to tell Excel that we are entering a formula in cell, we must begin with an operator such as',
    a:'+',
    b:'-',
    c:'=',
    d:'==',
    correct:'c'
  },
  {
    question:'In how many generations a computer can be classified?',
    a:'3',
    b:'5',
    c:'4',
    d:'6',
    correct:'b'
  }
];
const answerEls=document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text =document.getElementById("a_text");
const b_text =document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const d_text =document.getElementById("d_text");
const submitBtn=document.getElementById("subBtn");
const quiz=document.getElementById("quiz");
let currentQuiz=0;
let score=0;

var answers=document.getElementsByClassName("answer");

loadQuiz();
function loadQuiz(){
  deselectAnswers(); 
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText=currentQuizData.question;
  a_text.innerText=currentQuizData.a
  b_text.innerText=currentQuizData.b
  c_text.innerText=currentQuizData.c
  d_text.innerText=currentQuizData.d
  
}



function getSelected(){
  // const answerEls=document.querySelectorAll(".answer");
  let answer=undefined;
  answerEls.forEach((answerEl)=>{
    if(answerEl.checked){
      answer = answerEl.id;

    }
  });
  return answer;
}

function deselectAnswers(){
  answerEls.forEach((answerEl) => {
    answerEl.checked=false;

  });

}

submitBtn.addEventListener("click",()=>{
  const answer=getSelected();
       
 
 
  if(answer)
  {
    if(answer===quizData[currentQuiz].correct){
      score++;
    }
    currentQuiz++;
    if(currentQuiz<quizData.length){
      loadQuiz();
      }else{
        quiz.innerHTML=`<h2> ${score}/${quizData.length} This is the score you scored.</h2>
        <button onClick="location.reload()">Retake quiz</button>`;
      }
  }
});