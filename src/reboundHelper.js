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
var drag = false;


export const init = () => {
    ball = document.getElementById('ball');
    paddle = document.getElementById('paddle');
    score = document.getElementById('score');
    playingArea = document.getElementById('playingArea');
    layoutPage();
    document.addEventListener('keydown', keyListener, false);

    playingArea.addEventListener('mousedown', mouseDown, false);
    playingArea.addEventListener('mousemove',mouseMove, false);
    playingArea.addEventListener('mouseup',mouseUp,false);
    playingArea.addEventListener('touchstart', mouseDown, false);
    playingArea.addEventListener('touchmove',mouseMove, false);
    playingArea.addEventListener('touchend',mouseUp,false);
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
        // if (ballLeft >= paddleLeft && ballLeft <= paddleLeft + 64) {
        //     return true;
        // }
        if (ballLeft >= paddleLeft + 16 && ballLeft < paddleLeft + 48) {
            if (dx < 0)
                dx = -2;
            else
                dx = 2;
            return true;
        } else if (ballLeft >= paddleLeft && ballLeft < paddleLeft + 16) {
            if (dx < 0)
                dx = -8;
            else
                dx = 8;
            return true;
        } else if (ballLeft >= paddleLeft + 48 && ballLeft <= paddleLeft + 64) {
            if (dx < 0)
                dx = -8;
            else
                dx = 8;
            return true
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
    score.innerHTML += '     Game Over!';
    score.style.backgroundColor = 'rgb(128,0,0)'
};

const mouseDown = (e) => {
    drag = true;
};

const mouseUp = (e) => {
    drag = false;
};

const mouseMove = (e) => {
    if (drag) {
        e.preventDefault();
        paddleLeft = e.clientX - 32 || e.targetTouches[0].pageX - 32;
        if (paddleLeft < 0) {
            paddleLeft = 0;
        }
        if (paddleLeft > (pWidth - 64))
            paddleLeft = pWidth - 64;
        paddle.style.left = paddleLeft + 'px'
    }
};
