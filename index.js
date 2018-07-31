// var buttons  = [
//     "Click Me",
//     "Idiot",
//     "Are you serious right now?",
// ];

var insults = [
    "Can't believe you thought that would work.",
    "You thought that's how you were supposed to click me?",
    "You can't even click me correctly.",
    "I can smell you through the screen.",
    "I don't even have eyes and I can tell you're the ugliest person to click me.",
    "You're so pathetic."
];

var container = document.querySelector('.main');
var button = document.querySelector('.submit-button');
var insult = document.querySelector('.insult');
var insultIndex = 0;

button.textContent = "Click me";

var handleClick = function () {
    insult.textContent = insults[insultIndex]; 
    insultIndex++

    if (insultIndex > insults.length - 1) {
        insult.textContent = "You win."
    };
};

button.addEventListener('click', handleClick);

