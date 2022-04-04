// Fetch API

// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=birmingham,us-al&appid=50ecfa12fec87b27b7c2dd13c854820d&units=imperial"
// )
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
//     console.log(data.sys.sunrise);
//     console.log(
//       `It is ${data.main.temp} ℉ in ${data.name}. Sunrise: ${new Date(
//         data.sys.sunrise * 1000
//       ).toLocaleTimeString()}, Sunset: ${new Date(
//         data.sys.sunset * 1000
//       ).toLocaleTimeString()}`
//     );
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Async/await

// async function getWeather() {
//   let results = await fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=birmingham,us-al&appid=50ecfa12fec87b27b7c2dd13c854820d&units=imperial"
//   );
//   let data = await results.json();

//   console.log(data.sys.sunrise);
//   console.log(
//     `It is ${data.main.temp} ℉ in ${data.name}. Sunrise: ${new Date(
//       data.sys.sunrise * 1000
//     ).toLocaleTimeString()}, Sunset: ${new Date(
//       data.sys.sunset * 1000
//     ).toLocaleTimeString()}`
//   );
// }

// try {
//   getWeather();
// } catch (e) {
//   console.error(e);
// }

// async function getGif() {
//   let results = await fetch(
//     "https://api.giphy.com/v1/gifs/translate?s=coding&api_key=54f0MhTKuI2nxwD9nhEvN4ifNwephcpz"
//   );
//   let data = await results.json();
//   console.log(data);
//   document.body.innerHTML = `<img src="${data.data.images.original.url}" alt="${data.data.title}">`;
// }

// try {
//   getGif();
// } catch (e) {
//   console.error(e);
// }

// fetch(
//   "https://api.giphy.com/v1/gifs/translate?s=coding&api_key=54f0MhTKuI2nxwD9nhEvN4ifNwephcpz"
// )
//   .then((results) => results.json())
//   .then((data) => {
//     console.log(data);
//     document.body.innerHTML = `<img src="${data.data.images.original.url}" alt="${data.data.title}">`;
//   })
//   .catch((err) => console.error(err));

let today = new Date("10-18-2023").getTime();
let in100Days = today - 100 * 24 * 3600 * 1000;
console.log(new Date(in100Days).toDateString());
