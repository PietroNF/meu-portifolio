const inputTextArea = document.getElementById("texto-area");
const characCount = document.getElementById("cara-count");
const wordCount = document.getElementById("p-count");

inputTextArea.addEventListener("input", () => {
  characCount.textContent = inputTextArea.value.length;
  const txt = inputTextArea.value.trim();
  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});
