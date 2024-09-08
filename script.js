const questions = [
    {
        question: "What is the capital of France?",
        answers : [
            { text: "Paris", correct: true},
            { text: "Berlin", correct: false},
            { text: "Madrid", correct: false},
            { text: "Rome", correct: false},

        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers : [
            { text: "Venus", correct: false},
            { text: "Earth", correct: false},
            { text: "Mars", correct: true},
            { text: "Jupiter", correct: false},

        ]
    },
    {
        question: "Who wrote Romeo and Juliet?",
        answers : [
            { text: "Charles Dickens", correct: false},
            { text: "William Shakespeare", correct: true},
            { text: "Mark Twain", correct: false},
            { text: "J.K. Rowling", correct: false},

        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers : [
            { text: "CO2", correct: false},
            { text: "H2O", correct: true},
            { text: "NaCl", correct: false},
            { text: "O2", correct: false},

        ]
    },
    {
        question: "Which is the smallest prime number?",
        answers : [
            { text: "1", correct: false},
            { text: "3", correct: false},
            { text: "2", correct: true},
            { text: "5", correct: false},

        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers : [
            { text: "Amazon", correct: false},
            { text: "Nile", correct: true},
            { text: "Yangtze", correct: false},
            { text: "Mississippi", correct: false},

        ]
    },
    {
        question: "What is the boiling point of water at sea level in Celsius?",
        answers : [
            { text: "50°C", correct: false},
            { text: "75°C", correct: false},
            { text: "100°C", correct: true},
            { text: "150°C", correct: false},

        ]
    },
    {
        question: "What is the square root of 64?",
        answers : [
            { text: "6", correct: false},
            { text: "7", correct: false},
            { text: "9", correct: false},
            { text: "8", correct: true},

        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers : [
            { text: "Mount Kilimanjaro", correct: false},
            { text: "Mount Everest", correct: true},
            { text: "Mount Fuji", correct: false},
            { text: "Mount Elbrus", correct: false},

        ]
    },
    {
        question: "Which vitamin is known as the sunshine vitamin?",
        answers : [
            { text: "Vitamin A", correct: false},
            { text: "Vitamin B", correct: false},
            { text: "Vitamin C", correct: false},
            { text: "Vitamin D", correct: true},

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const next = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    next.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });

}

function resetState(){
    next.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selecteBtn = e.target;
    const isCorrect = selecteBtn.dataset.correct === "true";
    if(isCorrect){
        selecteBtn.classList.add("correct");
        score++;
    }else{
        selecteBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
    next.innerHTML = "Play Again";
    next.style.display = "block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

next.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});
  

startQuiz();



