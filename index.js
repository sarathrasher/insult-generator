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

// var buttonAnimate = function () {
//     $('.submit-button').animate({
//         left: `${y}%`,
//         top: `${x}%`
//         }, 'slow');
//         x = getRandomInt(0, 100);
//         y = getRandomInt(0, 100);
// };

var handleClick = function () {
    insult.textContent = insults[insultIndex]; 
    insultIndex++

    if (insultIndex > 2 && insultIndex < 8) {
        insult.textContent = insults[insultIndex]; 
        buttonHop(button);
        insultIndex++
    }
 
    if (insultIndex > 8 && insultIndex < insults.length) {
        insult.textContent = insults[insultIndex];
        function makeNewPosition(){
            
            // Get viewport dimensions (remove the dimension of the div)
            var h = $(window).height() - 50;
            var w = $(window).width() - 50;
            
            var nh = Math.floor(Math.random() * h);
            var nw = Math.floor(Math.random() * w);
            
            return [nh,nw];    
            
        }
        
        function animateDiv(){
            var newq = makeNewPosition();
            var oldq = $('.submit-button').offset();
            var speed = calcSpeed([oldq.top, oldq.left], newq);
            
            $('.submit-button').animate({ top: newq[0], left: newq[1] }, speed, function(){
              animateDiv();        
            });
            
        };
        
        function calcSpeed(prev, next) {
            
            var x = Math.abs(prev[1] - next[1]);
            var y = Math.abs(prev[0] - next[0]);
            
            var greatest = x > y ? x : y;
            
            var speedModifier = 0.2;
        
            var speed = Math.ceil(greatest/speedModifier);
        
            return speed;
        
        }

        $(document).ready(function(){
            animateDiv();
            
        });
        insultIndex++;
    };
        
    if (insultIndex > insults.length) {
        alert("Thought you would get rid of me that easily?");
    }

};

button.addEventListener('click', handleClick);

