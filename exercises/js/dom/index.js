// DOM Exercise

// Exercise 1

let node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node1') method to access this";

let node2s = document.getElementsByClassName("node2"); // returns an HTMLCollection

node2s[0].textContent =
  "I used the getElementByClassName('node2') method to access this";

let h3s = document.getElementsByTagName("h3"); // returns an HTMLCollection

for (let ele of h3s) {
  ele.textContent =
    "I used the getElementByTagName('h3') method to access all of these";
}

// Exercise 2

let parent = document.getElementById("parent");

let p = document.createElement("p");
let a = document.createElement("a");

p.textContent = "I am a <p> tag";

a.textContent = "Google Search";
a.href = "https://google.com";
a.target = "_blank";

parent.appendChild(p);

setTimeout(() => {
  parent.insertBefore(a, p);
}, 3000);

// Exercise 3

let parent3 = document.getElementById("exercise-container3");
let N1 = document.getElementById("N1");

// Replace
let input = document.createElement("input");
input.value = "Replaced N1 child";

parent3.replaceChild(input, N1);

input.focus();

// Remove
setTimeout(() => {
  parent3.removeChild(input);
}, 5000);

// Exercise 4

// let container = document.querySelector("#container");
// let box = document.querySelector("#box");

// let x = 0;
// let y = 0;
// let xEdge = container.clientWidth - box.clientWidth;
// let yEdge = container.clientHeight - box.clientHeight;
// let dir = "right";
// let unit = 10;

// let interval = setInterval(() => {
//   if (dir == "right") {
//     moveX(unit);
//   } else if (dir == "down") {
//     moveY(unit);
//   } else if (dir == "left") {
//     moveX(-unit);
//   } else {
//     moveY(-unit);
//   }
// }, 10);

// function moveX(unit) {
//   x += unit;
//   box.style.left = `${x}px`;

//   if (x >= xEdge) {
//     dir = "down";
//   } else if (x <= 0) {
//     dir = "up";
//   }
// }

// function moveY(unit) {
//   y += unit;
//   box.style.top = `${y}px`;

//   if (y >= yEdge) {
//     dir = "left";
//   } else if (y <= 0) {
//     dir = "right";
//   }
// }

// Exercise 5

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  btn.disabled = true;

  let main = document.querySelector(".root");

  let container = document.createElement("div");
  container.classList.add("modal-container");

  let modal = document.createElement("div");
  modal.classList.add("modal");

  let modalTitle = document.createElement("h2");
  modalTitle.textContent = "Modal Title";
  let modalText = document.createElement("p");
  modalText.textContent = "This is the text content of the modal!";
  let modalBtn = document.createElement("button");
  modalBtn.classList.add("button");
  modalBtn.textContent = "Close";
  modalBtn.addEventListener("click", () => {
    main.removeChild(container);
    btn.disabled = false;
  });

  modal.append(modalTitle, modalText, modalBtn);
  container.appendChild(modal);

  main.appendChild(container);
});

// Alerts

let alertBtn1 = document.querySelector("#alertBtn1");
let alertBtn2 = document.querySelector("#alertBtn2");

alertBtn1.addEventListener("click", () => {
  flashAlert("Thanks for the info, we'll be in touch!", 5000, "success");
});

alertBtn2.addEventListener("click", () => {
  flashAlert("INVALID EMAIL ADDRESS", 10000);
});

function flashAlert(msg, delay, type = "failure") {
  let drawer = document.querySelector(".alert-drawer");

  let alert = document.createElement("div");
  alert.classList.add("alert", `alert-${type}`);

  let alertText = document.createElement("p");
  alertText.textContent = msg;

  alert.appendChild(alertText);

  drawer.appendChild(alert);

  setTimeout(() => {
    drawer.removeChild(alert);
  }, delay);
}
