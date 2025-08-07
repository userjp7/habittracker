import { displayMessage } from "./displayMessage.js";
import { getAppState, createUserAccount, setView } from "./stateManagement.js";

export function newAccountHandler() {
    const form = document.querySelector(".create-account-form");
    const firstname = document.getElementById("first-name");
    const lastname = document.getElementById("last-name");
    const birthdate = document.getElementById("date-of-birth");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const createButton = document.getElementById("create-button");
    const backButton = document.getElementById("back-button");

    // Initially disable the creation button
    createButton.disabled = true;

    function checkUserExists(firstName) {
        const appState = getAppState();
        const username = firstName.toLowerCase();
        return appState.userData?.user?.includes(username) || false;
    }

    // Function to check if all fields are valid
    function validateForm() {
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const isFirstNameValid = firstname.value.trim().length >= 3 && /^[A-Za-z]+$/.test(firstname.value.trim());
        const isLastNameValid = lastname.value.trim().length >= 3 && /^[A-Za-z]+$/.test(lastname.value.trim());
        const isPasswordValid = password.value.length >= 6; // Added minimum length requirement
        const isConfirmPasswordValid = confirmPassword.value.length > 0;
        const doPasswordsMatch = password.value === confirmPassword.value;
        const isBirthDateValid = birthdate.value !== "";
        const isGenderSelected = !!gender;

        createButton.disabled = !(
            isFirstNameValid &&
            isLastNameValid &&
            isPasswordValid &&
            isConfirmPasswordValid &&
            doPasswordsMatch &&
            isBirthDateValid &&
            isGenderSelected
        );
    }

    // Add input event listeners to all form fields
    [firstname, lastname, birthdate, password, confirmPassword].forEach(input => {
        input.addEventListener("input", validateForm);
    });

    // Add change event listener to radio buttons
    document.querySelectorAll('input[name="gender"]').forEach(radio => {
        radio.addEventListener("change", validateForm);
    });

    // First name validation
    firstname.addEventListener("input", () => {
        const value = firstname.value.trim();
        if (value === "") {
            displayMessage("First name cannot be empty", "error", 3000, "bottom");
        } else if (value.length < 3) {
            displayMessage("First name must be at least 3 characters", "error", 3000, "bottom");
        } else if (!/^[A-Za-z]+$/.test(value)) {
            displayMessage("Only alphabets are allowed — no numbers, symbols, or spaces", "error", 3000, "bottom");
        } else if (checkUserExists(value)) {
            displayMessage("This username is already taken", "error", 3000, "bottom");
            createButton.disabled = true;
        }
        validateForm();
    });

    // Last name validation
    lastname.addEventListener("input", () => {
        const value = lastname.value.trim();
        if (value === "") {
            displayMessage("Last name cannot be empty", "error", 3000, "bottom");
        } else if (value.length < 3) {
            displayMessage("Last name must be at least 3 characters", "error", 3000, "bottom");
        } else if (!/^[A-Za-z]+$/.test(value)) {
            displayMessage("Only alphabets are allowed — no numbers, symbols, or spaces", "error", 3000, "bottom");
        }
        validateForm();
    });

    // Password validation
    password.addEventListener("input", () => {
        if (password.value.length < 6) {
            displayMessage("Password must be at least 6 characters long", "error", 3000, "bottom");
        }
        validateForm();
    });

    // Password match validation
    confirmPassword.addEventListener("input", () => {
        if (password.value !== confirmPassword.value) {
            displayMessage("Passwords do not match", "error", 3000, "bottom");
        }
        validateForm();
    });

    // Form submission
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const firstName = firstname.value.trim();
        
        // Check again if a user exists
        if (checkUserExists(firstName)) {
            displayMessage("This username is already taken", "error", 3000, "bottom");
            return;
        }

        const newUser = {
            firstName: firstName,
            lastName: lastname.value.trim(),
            birthDate: birthdate.value,
            gender: document.querySelector('input[name="gender"]:checked')?.value,
            password: password.value
        };

        try {
            // Use the new createUserAccount function instead
            createUserAccount(newUser);
            setView('login');
            displayMessage("Account created successfully! Please log in.", "success", 3000, "bottom");
            
            // Clear form
            form.reset();
        } catch (error) {
            if (error.message === 'User already exists') {
                displayMessage("This username is already taken", "error", 3000, "bottom");
            } else {
                displayMessage("Error creating account", "error", 3000, "bottom");
            }
        }
    });

    // Back button handler
    backButton.addEventListener("click", () => {
        setView('landing');
    });
}