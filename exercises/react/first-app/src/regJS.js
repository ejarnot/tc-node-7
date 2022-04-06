function App() {
  let x = 1;
  let y = 2;

  setTimeout(() => {
    x = 3;
    y = 4;
  }, 2000);

  console.log(`<p>${x} + ${y}</p>`);
}

class Component {
  constructor() {
    this.x = 1;
    this.y = 2;
  }

  render() {
    console.log(`<p>${this.x} + ${this.y}</p>`);
  }
}

let comp = new Component();

comp.render(); // "<p>1 + 2</p>"

comp.x = 3;
comp.y = 4;

comp.render(); // "<p>3 + 4</p>"

App(); // "<p>1 + 2</p>"
App(); // "<p>1 + 2</p>"