// Import an npm package
import dayjs from "dayjs";

// Export by name
export function updateText(selector, text) {
  document.querySelector(selector).textContent = text;
}

export function formatToday(format) {
  return dayjs(new Date()).format(format);
}
