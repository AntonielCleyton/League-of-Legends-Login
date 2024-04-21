// Selecting all input elements
const inputs = document.querySelectorAll('.input');
// Selecting the login button
const button = document.querySelector('.login__button');

// Function to handle input focus event
const handleFocus = ({ target }) => {
  // Adding the 'span-active' class to the previous sibling element (span)
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}

// Function to handle input focus out event
const handleFocusOut = ({ target }) => {
  // Removing the 'span-active' class from the previous sibling element (span) if the input value is empty
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

// Function to handle input change event
const handleChange = () => {
  // Destructuring the inputs array to get username and password inputs
  const [username, password] = inputs;

  // Enabling or disabling the login button based on input values
  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}

// Adding event listeners to input elements for focus, focus out, and input events
inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));
