let brkinc = document.querySelector('#break-increment');
let sesinc = document.querySelector('#session-increment');
let brkdec = document.querySelector('#break-decrement');
let sesdec = document.querySelector('#session-decrement');

let startstop = document.getElementById('start_stop');
let reset = document.getElementById('reset');

let brklth = document.getElementById('break-length');
let seslth = document.getElementById('session-length');
let timeleft = document.getElementById('time-left');

let pause = true;
let brkcount = 5;
let sescount = 25;


startstop.addEventListener('click', sesTimer);
reset.addEventListener('click', resetTime)

curses()
curbrk()
timeDisplay()



brkinc.addEventListener('click', () => {
    if (brkcount < 60)
    brkcount++
    curbrk()
});
brkdec.addEventListener('click', () => {
    if (brkcount > 1)
    brkcount--
    curbrk()
});
function curbrk(){
    brklth.innerHTML = brkcount;
    timeDisplay()
}


sesinc.addEventListener('click', () => {
    if (sescount < 60)
    sescount++
    curses()
});
sesdec.addEventListener('click', () => {
    if (sescount > 1)
    sescount--
    curses()
});
function curses(){
    seslth.innerHTML = sescount;
    timeDisplay()
}

function timeDisplay(){
    let m = sescount;
    let s = '00'
    timeleft.textContent = `${m}:${s}`
    }

    function resetTime(){
        timeDisplay()
    }

    function sesTimer(){
        let date = new Date(0, 0, 0);
        let m = date.getMinutes() + sescount;
        let s = 1;
        setInterval(() => {
                s-- 
                if (s == 0 && m > 0) {
                m--;
                s = 59;
              }
              if(m == 0 && s == 0){
               
                brkTimer()
              }
    
            timeleft.textContent = `${m}:${s}`
        }, 1000)
    }

    function brkTimer(){
        let date = new Date(0, 0, 0);
        let m = date.getMinutes() + brkcount;
        let s = 1;
       let intervalID = setInterval(() => {
                s-- 
                if (s == 0 && m > 0) {
                m--;
                s = 59;
              }
              if(m == 0 && s == 0){
                stopTime
                sesTimer()
              }
    
            timeleft.textContent = `${m}:${s}`
        }, 1000)
    }
    function stopTime(){
        clearInterval(intervalID)
    }