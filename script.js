const quizData = [
    {
        question: "Which language runs in a web browser ?",
        a: "Java",
        b: "C",
        c: "python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Which does CSS stand for ?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cascading Scripting Sheets",
        correct: "b"
    },
    {
        question: "What does SASS stands for ?",
        a: "Super Awesome Scripting Sheets",
        b: "Syntactically Awesome Scripting Sheets",
        c: "Syntactically Awesome Style Sheets",
        d: "Super Awesome Style Sheets",
        correct: "c"
    },
    {
        question: "Which one is a server-side Language?",
        a: "React JS",
        b: "Angular JS",
        c: "Node JS",
        d: "Angular JS",
        correct: "c"
    },
    {
        question: "what does HTML stands for ?",
        a: "Hypertext Markup Language",
        b: "Hypertext Machine Language",
        c: "Hypertext Markdown Language",
        d: "None of the above",
        correct: "a"
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function deselectAnswers(){
    answerEls.forEach((answerEl)=> answerEl.checked = false )
}
function getSelected(){
    let answer;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer
}
submitBtn.addEventListener("click",()=>{
    const answer = getSelected();
    if (answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }   
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            if(score == 5){
                var str = "Congratulations,";
                var color = "green";
            }else if(score == 0){
                var str = "oops,";
                var color = "red";
            }else{
                var str = "Good try,"
                var color = "#333";
            }
            quiz.innerHTML = `<h2> <span style="color:${color}"> ${str}</span> You answered ${score}/${quizData.length} 
            questions correctly</h2> 
            <button onclick="location.reload()">Restart</button>`
        }
    }

});


