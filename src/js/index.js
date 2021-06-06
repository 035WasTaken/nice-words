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
    const coolWords = [
        "Reminder that you are amazing and loved.",
        "Reminder that you are loved and appreciated.",
        "Love you.",
        "You're doing great today, keep it up.",
        "Even if you tried your hardest and failed, you still tried your hardest.",
        "Get some rest if you can, you deserve it.",
        "Crying is perfectly okay. If you need to cry, go for it."
    ];

    const num = rng(0, coolWords.length);
    const div = document.getElementById("text");
    const newHTML = `<p id="nicemessage">${coolWords[num]}</p>`;

    insertHTML(div, newHTML)
}