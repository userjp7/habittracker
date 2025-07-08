import {changeTheme} from './scripts/changeTheme.js'

// global variables
const user = JSON.parse(localStorage.getItem("user")) || {};
const viewState = JSON.parse(localStorage.getItem("viewState")) || {};
const notes = JSON.parse(localStorage.getItem("notes")) || [];
const todos = JSON.parse(localStorage.getItem("todos")) || [];
const history = JSON.parse(localStorage.getItem("history")) || [];
const dashboard = JSON.parse(localStorage.getItem("dashboard")) || [];
const appState = JSON.parse(localStorage.getItem("appState")) || {};

//  -----dom elements for global access
const render = document.getElementById("render");

// -----startup logic for initial rendering
function stateManagement() {
  if (localStorage.getItem("user")) {
    setAppState({ currentView: "login", isLoggedIn: false });
    renderLogin();
  } else {
    setAppState({ currentView: "landing", isLoggedIn: false });
    renderLanding();
  }
}

// ----- app state updater
function setAppState(updates) {
  Object.assign(appState, updates);
  localStorage.setItem("appState", JSON.stringify(appState));
}

// -----login state
function renderLogin() {}

// -----landing page state
function renderLanding() {
  render.innerHTML = `
  <div class="body">
          <h1 class="heading-main">
            Make Every Idea Count. Every Task Complete.
          </h1>
          <p class="paragraph-main">
            Your ultimate workspace for productivity and brilliance. Our Todo &
            Notes app empowers you to plan, execute, and remember everything that
            drives you forward. Streamline your workflow, declutter your mind, and
            achieve your biggest goals with features designed for simplicity and
            power. Whether it's daily errands or long-term projects, you'll find
            everything you need to stay orgnized and on track. What will you
            accomplish next?
          </p>
          <button class="start-button interactive-ui" id="start-button">
            Get Started
          </button>
        </div>`;
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", () => {
    setAppState({ currentView: "createAccount", isLoggedIn: false });
    renderCreateAccount();
  });
}

// -----create account state
function renderCreateAccount() {
  render.innerHTML = `
  <div class="create-account-section">
      <p>Create Your Account</p>
      <p>start a new journey</p>
      <form class="create-account-form">
        <label for="first-name">First Name</label>
        <input
          class="interactive-ui"
          id="first-name"
          name="first-name"
          placeholder="Jyotiprakash"
          type="text"
          autocomplete="given-name"
          required
        />

        <label for="last-name">Last Name</label>
        <input
          class="interactive-ui"
          id="last-name"
          name="last-name"
          placeholder="Mahto"
          type="text"
          autocomplete="family-name"
          required
        />

        <label for="date-of-birth">Date of birth</label>
        <input class="interactive-ui" id="date-of-birth" type="date" required />

        <fieldset class="gender-group">
          <legend>Gender</legend>
          <div class="gender-group-row">
            <div class="gender-option">
              <input
                class="interactive-ui"
                id="male"
                name="gender"
                value="male"
                type="radio"
                required
              />
              <label for="male">Male</label>
            </div>
            <div class="gender-option">
              <input
                class="interactive-ui"
                id="female"
                name="gender"
                value="female"
                type="radio"
              />
              <label for="female">Female</label>
            </div>
          </div>
        </fieldset>

        <label for="password">Enter New Password</label>
        <input
          class="interactive-ui"
          id="password"
          placeholder="Enter Password"
          type="password"
          required
        />

        <label for="confirm-password">Confirm Password</label>
        <input
          class="interactive-ui"
          id="confirm-password"
          placeholder="Confirm Password"
          type="password"
          required
        />
        <span class="form-buttons">
          <button
            type="submit"
            class="create-button interactive-ui"
            id="create-button"
          >
            Create
          </button>
          <button
            type="button"
            class="back-button interactive-ui"
            id="back-button"
          >
            Back
          </button>
        </span>
      </form>
    </div>
`;
  const firstname = document.getElementById("first-name");
  const lastname = document.getElementById("last-name");
  const dateofbirth = document.getElementById("date-of-birth");
  const male = document.getElementById("male");
  const female = document.getElementById("female");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const createButton = document.getElementById("create-button");
  const backButton = document.getElementById("back-button");

  //   regex evaluation for first name.
  firstname.addEventListener("input", () => {
    const value = firstname.value.trim();
    if (value === "") {
      displayMessage("first name cannot be empty", "error", 3000, "bottom");
    } else if (value.length < 3) {
      displayMessage(
        "first name must be at least 3 characters",
        "error",
        3000,
        "bottom"
      );
    } else if (!/^[A-Za-z]+$/.test(value)) {
      displayMessage(
        "Only alphabets are allowed — no numbers, symbols, or spaces",
        "error",
        3000,
        "bottom"
      );
    }
  });
  // regex evaluation for second name.
  lastname.addEventListener("input", () => {
    const value = lastname.value.trim();
    if (value === "") {
      displayMessage("first name cannot be empty", "error", 3000, "bottom");
    } else if (value.length < 3) {
      displayMessage(
          "first name must be at least 3 characters",
          "error",
          3000,
          "bottom"
      );
    } else if (!/^[A-Za-z]+$/.test(value)) {
      displayMessage(
          "Only alphabets are allowed — no numbers, symbols, or spaces",
          "error",
          3000,
          "bottom"
      );
    }
    
  })
}

// -----display pop-up messages
function displayMessage(
  message,
  type = "info", // Can be 'info', 'success', 'error', 'warning'
  duration = 3000, // How long it stays visible in milliseconds
  position = "top" // Can be "top" or "bottom"
) {
  const messageContainer = document.createElement("div");
  // Add base class and type-specific class
  messageContainer.className = `message-container ${type}`;
  messageContainer.textContent = message;

  // Basic positioning
  messageContainer.style.position = "fixed";
  messageContainer.style.left = "50%";
  messageContainer.style.transform = "translateX(-50%)";
  messageContainer.style.zIndex = "10000"; // Ensure it's on top of everything

  if (position === "top") {
    messageContainer.style.top = "20px"; // Distance from top
    messageContainer.style.bottom = "auto";
  } else {
    messageContainer.style.bottom = "20px"; // Distance from bottom
    messageContainer.style.top = "auto";
  }

  document.body.appendChild(messageContainer);

  // Remove the message after 'duration'
  setTimeout(() => {
    messageContainer.remove();
  }, duration);
}




document.addEventListener("DOMContentLoaded", () => {
  changeTheme();
  stateManagement();
});
