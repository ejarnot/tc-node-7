import "./App.css";
import { Component } from "react";

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_KEY = "50ecfa12fec87b27b7c2dd13c854820d";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: null,
      isLoaded: false,
    };

    this.controller;
  }

  componentDidMount() {
    try {
      this.fetchWeather();
    } catch (e) {
      alert(e.message);
    }
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  async fetchWeather() {
    this.controller = new AbortController();
    let res = await fetch(
      WEATHER_URL + "?units=imperial&q=Birmingham,us-al&appid=" + WEATHER_KEY,
      { signal: this.controller.signal }
    );
    let data = await res.json();
    this.setState({ temp: data.main.temp, isLoaded: true });
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Fetch Requests in React</h1>
            <p>Currently {this.state.temp} degrees.</p>
          </header>
        </div>
      );
    } else {
      return (
        <div>
          <span>Loading...</span>
        </div>
      );
    }
  }
}

export default App;
