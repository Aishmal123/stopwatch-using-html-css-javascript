let startButton = document.getElementById("startBtn");
let stopButton = document.getElementById("stopBtn");
let resetButton = document.getElementById("resetBtn");
let display = document.querySelector(".display");
let msec = 0;
let sec = 0;
let min = 0;
let timeInterval = null;

startButton.addEventListener('click',() =>{
    console.log('button is clicked')
    if (timeInterval!== null) {
        clearInterval(timeInterval);  
    }
    timeInterval=setInterval(startTimer,10)
});
stopButton.addEventListener('click',() =>{
        clearInterval(timeInterval);  
    timeInterval = null;
    
});
resetButton.addEventListener(('click'),() =>{
    
        clearInterval(timeInterval);  
        display.innerHTML=`00:00:00`;
        msec=sec=min= 0;
    
    
});
function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
  if (sec==60) {
    sec=0;
    min++;
  }
  }
 
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;
    
    

display.innerHTML = `${minString} : ${secString} : ${msecString}`;

}
