import "./App.css";
import { useState, useEffect } from "react";

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_KEY = "50ecfa12fec87b27b7c2dd13c854820d";

function App() {
  let controller = new AbortController();

  let [temp, setTemp] = useState(null);
  let [city, setCity] = useState("Birmingham");
  let [hasLoaded, setHasLoaded] = useState(false);

  const fetchWeather = async () => {
    let res = await fetch(
      `${WEATHER_URL}?units=imperial&q=${city}&appid=${WEATHER_KEY}`,
      { signal: controller.signal }
    );
    let data = await res.json();
    setTemp(data.main.temp);
    setHasLoaded(true);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    try {
      fetchWeather();
    } catch (e) {
      alert(e.message);
    }

    console.log(temp, city, hasLoaded);

    return () => controller.abort();
  }, []);

  if (hasLoaded) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fetch Requests in React</h1>
          <p>Currently {temp} degrees.</p>
          <input type="text" value={city} onChange={handleCityChange} />
          <button onClick={fetchWeather}>Get Weather</button>
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

export default App;
