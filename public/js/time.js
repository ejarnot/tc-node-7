const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const ampm = document.querySelector("#ampm");

const circle = document.querySelector("circle");
let radius = circle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - (percent / 60) * circumference;
  circle.style.strokeDashoffset = offset;
}

function updateTime() {
  let currentTime = new Date();
  let hrs = currentTime.getHours().toString();
  let mins = currentTime.getMinutes().toString();
  let secs = currentTime.getSeconds();

  setProgress(secs);

  if (ampm.textContent == "AM" && hrs >= 12) {
    ampm.classList.add("flash");
    setTimeout(() => {
      ampm.classList.remove("flash");
    }, 2000);
    ampm.textContent = "PM";
  } else if (ampm.textContent == "PM" && hrs < 12) {
    ampm.classList.add("flash");
    setTimeout(() => {
      ampm.classList.remove("flash");
    }, 2000);
    ampm.textContent = "AM";
  }

  hrs = regulateHours(hrs).toString();

  if (mins != parseInt(min.textContent)) {
    if (mins.length == 1) {
      mins = mins.padStart(2, "0");
    }

    min.classList.add("flash");
    setTimeout(() => {
      min.classList.remove("flash");
    }, 2000);
    min.textContent = mins;
  }

  if (hrs != parseInt(hr.textContent)) {
    if (hrs.length == 1) {
      hrs = hrs.padStart(2, "0");
    }

    hr.classList.add("flash");
    setTimeout(() => {
      hr.classList.remove("flash");
    }, 2000);
    hr.textContent = hrs;
  }
}

updateTime();

setInterval(updateTime, 1000);

function regulateHours(hrs) {
  if (hrs > 12) {
    return hrs - 12;
  } else return hrs;
}
