import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Result of 6<sup>4</sup> = {6 ** 4}
        </p>
      </header>
    </div>
  );
}

export default App;
