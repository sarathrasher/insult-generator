var insults = [
    "Can't believe you thought that would work.",
    "You thought that's how you were supposed to click me?",
    "I'm over here now.",
    "You can't even click me correctly.",
    "I don't even have eyes and I can tell you're the ugliest person to click me.",
    "You'll have to do better than that.",
    "Bet you can't catch me.",
    "Which one am I?",
    "You're so pathetic.",
    "I can smell you through the screen.",
    "I expected more from you.",
    "You're so disappointing.",
    "I'm so tired of you."
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

x = getRandomInt(0, $(window).width() - 65);
y = getRandomInt(0, $(window).height() - 20);

button.textContent = "Click Me";


var buttonHop = function (button) {
    button.style.top = `${y}px`;
    button.style.left = `${x}px`;
    x = getRandomInt(0, $(window).width() - 65);
    y = getRandomInt(0, $(window).height() - 20);
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.2;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
};

function makeNewPosition(){
            
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 20;
    var w = $(window).width() - 65;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];       
}

function animateButton(){
    var newq = makeNewPosition();
    var oldq = $('.submit-button').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.submit-button').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateButton();        
    }); 
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.2;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
};

function makeNewPosition(){
            
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 20;
    var w = $(window).width() - 65;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];       
}

function animateDecoyButton(){
    var newq = makeNewPosition();
    var oldq = $('.decoy-button').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.decoy-button').animate({ top: newq[0], left: newq[1] }, speed, function(){
        animateButton();        
    }); 
};

var handleClick = function () {
    insult.textContent = insults[insultIndex]; 
    console.log(insultIndex);

    if (insultIndex >= 2 && insultIndex < 7) {
        insult.textContent = insults[insultIndex]; 
        buttonHop(button);
    }
 
    if (insultIndex >= 6 && insultIndex < 8) {
        insult.textContent = insults[insultIndex];
        $(document).ready(function(){
            animateButton();
        });
    }

    if (insultIndex >= 7 && insultIndex < insults.length) {
        $(document).ready(function(){
            animateButton('submit-button');
        });

        for (i = 0; i < insults.length; i++) {
            insult.textContent = insults[insultIndex];
            var decoyButton = document.createElement('button');
            decoyButton.classList.add('decoy-button');
            decoyButton.textContent = 'Click Me';
            container.appendChild(decoyButton);
            $(document).ready(function(){
                animateDecoyButton();
            });
        };
    }
            
    if (insultIndex > insults.length) {
        alert("Thought you would get rid of me that easily?");
        insultIndex = -1;
        decoyButton.classList.add('hidden');
    }
    insultIndex++;
};

button.addEventListener('click', handleClick);

