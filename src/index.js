let h2 = document.querySelector('h2')
let cron
let hour = 0
let minute = 0
let second = 0 
let millisecond = 0

function start() {
    stop();
    cron = setInterval(() => {timer(); }, 10);
}

function stop() {
    clearInterval(cron)
}

function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    stop();
}

function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    
  }
  
  function returnData(input) {
    return input >= 10 ? input : `0${input}`
  }