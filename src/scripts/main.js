'use strict';

const inputsList = document.querySelectorAll('form input');
const arrayInputs = Array.from(inputsList);

arrayInputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.setAttribute(
    'placeholder',
    input.name.charAt(0).toUpperCase() + input.name.slice(1),
  );

  input.parentNode.insertBefore(label, input);
});
