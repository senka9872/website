// =========================
// ТЕМА
// =========================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "light");
    } else {
        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "dark");
    }

});


// Проверяем сохранённую тему

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeButton.textContent = "☀️";
}


// =========================
// ТИПЫ ЭННЕАГРАММЫ
// =========================

const types = {

    1: {
        name: "Реформатор",

        description:
            "Ти прагнеш робити світ кращим, цінуєш принципи та хочеш, щоб усе було правильно.",

        fear:
            "Бути неправильною або недосконалою",

        desire:
            "Бути хорошою, чесною та правильною людиною",

        strength:
            "Відповідальність та почуття справедливості"
    },


    2: {
        name: "Помічник",

        description:
            "Ти уважна до потреб інших людей та часто прагнеш допомогти тим, хто тобі дорогий.",

        fear:
            "Бути непотрібною або нелюбимою",

        desire:
            "Відчувати любов та бути потрібною",

        strength:
            "Турботливість та емпатія"
    },


    3: {
        name: "Досягатор",

        description:
            "Ти орієнтована на результат, любиш досягати цілей та прагнеш розвиватися.",

        fear:
            "Бути невдахою або не мати цінності",

        desire:
            "Бути успішною та компетентною",

        strength:
            "Цілеспрямованість та працездатність"
    },


    4: {
        name: "Індивідуаліст",

        description:
            "Ти цінуєш свою унікальність, глибокі почуття та прагнеш бути справжньою.",

        fear:
            "Не мати власної ідентичності",

        desire:
            "Бути унікальною та самобутньою",

        strength:
            "Творчість та емоційна глибина"
    },


    5: {
        name: "Дослідник",

        description:
            "Ти любиш знання, спостереження та самостійне дослідження світу.",

        fear:
            "Бути безпорадною або некомпетентною",

        desire:
            "Розуміти світ та бути компетентною",

        strength:
            "Аналітичність та допитливість"
    },


    6: {
        name: "Скептик",

        description:
            "Ти цінуєш безпеку, надійність та людей, яким можна довіряти.",

        fear:
            "Залишитися без підтримки або безпеки",

        desire:
            "Відчувати безпеку та впевненість",

        strength:
            "Лояльність та передбачливість"
    },


    7: {
        name: "Ентузіаст",

        description:
            "Ти любиш нові враження, свободу, цікаві ідеї та різноманітність.",

        fear:
            "Опинитися в обмеженні або відчувати біль",

        desire:
            "Бути щасливою та вільною",

        strength:
            "Оптимізм та креативність"
    },


    8: {
        name: "Керівник",

        description:
            "Ти сильна, незалежна та не боїшся захищати себе й людей, які для тебе важливі.",

        fear:
            "Бути слабкою або контрольованою",

        desire:
            "Бути незалежною та контролювати власне життя",

        strength:
            "Сміливість та рішучість"
    },


    9: {
        name: "Миротворець",

        description:
            "Ти прагнеш гармонії, спокою та комфортних стосунків з іншими людьми.",

        fear:
            "Втратити зв'язок з іншими або опинитися в конфлікті",

        desire:
            "Відчувати внутрішній спокій та гармонію",

        strength:
            "Дипломатичність та вміння бачити різні точки зору"
    }
};

// =========================
// МОДАЛЬНОЕ ОКНО ТИПА
// =========================

const modal =
    document.getElementById("typeModal");

const closeModal =
    document.getElementById("closeModal");

const modalNumber =
    document.getElementById("modalNumber");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalFear =
    document.getElementById("modalFear");

const modalDesire =
    document.getElementById("modalDesire");

const modalStrength =
    document.getElementById("modalStrength");


const typeButtons =
    document.querySelectorAll(".type");


typeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const number =
            button.dataset.type;

        const type =
            types[number];

typeButtons.forEach(function(item) {
    item.classList.remove("active-type");
});


// Выделяем выбранный тип

button.classList.add("active-type");

        modalNumber.textContent =
            number;

        modalTitle.textContent =
            type.name;

        modalDescription.textContent =
            type.description;

        modalFear.textContent =
            type.fear;

        modalDesire.textContent =
            type.desire;

        modalStrength.textContent =
            type.strength;


        modal.classList.add("show");

        document.body.classList.add("modal-open");

    });

});


// Закрытие

closeModal.addEventListener("click", function() {

    modal.classList.remove("show");

    document.body.classList.remove("modal-open");

});


// Закрытие при клике на фон

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.classList.remove("show");

        document.body.classList.remove("modal-open");

    }

});


// Закрытие клавишей Escape

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        modal.classList.remove("show");

        document.body.classList.remove("modal-open");

    }

});



// =========================
// КНОПКА ТЕСТА
// =========================

const startTest = document.getElementById("startTest");

startTest.addEventListener("click", function() {

    alert(
        "Тест поки що знаходиться в розробці 💜\n\n" +
        "Наступним кроком ми його створимо!"
    );

});