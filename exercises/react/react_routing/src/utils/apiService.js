export const GHIBLI_BASE_URL = "https://ghibliapi.herokuapp.com/";

export async function apiService(url) {
  try {
    let res = await fetch(url);
    if (res.ok) {
      let data = await res.json();
      return data;
    } else {
      throw new Error("Failed to fetch");
    }
  } catch (e) {
    console.error(e);
    return false;
  }
}
