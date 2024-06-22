
const taskContainer = document.getElementById('task-container');
const taskContainer1 = document.getElementById('task-container1');
let zodiacSignInput;
let numbersInput; 
let virusInput; 
let virusInterval; 


function showTask1() {
    stopVirus();
    taskContainer.innerHTML = `
        <h2>Знак зодиака</h2>
        <p>Введите ваш знак зодиака:</p>
        <input type="text" id="zodiacSign">
        <button onclick="checkZodiac()">Проверить</button>
    `;
    zodiacSignInput = document.querySelector('#zodiacSign'); 
    taskContainer.style.display = 'block';
}

function showTask5() {
    taskContainer.innerHTML = `
<button onclick="startVirus()">Запуск</button>
<br> <br>`;
virusInput = document.querySelector('#virus');
taskContainer.style.display = 'block';
taskContainer1.style.display = 'block';
}


function startVirus() {
virusInterval = setInterval(() => {
taskContainer1.innerHTML += " Вирусный текст!";
}, 1000);
}

function stopVirus() {
clearInterval(virusInterval); 
taskContainer1.innerHTML = ''; 
taskContainer1.style.display = 'none'; 
}

function showTask6() {
stopVirus();
taskContainer.innerHTML = `
<h2>Произведение случайных чисел</h2>
<p>Нажмите на кнопку:</p>
<button onclick="calculateProduct()">Вычислить произведение</button>
`;
taskContainer.style.display = 'block';
}
window.calculateProduct = function() {
    let num1 = Math.floor(Math.random() * 51);
    let num2 = Math.floor(Math.random() * 51);
    let product = num1 * num2;
    alert(`Произведение чисел ${num1} и ${num2} равно ${product}`);
};

function checkZodiac() {
    let sign = zodiacSignInput.value; 
    switch (sign.toLowerCase()) {
        case "овен":
            alert("Привет, Овен!");
            break;
        case "телец":
            alert("Привет, Телец!");
            break;
        case "близнецы":
            alert("Привет, Близнецы!");
            break;
case "рак":
            alert("Привет, Рак!");
            break;
case "лев":
            alert("Привет, Лев!");
            break;
case "дева":
            alert("Привет, Дева!");
            break;
case "весы":
            alert("Привет, Весы!");
            break;
case "скорпион":
            alert("Привет, Скорпион!");
            break;
case "стрелец":
            alert("Привет, Стрелец!");
            break;
case "козерог":
            alert("Привет, Козерог!");
            break;
case "водолей":
            alert("Привет, Водолей!");
            break;
case "рыбы":
            alert("Привет, Рыбы!");
            break;
        default:
            alert("Неизвестный знак зодиака!");
    }
}

function showTask2() {
    stopVirus();
    taskContainer.innerHTML = `
        <h2>Числа от 1 до 5</h2>
        <p>Введите число от 1 до 5:</p>
        <input type="number" id="numbers">
        <button onclick="checkNumbers()">Проверить</button>
    `;
    numbersInput = document.querySelector('#numbers');
    taskContainer.style.display = 'block';
}

function checkNumbers() {
    let number = parseInt(numbersInput.value);
    if (number >= 1 && number <= 5) {
        alert("Число в диапазоне от 1 до 5!");
    } else {
        alert("Число не находится в диапазоне от 1 до 5!");
    }
}


function showTask3() {
    stopVirus();
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    taskContainer.innerHTML = `
        <h2>Дата</h2>
        <p>Сегодня: ${day} ${month} ${year}</p>
    `;
    taskContainer.style.display = 'block';
}
function showTask4() {
    stopVirus();
    let userName = localStorage.getItem('userName'); 

    if (!userName) { 
        userName = prompt("Введите ваше имя:");
        if (userName) {
            localStorage.setItem('userName', userName); 
        }
    }

    if (userName) {
        alert("Привет, " + userName + "!");
    } else {
        alert("Имя не было введено.");
    }
    taskContainer.style.display = 'block';
}


const questions = [
    {
        question: "Как создать массив в JavaScript?",
        options: ["let arr = [1, 2, 3];", "let arr = (1, 2, 3);", "let arr = {1, 2, 3};"],
        correctAnswer: "let arr = [1, 2, 3];"
    },
    {
        question: "Какой метод массива добавляет элемент в начало массива?",
        options: ["push()", "unshift()", "splice()"],
        correctAnswer: "unshift()"
    },
    {
        question: "Какой метод используется для копирования массива?",
        options: ["copy()", "slice()", "duplicate()"],
        correctAnswer: "slice()"
    },
    {
        question: "Какой метод используется для преобразования JSON в объект JavaScript?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()"],
        correctAnswer: "JSON.parse()"
    },
    {
        question: "Какой метод используется для отправки асинхронного запроса?",
        options: ["XMLHttpRequest()", "fetch()", "ajax()"],
        correctAnswer: "fetch()"
    },
    {
question: "Какой метод используется для удаления последнего элемента из массива?",
options: ["pop()", "push()", "shift()", "unshift()"],
correctAnswer: "pop()"
},
{
question: "Какой объект в JavaScript представляет глобальный контекст выполнения?",
options: ["window", "document", "console", "global"],
correctAnswer: "window"
},
{
question: "Какое ключевое слово используется для создания нового экземпляра объекта?",
options: ["create", "new", "init", "construct"],
correctAnswer: "new"
},
{
question: "Какой метод массива используется для сортировки элементов?",
options: ["sort()", "order()", "arrange()", "lineup()"],
correctAnswer: "sort()"
},
{
question: "Какой оператор используется для сравнения с учетом типа данных?",
options: ["==", "===", "!=", "!=="],
correctAnswer: "==="
}
];


function createQuestions() {
    const questionsDiv = document.getElementById('questions');
    questions.forEach((question, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question');
        questionContainer.innerHTML = `
            <h2>Вопрос ${index + 1}:</h2>
            <p>${question.question}</p>
            <div class="options">
                ${question.options.map(option => `
                    <div class="answer">
                        <input type="radio" name="question${index}" value="${option}">
                        <label for="question${index}">${option}</label>
                    </div>
                `).join('')}
            </div>
        `;
        questionsDiv.appendChild(questionContainer);
    });
}

function checkAnswers() {
    let score = 0;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h2>Результаты:</h2>';
    const userAnswers = [];

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const userAnswer = selectedOption ? selectedOption.value : null;
        userAnswers.push(userAnswer);

        const answerResult = document.createElement('p');
        answerResult.textContent = `${index + 1}. ${question.question} - ${userAnswer === question.correctAnswer ? 'Верно' : 'Неверно'}`;
        resultsDiv.appendChild(answerResult);

        if (userAnswer === question.correctAnswer) {
            score++;
        }
    });

    const finalResult = document.createElement('p');
    finalResult.textContent = `Ваш результат: ${score} из ${questions.length}`;
    resultsDiv.appendChild(finalResult);
}

createQuestions();

        const showSplashButton = document.getElementById('show-splash');
        const splashScreen = document.getElementById('splash-screen');
        const dateAndNameDiv = document.getElementById('date-and-name');

        showSplashButton.addEventListener('click', () => {
            splashScreen.style.display = 'flex';

            let userName = localStorage.getItem('userName'); 

    if (!userName) { 
        userName = prompt("Введите ваше имя:");
        localStorage.setItem('userName', userName); 
    }

            const currentDate = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = currentDate.toLocaleDateString('ru-RU', options);

            dateAndNameDiv.style.color = 'black';
            dateAndNameDiv.textContent = `${userName}! Сегодня  ${formattedDate}`;

            splashScreen.addEventListener('click', () => {
                splashScreen.style.display = 'none';
            });
        });
