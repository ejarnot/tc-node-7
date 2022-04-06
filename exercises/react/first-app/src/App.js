import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    const boxes = [];
    let numBoxes = 24;
    for (let i = 1; 1 <= numBoxes; i++) {
      boxes.push({
        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`,
      });
    }

    this.state = {
      boxes,
    };
  }

  getRandomColor() {
    return 0;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Rendering a List in React */}
          {this.boxes.map((box) => {
            return (
              <div
                key={box.id}
                style={`width: 100px; height: 100px; background-color: ${box.color}; border: 1px solid green; color: white`}
              >
                {box.id}
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
