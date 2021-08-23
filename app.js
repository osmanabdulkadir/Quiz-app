/* what do we want our code to do>
1. check if a answer is correct or not correct 
2.update the DOM with a new question and answers.
3. reset when all the questions are done

1. grab all elements from the dom.
    the qestion.
    the answers.
    the body- to chagne colors

2. we need to use a object to store our answers and questions.
3. bulid a function that checks the question if it is rigth it sets the body to the wrong color and then calls a function that updates the dom to the next question and adds new answers
4. add event listeners on all buttons to check if they are the correct answers

*/

const body = document.querySelector("body")

let choice1 = document.getElementById("answer-1");
let choice2 = document.getElementById("answer-2");
let choice3 = document.getElementById("answer-3");
let choice4 = document.getElementById("answer-4");

let question = document.getElementById("question");

let answersOBJ = [
    {"question": "Who's is the 7th Hokage", "options": ["Naruto","Sasuke","Garaa","Kakashi"], "answer" : "Naruto"},
    {"question": "Who's is the Strongest Uchicha", "options": ["Zetzu","Sasuke","Madara","Kakashi"], "answer" : "Madara"},
    {"question": "Who's is the 1st Hokage", "options": ["Naruto","Hashirama","Toborama","Rock Lee"], "answer" : "Hashirama"},
    {"question": "Naruto is a member of which clan?", "options": ["Senju","Uchiha","Uzumaki","Hugya"], "answer" : "Uzumaki"},
    {"question": "How many Tailed Beasts (Biju) existed?", "options": ["1","8","9","10"], "answer" : "10"},
];

//event Listeners

choice1.addEventListener("click", checkAnswer,updateQuestion);
choice2.addEventListener("click", checkAnswer,updateQuestion);
choice3.addEventListener("click", checkAnswer,updateQuestion);
choice4.addEventListener("click", checkAnswer,updateQuestion);

function checkAnswer() {
    
     if(choice1.innerText === answersOBJ[0]["answer"]){
         body.classList.add("right")
    } else {
         body.classList.add("wrong")
     }

     if(choice2.innerText === answersOBJ[0]["answer"]){
        body.classList.add("right")
   } else {
        body.classList.add("wrong")
    }

    if(choice3.innerText === answersOBJ[0]["answer"]){
        body.classList.add("right")
   } else {
        body.classList.add("wrong")
    }

    if(choice4.innerText === answersOBJ[0]["answer"]){
        body.classList.add("right")
   } else {
        body.classList.add("wrong")
    }
}

function updateQuestion() {
    question.innerText = answersobj[1]["question"];
    choice1.innerText = answersOBJ["options"][0];
    choice2.innerText = answersOBJ["options"][1];
    choice3.innerText = answersOBJ["options"][2];
    choice4.innerText = answersOBJ["options"][3];
}

