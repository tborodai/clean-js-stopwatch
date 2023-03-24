const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
    let hours = time / 3600000 | 0;
    let minutes = (time % 3600000) / 60000 | 0;
    let seconds = (time % 60000) / 1000 | 0;
    let milliseconds = time % 1000;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.textContent = timeToString(elapsedTime);
    }, 10);
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

function stop() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = timeToString(elapsedTime);
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);


// const display = document.getElementById("display");
// const startBtn = document.getElementById("start");
// const pauseBtn = document.getElementById("pause");
// const resetBtn = document.getElementById("reset");

// let startTime;
// let elapsedTime = 0;
// let timerInterval;

// function timeToString(time) {
//   let diffInHrs = time / 3600000;
//   let hh = Math.floor(diffInHrs);

//   let diffInMin = (diffInHrs - hh) * 60;
//   let mm = Math.floor(diffInMin);

//   let diffInSec = (diffInMin - mm) * 60;
//   let ss = Math.floor(diffInSec);

//   let ms = time % 1000;

//   return `${hh.toString().padStart(2, "0")}:${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")}`;
// }

// function start() {
//   startTime = Date.now() - elapsedTime;
//   timerInterval = setInterval(function () {
//     elapsedTime = Date.now 
//     return elapsedTime;
// } )
// }
