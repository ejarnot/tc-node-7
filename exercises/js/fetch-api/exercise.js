// Giphy Fetch API by Search Term
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "54f0MhTKuI2nxwD9nhEvN4ifNwephcpz";

let prevSearches = [];

let inputEle = document.querySelector("#gifSearch");
let prevSearchesEle = document.querySelector("#prevSearches");
let searchBtnEle = document.querySelector("#searchBtn");
let imgEle = document.querySelector("#giphy");
let titleEle = document.querySelector("#gifTitle");

searchBtnEle.addEventListener("click", searchGif);

async function searchGif(event, prevSearch) {
  let searchTerm = prevSearch || inputEle.value;

  if (!prevSearches.includes(searchTerm)) {
    prevSearches.push(searchTerm);
    let prevSearchEle = document.createElement("p")
    prevSearchEle.textContent = searchTerm;
    prevSearchEle.addEventListener("click", (e) => searchGif(e, searchTerm))
    prevSearchesEle.appendChild(prevSearchEle);
  }

  try {
    let response = await fetch(
      `${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`
    );
    let responseBody = await response.json();
    console.log(responseBody);
    titleEle.textContent = responseBody.data.title;
    imgEle.src = responseBody.data.images.original.url;

    inputEle.value = "";
  } catch (error) {
    console.error(error);
  }
}
