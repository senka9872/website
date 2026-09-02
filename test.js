// ================================
// ВОПРОСЫ ТЕСТА
// ================================

const questions = [

    {
        question: "Мені важливо робити все правильно та відповідно до моїх принципів.",
        type: 1
    },

    {
        question: "Я часто думаю про те, як допомогти людям, які мені важливі.",
        type: 2
    },

    {
        question: "Для мене важливо досягати цілей та бути успішною людиною.",
        type: 3
    },

    {
        question: "Я хочу залишатися собою і не бути схожою на всіх інших.",
        type: 4
    },

    {
        question: "Мені подобається самостійно досліджувати речі та отримувати нові знання.",
        type: 5
    },

    {
        question: "Я часто думаю про можливі проблеми та намагаюся бути готовою до них.",
        type: 6
    },

    {
        question: "Я люблю нові враження, цікаві події та різноманітність.",
        type: 7
    },

    {
        question: "Я не боюся відстоювати себе та свої погляди.",
        type: 8
    },

    {
        question: "Я намагаюся уникати конфліктів та зберігати спокій.",
        type: 9
    },

    {
        question: "Я можу бути дуже критичною до себе, якщо зробила щось неправильно.",
        type: 1
    },

    {
        question: "Мені приємно відчувати, що я потрібна іншим людям.",
        type: 2
    },

    {
        question: "Я хочу, щоб інші бачили мої досягнення.",
        type: 3
    },

    {
        question: "Мої емоції можуть бути дуже глибокими та сильними.",
        type: 4
    },

    {
        question: "Мені потрібен особистий простір, щоб побути наодинці.",
        type: 5
    },

    {
        question: "Мені важливо мати людей, яким я можу довіряти.",
        type: 6
    },

    {
        question: "Мені важко довго залишатися без нових планів та ідей.",
        type: 7
    },

    {
        question: "Я можу здаватися дуже сильною, навіть коли всередині мені складно.",
        type: 8
    },

    {
        question: "Я часто погоджуюся на компроміс, щоб не створювати конфлікт.",
        type: 9
    },

    {
        question: "Мені важливо відчувати, що світ навколо мене справедливий.",
        type: 1
    },

    {
        question: "Я часто відкладаю власні бажання, думаючи про потреби інших.",
        type: 2
    }

];


// ================================
// НАЗВИ ТИПІВ
// ================================

const typeNames = {

    1: "Реформатор",
    2: "Помічник",
    3: "Досягатор",
    4: "Індивідуаліст",
    5: "Дослідник",
    6: "Скептик",
    7: "Ентузіаст",
    8: "Керівник",
    9: "Миротворець"

};


// ================================
// ЗМІННІ
// ================================

let currentQuestion = 0;

let scores = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
};

let selectedAnswer = null;


// ================================
// ЭЛЕМЕНТЫ HTML
// ================================

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextButton =
    document.getElementById("nextButton");

const questionNumber =
    document.getElementById("questionNumber");

const progressPercent =
    document.getElementById("progressPercent");

const progress =
    document.getElementById("progress");


// ================================
// ПОКАЗ ВОПРОСА
// ================================

function showQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    answersElement.innerHTML = "";

    selectedAnswer = null;

    nextButton.disabled = true;


    questionNumber.textContent =
        `Питання ${currentQuestion + 1} з ${questions.length}`;


    const percent =
        Math.round(
            ((currentQuestion + 1) / questions.length) * 100
        );


    progressPercent.textContent = `${percent}%`;

    progress.style.width = `${percent}%`;


    // Варианты ответов

    const answers = [
        {
            text: "Зовсім не про мене",
            value: 0
        },

        {
            text: "Скоріше ні",
            value: 1
        },

        {
            text: "Частково про мене",
            value: 2
        },

        {
            text: "Скоріше так",
            value: 3
        },

        {
            text: "Дуже схоже на мене",
            value: 4
        }
    ];


    answers.forEach(function(answer) {

        const button =
            document.createElement("button");

        button.classList.add("answer");

        button.textContent = answer.text;

        button.addEventListener("click", function() {

            document
                .querySelectorAll(".answer")
                .forEach(function(item) {
                    item.classList.remove("selected");
                });


            button.classList.add("selected");

            selectedAnswer = answer.value;

            nextButton.disabled = false;

        });


        answersElement.appendChild(button);

    });

}


// ================================
// СЛЕДУЮЩИЙ ВОПРОС
// ================================

nextButton.addEventListener("click", function() {

    if (selectedAnswer === null) {
        return;
    }


    const currentType =
        questions[currentQuestion].type;


    // Добавляем баллы

    scores[currentType] += selectedAnswer;


    currentQuestion++;


    // Проверяем конец теста

    if (currentQuestion >= questions.length) {

        finishTest();

        return;
    }


    showQuestion();

});


// ================================
// РЕЗУЛЬТАТ
// ================================

function finishTest() {

    let sortedTypes =
        Object.entries(scores)
            .sort(function(a, b) {
                return b[1] - a[1];
            });


    const mainType =
        sortedTypes[0][0];


    const secondType =
        sortedTypes[1][0];


    const thirdType =
        sortedTypes[2][0];


    // Сохраняем результат

    const result = {

        mainType: mainType,

        secondType: secondType,

        thirdType: thirdType,

        scores: scores

    };


    localStorage.setItem(
        "enneagramResult",
        JSON.stringify(result)
    );


    // Переходим на страницу результата

    window.location.href = "result.html";

}


// ================================
// ЗАПУСК
// ================================

showQuestion();