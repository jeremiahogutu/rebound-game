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
    if ((e.keyCode === 37 || e.keyCode === 65) && paddleLeft > 0) {
        paddleLeft -= pdx;
        if (paddleLeft < 0)
            paddleLeft = 0;
        paddle.style.left = paddleLeft + 'px';
    }
    if ((e.keyCode === 39 || e.keyCode === 68) && paddleLeft < pWidth - 64) {
        paddleLeft += pdx;
        if (paddleLeft > pWidth - 64)
            paddleLeft = pWidth - 64;
        paddle.style.left = paddleLeft + 'px';
    }
}
