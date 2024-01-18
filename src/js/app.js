document.addEventListener('DOMContentLoaded', () => {
  const counterButton = document.getElementById('counter-button');
  const counterValue = document.getElementById('counter-value');
  let counter = parseInt(counterValue.textContent, 10);
  
  counterButton.addEventListener('click', () => {
    counter += 1;
    counterValue.textContent = counter;
  });
});
