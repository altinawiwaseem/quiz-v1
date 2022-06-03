const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

// select items

const button = document.getElementById("submit");
const questionText = document.getElementById("question")
const a1 = document.getElementById("a_text")
const b1 = document.getElementById("b_text")
const c1 = document.getElementById("c_text")
const d1 = document.getElementById("d_text")

/* button.addEventListener("click", ()=> console.log('im clicked')) */
let index = 0
loadData(0)
button.onclick = ()=>{
    index++
    loadData(index)
}
function loadData(idx){
    questionText.innerText = quizData[idx].question
a1.innerText = quizData[idx].a
b1.innerText = quizData[idx].b
c1.innerText = quizData[idx].c
d1.innerText = quizData[idx].d
}
