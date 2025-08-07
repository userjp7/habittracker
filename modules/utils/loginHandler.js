import { displayMessage } from "./displayMessage.js";
import { setView } from "./stateManagement.js";


export  function loginHandler() {
const validatePassword = document.querySelector('.login-section-input-password');
const loginButton = document.querySelector('.login-button');
const password = localStorage.getItem('password');

loginButton.addEventListener('click', () => {
    if (validatePassword.value === password) {

        setView('dashboard');
    } else {
        console.log(validatePassword.value,password);
        displayMessage('Wrong password', 'error', 3000, 'bottom');
    }
});

}