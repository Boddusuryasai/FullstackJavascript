
const form = document.querySelector('.container');
const result = document.querySelector('.result');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const binaryInput = document.querySelector('#binary');
  const binary = binaryInput.value;
  result.textContent = `Decimal Number: ${parseInt(binary,2)}`;
});
