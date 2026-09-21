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



const descriptions = {

    1:
        "Ти прагнеш робити речі правильно, цінуєш принципи та часто помічаєш те, що можна покращити.",

    2:
        "Ти уважна до людей, любиш допомагати та прагнеш бути важливою для тих, хто тобі дорогий.",

    3:
        "Ти орієнтована на результат, любиш досягати цілей та хочеш бачити конкретний результат своїх зусиль.",

    4:
        "Ти цінуєш індивідуальність, автентичність та можеш дуже глибоко переживати власні емоції.",

    5:
        "Ти любиш спостерігати, аналізувати та самостійно розбиратися в речах. Особистий простір для тебе важливий.",

    6:
        "Ти цінуєш безпеку та надійність, можеш багато думати про майбутнє та можливі ризики.",

    7:
        "Ти любиш свободу, нові враження та можливості. Тобі цікаво пробувати щось нове.",

    8:
        "Ти незалежна, сильна та не боїшся захищати власні межі й людей, які для тебе важливі.",

    9:
        "Ти прагнеш гармонії та спокою, часто намагаєшся уникати конфліктів і враховувати думки інших."

};




const savedResult =
    localStorage.getItem("enneagramResult");


if (!savedResult) {

    window.location.href = "test.html";

} else {

    const result =
        JSON.parse(savedResult);


    const mainType =
        result.mainType;

    const secondType =
        result.secondType;

    const thirdType =
        result.thirdType;




    document.getElementById("mainNumber")
        .textContent = mainType;


    document.getElementById("mainType")
        .textContent = typeNames[mainType];


    document.getElementById("mainDescription")
        .textContent = descriptions[mainType];




    document.getElementById("secondNumber")
        .textContent = secondType;


    document.getElementById("secondType")
        .textContent = typeNames[secondType];




    document.getElementById("thirdNumber")
        .textContent = thirdType;


    document.getElementById("thirdType")
        .textContent = typeNames[thirdType];

}
