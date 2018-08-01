var insults = [
    "Can't believe you thought that would work.",
    "You thought that's how you were supposed to click me?",
    "You can't even click me correctly.",
    "I can smell you through the screen.",
    "I don't even have eyes and I can tell you're the ugliest person to click me.",
    "You're so pathetic.",
    "Something",
    "Something else",
    "Blah blah blah",
    "Yadda Yadda Yadda",
    "Blurgh",
    "Another one",
    "Final"
];

var container = document.querySelector('.main');
var button = document.querySelector('.submit-button');
var insult = document.querySelector('.insult');
var insultIndex = 0;

var getRandomInt = function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
};

var x = getRandomInt(0, 100);
var y = getRandomInt(0, 100);

button.textContent = "Click me";


var buttonHop = function (button) {
    button.style.top = `${y}%`;
    button.style.left = `${x}%`;
    x = getRandomInt(0, 100);
    y = getRandomInt(0, 100);
    console.log(x);
    console.log(y);
    console.log(button.style.top);
    console.log(button.style.left);
};

// var buttonAnimate = functon (button) {
    
// }

var handleClick = function () {
    insult.textContent = insults[insultIndex]; 
    insultIndex++

    if (insultIndex > 3 && insultIndex < insults.length) {
        insult.textContent = insults[insultIndex]; 
        buttonHop(button);
        insultIndex++
    }
 
    if (insultIndex > insults.length) {
        alert("Thought you would get rid of me that easily?");
    }

};

button.addEventListener('click', handleClick);

