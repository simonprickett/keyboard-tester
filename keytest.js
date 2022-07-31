const outputArea = document.getElementById('output');

outputArea.addEventListener('keydown', (e) => {
  outputArea.innerHTML = `${outputArea.innerHTML}<br/>${e.code}`;
});