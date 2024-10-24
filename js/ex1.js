const questions = [
    {
        statement: "2+2?",
        answer: "2+2 = 4"
    },
    {
        statement: "In which year did Christopher Columbus discover America?",
        answer: "1492"
    },
    {
        statement: "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
        answer: "The E letter"
    }
];

const displayQuestions = () => {
    const content = document.getElementById('content');

    questions.forEach((questions) => {
        const container = document.createElement('div');

        const element = document.createElement('p');
        element.textContent = questions.statement;

        const button = document.createElement('button');
        button.textContent = 'Show the answer';

        button.addEventListener('click', function() {
            button.remove();

            const answer = document.createElement('p');
            answer.textContent = questions.answer;
            container.appendChild(answer);
        })
        container.appendChild(element);
        container.appendChild(button);
        content.appendChild(container);
    })
}

displayQuestions();
