const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

//render quizes
    let quizContainer = document.querySelector('.quiz-container');
    let quizItem = document.createElement('div');
    quizItem.classList.add('quiz-item');
    quizContainer.appendChild(quizItem);


    for(let i=0; i<quizes.length;i++) {
        let question = document.createElement('h3');
        question.innerHTML = `Câu ${quizes[i].id}: ${quizes[i].question}`;
        quizItem.appendChild(question);

        let quizAnswer = document.createElement('div');
        quizAnswer.classList.add('.quiz-answer-item');
        quizItem.appendChild(quizAnswer);


        for(let j=0; j<quizes[i].answers.length;j++) {
            let quizClassAnswerItem = document.createElement('div');
            quizClassAnswerItem.classList.add('.quiz-answer-item');
            quizAnswer.appendChild(quizClassAnswerItem);

            let input = document.createElement('input');
            input.type = "radio";
            input.name = `${quizes[i].id}`;
            quizClassAnswerItem.appendChild(input);

            let label = document.createElement('label');
            label.innerText = quizes[i].answers[j];
            quizClassAnswerItem.appendChild(label);
        }
    }

//click event, random answer
    let btn = document.getElementById("btn");
    let input = document.querySelectorAll('input');
    let label = document.querySelectorAll('label');

    btn.addEventListener('click', ()=> {
        quizes.forEach(quiz => {
            let quizNum = quiz.id;
            let randomIndex = Math.floor(Math.random()*(quiz.answers.length-1));
            let selectedAnswer = quiz.answers[randomIndex];
            console.log(selectedAnswer);
            
            for(let i=0; i<input.length;i++) {

                if(input[i].name == quizNum && label[i].innerText==selectedAnswer) {
                    input[i].checked = true;
                }
            }
            }
        )
    })