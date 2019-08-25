let ball;
let paddle;
let score;
let playingArea;
let aWidth;
let aHeight;
let pWidth;
let pHeight;
let dx = 2;
let dy = 2;
let pdx = 48;
let currentScore = 0;
let timer;
let paddleLeft = 228;
let ballLeft = 100;
let ballTop = 8;



export const init = () => {
    ball = document.getElementById('ball');
    paddle = document.getElementById('paddle');
    score = document.getElementById('score');
    playingArea = document.getElementById('playingArea');
    document.addEventListener('keydown', keyListener, false);
    layoutPage();
    timer = requestAnimationFrame(start)
};

const layoutPage = () => {
    aWidth = window.innerWidth;
    aHeight = window.innerHeight;
    pWidth = aWidth - 22;
    pHeight = aHeight - 22;
    playingArea.style.width = pWidth + 'px';
    playingArea.style.height = pHeight + 'px';
};

const keyListener = (e) => {
    let key = e.keyCode;
    if ((key=== 37 || key=== 65) && paddleLeft > 0) {
        paddleLeft -= pdx;
        if (paddleLeft < 0)
            paddleLeft = 0;
    }else if ((key=== 39 || key=== 68) && paddleLeft < pWidth - 64) {
        paddleLeft += pdx;
        if (paddleLeft > pWidth - 64)
            paddleLeft = pWidth - 64;
    }
    paddle.style.left = paddleLeft + 'px';
};

const start = () => {
    renderGame();
    detectCollisions();
    difficulty();
    if (ballTop < pHeight -36) {
        timer = requestAnimationFrame(start)
    } else {
        gameOver();
    }
};

const renderGame = () => {
    moveBall();
    updateScore();
};

const moveBall = () => {
    ballLeft += dx;
    ballTop += dy;
    ball.style.left = ballLeft + 'px';
    ball.style.top = ballTop + 'px';
};

const updateScore = () => {
    currentScore += 5;
    score.innerHTML = "Score: " + currentScore;
};

const detectCollisions = () => {
    if (collisionX()){
        dx *= -1;
    }
    if (collisionY()){
        dy *= -1;
    }
};

const collisionX = () => {
    return ballLeft < 4 || ballLeft > pWidth - 20;
};

const collisionY = () => {
    if (ballTop < 4) {
        return true
    }
    if (ballTop > pHeight - 64) {
        if (ballLeft >= paddleLeft && ballLeft <= paddleLeft + 64) {
            return true;
        }
    }
    return false
};

const difficulty = () => {
    if (currentScore % 1000 === 0) {
        if (dy > 0)
            dy += 2;
        else
            dy -= 2;
    }
};

const gameOver = () => {
    cancelAnimationFrame(timer);
    score.innerHTML += "     Game Over!";
    score.style.backgroundColor = 'rgb(128,0,0)'
};
