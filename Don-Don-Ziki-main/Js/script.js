var leftBall = document.getElementById("left-ball");
var rightBall = document.getElementById("right-ball");

var started = document.getElementById("started");
var win = document.getElementById("win");
var lose = document.getElementById("lose");
var draw = document.getElementById("draw");

var leftR = document.getElementById("left-r");
var leftS = document.getElementById("left-s");
var leftP = document.getElementById("left-p");
var rightR = document.getElementById("right-r");
var rightS = document.getElementById("right-s");
var rightP = document.getElementById("right-p");

var tosh = document.getElementById("tosh");
var qogoz = document.getElementById("qogoz");
var qaychi = document.getElementById("qaychi");

var intro = document.getElementById("intro");
var startGame = document.getElementById("start-game");
var results = document.getElementById("results");
var chois = document.getElementById("chois");

results.style.display = "none";
chois.style.display = "none";


startGame.addEventListener("click" , ()=> {
    intro.style.display = "none";
    results.style.display = "block";
    chois.style.display = "block";
});

tosh.addEventListener("click", () => {
    leftS.style.display = "none";
    leftP.style.display = "none";
    leftR.style.display = "block";

    var random = Math.round(Math.random() * 2 + 1)
    
    started.style.display = "none";
    win.style.display = "none";
    lose.style.display = "none";
    draw.style.display = "none";
    

    if (random == 1) {
        rightP.style.display = "none";
        rightS.style.display = "none";
        rightR.style.display = "block";

        draw.style.display = "block";
    } else if (random == 2) {
        rightS.style.display = "none";
        rightR.style.display = "none";
        rightP.style.display = "block";

        lose.style.display = "block";

        rightBall.textContent ++
    } else if (random == 3) {
        rightR.style.display = "none";
        rightP.style.display = "none";
        rightS.style.display = "block";

        win.style.display = "block";

        leftBall.textContent ++
    }



});

qogoz.addEventListener("click", () => {
    leftS.style.display = "none";
    leftR.style.display = "none";
    leftP.style.display = "block";

    var random = Math.round(Math.random() * 2 + 1)

    started.style.display = "none";
    win.style.display = "none";
    lose.style.display = "none";
    draw.style.display = "none";

    if (random == 1) {
        rightR.style.display = "block";
        rightP.style.display = "none";
        rightS.style.display = "none";

        win.style.display = "block";

        leftBall.textContent ++
    } else if (random == 2) {
        rightR.style.display = "none";
        rightP.style.display = "block";
        rightS.style.display = "none";

        draw.style.display = "block";
    } else if (random == 3) {
        rightR.style.display = "none";
        rightP.style.display = "none";
        rightS.style.display = "block";

        lose.style.display = "block";

        rightBall.textContent ++
    }
});

qaychi.addEventListener("click", () => {
    leftP.style.display = "none";
    leftR.style.display = "none";
    leftS.style.display = "block";

    var random = Math.round(Math.random() * 2 + 1)

    started.style.display = "none";
    win.style.display = "none";
    lose.style.display = "none";
    draw.style.display = "none";

    if (random == 1) {
        rightP.style.display = "none";
        rightS.style.display = "none";
        rightR.style.display = "block";

        lose.style.display = "block";

        rightBall.textContent ++
    } else if (random == 2) {
        rightS.style.display = "none";
        rightR.style.display = "none";
        rightP.style.display = "block";

        win.style.display = "block";

        leftBall.textContent ++
    } else if (random == 3) {
        rightR.style.display = "none";
        rightP.style.display = "none";
        rightS.style.display = "block";

        draw.style.display = "block";
    }
});

const body = document.querySelector('body');
body.style.backgroundColor = "rgb(73, 21, 122)"; 
body.style.color = "#fff";


const h1element = document.querySelector('h1');
h1element.style.fontSize = "50px";
h1element.style.marginBottom = "130px";

startGame.style.display = "inline";
startGame.style.fontSize = "20px";
startGame.style.backgroundColor = "#008B6D";
startGame.style.borderRadius = "5px";
startGame.style.padding = "10px 20px";
startGame.style.border = "none";
startGame.style.cursor = "pointer";

const wins = document.querySelector('#wins');
wins.style.fontSize = "25px";


const h2element = document.querySelector('h2');
h2element.style.fontSize = "40px";

win.style.display = "none";
lose.style.display = "none";
draw.style.display = "none";


rightR.style.width = "200px";
rightR.style.height = "200px";

leftR.style.width = "200px";
leftR.style.height = "200px";

rightS.style.width = "200px";
rightS.style.height = "200px";
rightS.style.display = "none";


rightP.style.width = "200px";
rightP.style.height = "200px";
rightP.style.display = "none";

leftS.style.width = "200px";
leftS.style.height = "200px";
leftS.style.display = "none";


leftP.style.width = "200px";
leftP.style.height = "200px";
leftP.style.display = "none";

const choisimg = document.querySelector('.chois-img');
choisimg.style.width = "80px";
choisimg.style.height = "80px";
choisimg.style.borderRadius = "50%";
choisimg.style.overflow = "hidden";

const one = document.querySelector('#one');
one.style.width = "80px";
one.style.height = "80px";
one.style.borderRadius = "50%";
one.style.overflow = "hidden";

const two = document.querySelector('#two');

two.style.width = "80px";
two.style.height = "80px";
two.style.borderRadius = "50%";
two.style.overflow = "hidden";


tosh.style.width = "80px";
tosh.style.height = "80px";
tosh.style.cursor = "pointer";


qogoz.style.width = "80px";
qogoz.style.height = "80px";
qogoz.style.cursor = "pointer";


qaychi.style.width = "80px";
qaychi.style.height = "80px";
qaychi.style.cursor = "pointer";