const inputText = document.createElement('input');

const paragraph = document.createElement('p');
const divMain = document.querySelector('#inputText');
let text;
inputText.addEventListener('input', e => {
  const target = e.target;
  text = target.value;
});

setInterval(function () {
  paragraph.textContent = text;
}, 300);
divMain.append(inputText, paragraph);