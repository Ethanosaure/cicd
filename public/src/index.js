import { generateText } from "./utils/generateText.js";

document.addEventListener("DOMContentLoaded", function () {
  const divText = document.getElementById("generateText");
  const addButton = document.getElementById("addText");
  const darkModeBtn = document.getElementById("darkMode");
  const html = document.querySelector("html");
  let darkMode = false;

  let text = generateText("puis s'en vont");

  addButton.addEventListener("click", addText);
  darkModeBtn.addEventListener("click", triggerdarkMode);

  function triggerdarkMode() {
    if (darkMode === false) {
      darkMode = true;
      html.className = "dark";
      addButton.className + "light";
      text.className + "light";
    } else {
      darkMode = false;
      html.className = "light";
      addButton.className + "dark:text-black";
      text.className + "dark";
    }
  }
  function addText() {
    const p = document.createElement("p");
    p.className = "element dark:text-white mb-2";
    p.innerHTML = p.innerHTML + text;
    divText.appendChild(p);
  }
});
