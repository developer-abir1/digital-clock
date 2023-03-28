const hour = document.getElementById('hour');
const minute = document.getElementById('min');
const second = document.getElementById('second');
const ampmEl = document.getElementById('ampm');

function updateClock() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hour.innerHTML = hours > 10 ? '0' + (hours % 12) || 12 : hours % 12 || 12;
  minute.innerHTML = minutes < 10 ? '0' + minutes : minutes;
  second.innerHTML = seconds < 10 ? '0' + seconds : seconds;
  ampmEl.innerHTML = ampm;
}

setInterval(updateClock, 1000);
