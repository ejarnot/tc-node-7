import "./App.css";
import { Component } from "react";
import Box from "./components/Box";

class App extends Component {
  constructor(props) {
    super(props);

    console.log("App - Constructor");

    let boxes = [];
    let numBoxes = 12;
    for (let i = 1; i <= numBoxes; i++) {
      boxes.push({
        id: i,
        color: `rgb(255, 255, 255)`,
      });
    }

    // set default state
    this.state = {
      boxes,
      paintColor: "#FFFFFF",
    };

    // bind methods to this
    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.handleColorSelection = this.handleColorSelection.bind(this);
    this.handleBoxRemoval = this.handleBoxRemoval.bind(this);
  }

  getRandomColor() {
    return Math.round(Math.random() * 255);
  }

  getRandomRGB() {
    return `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`;
  }

  handleBoxClick(event, id) {
    let updatedBoxes = this.state.boxes.map((box) => {
      if (box.id == id) {
        box.color = this.state.paintColor;
      }

      return box;
    });
    this.setState({ boxes: updatedBoxes });
  }

  handleColorSelection(event) {
    this.setState({ paintColor: event.target.value });
  }

  handleBoxRemoval(event, id) {
    let filteredBoxes = this.state.boxes.filter((box) => box.id != id);
    this.setState({ boxes: filteredBoxes });
  }

  componentDidMount() {
    console.log("App - Mount");
  }

  componentDidUpdate() {
    console.log("App - Update");
  }

  componentWillUnmount() {
    console.log("App - Unmount");
  }

  render() {
    console.log("App - Render");

    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <input
          name="paintColor"
          id="paintColor"
          type="color"
          value={this.state.paintColor}
          onChange={this.handleColorSelection}
        />
        <div className="App">
          {this.state.boxes.map((box) => {
            return (
              <Box
                key={box.id}
                id={box.id}
                color={box.color}
                onClick={this.handleBoxClick}
                onDbClick={this.handle}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default App;
