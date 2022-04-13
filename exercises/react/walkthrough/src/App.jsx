import "./App.css";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import ToDoView from "./views/ToDoView";
import CodewarsView from "./views/CodewarsView";
import Test from "./views/Test";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="to-do" element={<ToDoView />} />
          <Route path="codewars-compare" element={<CodewarsView />} />
          <Route path="test/:value" element={<Test />} />
          <Route path=":value" element={<Test />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
