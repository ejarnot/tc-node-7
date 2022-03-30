let main = document.getElementById("root");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let btn = document.querySelector("button");
let input = document.getElementById("newTitle");
let borderBlacks = document.getElementsByClassName("border-black");

// console.log(main);
// console.log(h1);
// console.log(p);
// console.log(borderBlacks);

h1.textContent = "<b>New Title</b>";

p.innerHTML = "Para <u>with change</u>";

for (let ele of borderBlacks) {
  ele.style = "border: 1px solid black; display: block;";
}

const h2 = document.createElement("h2");
h2.textContent = "New Sub Heading";

main.insertBefore(h2, borderBlacks[0]);

setTimeout(() => {
  main.removeChild(borderBlacks[1]);
}, 3000);

let count = 0;

btn.addEventListener("click", () => {
  btn.textContent = `Clicked ${++count}`;
});

input.onkeyup = (event) => {
  console.log(event);
  h1.textContent = event.target.value;
};
