const startButton = document.getElementById("start-btn");
const question = document.getElementById("question");
const answerConatiner = document.getElementById("answer-container");
const nextButton = document.getElementById("next-btn");


function startGame() {
    startButton.classList.add("hide")
    question.classList.remove('hide')
    answerConatiner.classList.remove('hide')
    nextButton.classList.remove('hide')
; 
    loadNextQuestion
}

 function loadNextQuestion() {
     question.innerText = questionArr.question
     question.answers.forEach(answers => {
         const button = document.createElement('button')
         button.classList.add('answer');
         answerConatiner.append.button
         button.innerText = answers.text
         
     });

 }

const questionArr = [
    {
        question: "Who is Kanye's wife",
        answers: [
            {text:"Kim Kardashian", correct:true},
            {text:"Kris Kardashian", correct:false},
            {text:"Amber Rose", correct:false},
            {text:"Michelle Obama", correct:false}
        ],
    },
    {
        question: "Who is Kanye's idol",
        answers: [
            {text:"Jay Z", correct:true},
            {text:"Drake", correct:false},
            {text:"Nas", correct:false},
            {text:"Tupac", correct:false}
        ]
    },
    {
        question: "whats Kanye's Clothing Brand called",
        answers: [
            {text:"Pastelle", correct:false},
            {text:"Donda", correct:false},
            {text:"Yeezy", correct:true},
            {text:"Adidas", correct:false}
        ]
    },
    {
        question: "what's Kanye's best Album",
        answers: [
            {text:"MDBTF", correct:true},
            {text:"YE", correct:true},
            {text:"Gradution", correct:true},
            {text:"Yeezus", correct:true}
        ]
    }
]

startButton.addEventListener("click", startGame)