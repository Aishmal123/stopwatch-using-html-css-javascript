let startButton = document.getElementById("startBtn");
let stopButton = document.getElementById("stopBtn");
let resetButton = document.getElementById("resetBtn");
let splitButton = document.getElementById("splitBtn");
let lapsList = document.getElementById("lapse");
let display = document.querySelector(".display");
let sec = 0;
let hour = 0;
let min = 0;
let timeInterval = null;

startButton.addEventListener('click',() =>{
    console.log('button is clicked')
    if (timeInterval!== null) {
        clearInterval(timeInterval);  
    }
    timeInterval=setInterval(startTimer,1000)
});
stopButton.addEventListener('click',() =>{
        clearInterval(timeInterval);  
    timeInterval = null;
    
});
resetButton.addEventListener(('click'),() =>{
        clearInterval(timeInterval);  
        display.innerHTML=`00:00:00`;
        hour=sec=min= 0;
    
    
});
splitButton.addEventListener(('click'),()=>{
let li=document.createElement('li');
  li.innerText=display.innerText;
  lapsList.prepend(li);
})
  

function startTimer() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  if (min==60) {
    min=0;
    hour++;
  }
  }
 
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;
    let hourString = hour < 10 ? `0${hour}` : hour;
    
    

display.innerHTML = `${hourString} : ${minString} : ${secString}`;

}
