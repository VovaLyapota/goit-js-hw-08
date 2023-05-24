import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input[name=email]');
const messageInput = document.querySelector('textarea[name=message]');
const formEl = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

emailInput.addEventListener('input', throttle(handleInput, 500));
messageInput.addEventListener('input', throttle(handleInput, 500));
formEl.addEventListener('submit', handleSubmit);

const localStorageGetItems = localStorage.getItem(LOCALSTORAGE_KEY);

if (localStorageGetItems) {
  const inputValues = JSON.parse(localStorageGetItems);

  emailInput.value = inputValues.emailTextInput;
  messageInput.value = inputValues.messageTextInput;
}

function handleInput() {
  const emailTextInput = emailInput.value;
  const messageTextInput = messageInput.value;

  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({ emailTextInput, messageTextInput })
  );
}

function handleSubmit(event) {
  event.preventDefault();
  const inputValues = JSON.parse(localStorageGetItems);
  console.log(`Email: ${inputValues.emailTextInput}`);
  console.log(`Message: ${inputValues.messageTextInput}`);

  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
