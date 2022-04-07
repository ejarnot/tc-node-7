import "./App.css";
import { Component } from "react";

function Title({ onClick, className, children }) {
  return (
    <h1 onClick={onClick} className={className}>
      {children}
    </h1>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    let class1 = ["Ben", "Seth", "Cruz", "Amoriss"];
    let class2 = ["Michael", "John", "Jeremy", "Brittany", "Phillip"];

    let combined = [...class1, ...class2];

    this.state = {
      title: "Hello World",
      count: 0,
      students: combined,
    };
  }

  render() {
    let { title, count, students } = this.state;
    let props = {
      className: "main-title",
      onClick: () => alert(`You clicked the title ${count} time(s)`),
    };

    return (
      <div className="App">
        <header className="App-header">
          <Title {...props}>{title}</Title>
          <ul>
            {students.map((student, i) => {
              return <li key={`${student}${i}`}>{student}</li>;
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
