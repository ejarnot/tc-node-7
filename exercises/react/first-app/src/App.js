import "./App.css";
import { Component } from "react";

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_KEY = "50ecfa12fec87b27b7c2dd13c854820d";

class App extends Component {
  constructor(props) {
    super(props);

    this.controller = new AbortController();

    this.state = {
      temp: null,
      hasLoaded: false,
      city: "Birmingham",
    };
  }

  componentDidMount() {
    try {
      this.fetchWeather();
    } catch (e) {
      alert(e.message);
    }
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  fetchWeather = async () => {
    let res = await fetch(
      `${WEATHER_URL}?units=imperial&q=${this.state.city}&appid=${WEATHER_KEY}`,
      { signal: this.controller.signal }
    );
    let data = await res.json();
    this.setState({ temp: data.main.temp, hasLoaded: true });
  };

  handleCityChange = (event) => {
    this.setState({ city: event.target.value });
  };

  render() {
    if (this.state.hasLoaded) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Fetch Requests in React</h1>
            <p>Currently {this.state.temp} degrees.</p>
            <input
              type="text"
              value={this.state.city}
              onChange={this.handleCityChange}
            />
            <button onClick={this.fetchWeather}>Get Weather</button>
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
