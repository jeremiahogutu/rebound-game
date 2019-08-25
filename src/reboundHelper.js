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
    render();
    detectCollisions();
    difficulty();
    if (ballTop < pHeight -36) {
        timer = requestAnimationFrame(start)
    } else {
        gameOver();
    }
}
