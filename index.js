const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const iframe = document.querySelector('iframe');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  iframe.src = input.value;
});
