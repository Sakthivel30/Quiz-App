const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement  = document.getElementById('question');
const answerButttonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currectQuestionIndex;
let quizScore = 0;


startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', () =>{
    currectQuestionIndex++;
    setnextQuestion();
});

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions=questions.sort(() =>Math.random() -0.5);
    currectQuestionIndex=0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
    quizScore=0;
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currectQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText=question.question;
    question.answers.forEach((answer) =>{
        const button = document.createElement('button');
        button.innerText=answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButttonsElement.appendChild(button);
    });
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButttonsElement.firstChild){
        answerButttonsElement.removeChild(answerButttonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body,correct);
    Array.from(answerButttonsElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct);
    });
    if(shuffledQuestions.length>currectQuestionIndex +1){
        nextButton.classList.remove("hide");
    }else{
        startButton.innerText = "restart";
        startButton.classList.remove("hide");
    }
    if(selectedButton.dataset = correct){
        quizScore++;
    }
    document.getElementById('right-answers').innerText=quizScore;
}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add("correct");

    }else{
        element.classList.add("wrong");
    }
}




function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

 const questions =[
    {
        question: 'which one of these is a Javascript framework?',
        answers :[
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React', correct: true},
            {text: 'Eclipse', correct: false},
        ],
    },

    {
        question: 'who is the prime minister of india?',
        answers :[
            {text: 'Narendra Modi', correct: true},
            {text: 'Rahul Gandhi', correct: false},
           
        ],
    },


    {
        question: 'what is 4*3?',
        answers :[
            {text: '6', correct: false},
            {text: '12', correct: true},
           
        ],
    },

    {
        question: 'In MS-Word, a number printed above the base line is called',
        answers :[
            {text: 'superscript', correct: true},
            {text: 'subscript', correct: false},
            {text: 'strikethrough', correct: false},
        ],
    },



    {
        question: 'which of the following is NOT a windows applications?',
        answers :[
            {text: 'Notepad', correct: false},
            {text: 'tweetbot', correct: true},
            {text: 'wordpad', correct: false},
            {text: 'calculator', correct: false},
           
        ],
    },



    {
        question: 'what is the use of "javac" command?',
        answers :[
            {text: 'Execute a java program', correct: false},
            {text: 'Compute a java program', correct: true},
           
        ],
    },



    {
        question: 'Parent class of all java classes is?',
        answers :[
            {text: 'Java.lang.system', correct: false},
            {text: 'Java.lang.object', correct: true},
           
        ],
    },



    {
        question: 'what is a java primitive datatype?',
        answers :[
            {text: 'long double', correct: false},
            {text: 'long', correct: true},
           
        ],
    },



    {
        question: 'A condition that is caused by run-time error in a computer program is known as:?',
        answers :[
            {text: 'Syntax error', correct: false},
            {text: 'Fatal error', correct: false},
            {text: 'Exception', correct: true},
           
        ],
    },




    {
        question: 'what is 11*33?',
        answers :[
            {text: '366', correct: false},
            {text: '363', correct: true},
           
        ],
    },



    {
        question: 'what is 4*4?',
        answers :[
            {text: '6', correct: false},
            {text: '16', correct: true},
           
        ],
    },

 ]