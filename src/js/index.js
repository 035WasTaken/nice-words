const axios = require('axios').default;

function rng(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function insertHTML(element, html) {
    if(typeof html === 'object') {
        return html.forEach(h => element.innerHTML += h);
    }

    element.innerHTML += html;
}

window.onload = function() {
    // def gonna turn this into an API at some point
    const coolWords = [
        "Reminder that you are amazing and loved.",
        "Reminder that you are loved and appreciated.",
        "Love you.",
        "You're doing great today, keep it up.",
        "Even if you tried your hardest and failed, you still tried your hardest.",
        "Get some rest if you can, you deserve it.",
        "Crying is perfectly okay.",
        "You're valid.",
        "You're not alone.",
        "No matter what anyone says, you deserve the world.",
        "Why don't you reward yourself a bit? Life is hard.",
        "Trying is hard, it's okay if you can't always do it.",
        "Don't forget about that important thing.",
        "Remember, there are many ways to get help if you feel like you need it and you're ready.",
        "Take a break, it's been tough.",
        "There are people who understand what you're going through."
    ];

    const num = rng(0, coolWords.length);
    const div = document.getElementById("text");
    const generateButton = document.getElementById("generatenew");
    const submitButton = document.getElementById("submit");
    const newHTML = `<p id="nicemessage">${coolWords[num]}</p>`

    insertHTML(div, newHTML)

    generateButton.onclick = function() {
        const message = document.getElementById("nicemessage");
        const newNum = rng(0, coolWords.length);

        message.innerText = coolWords[newNum];
    }

    submitButton.onclick = function() {
        
    }
}