// global variables
const user = JSON.parse(localStorage.getItem("user")) || {};
const viewState = JSON.parse(localStorage.getItem("viewState")) || {};
const notes = JSON.parse(localStorage.getItem("notes")) || [];
const todos = JSON.parse(localStorage.getItem("todos")) || [];
const history = JSON.parse(localStorage.getItem("history")) || [];
const dashboard = JSON.parse(localStorage.getItem("dashboard")) || [];
const appState = JSON.parse(localStorage.getItem("appState")) || {};

//  -----dom elements for global access
const bodyElement = document.body;
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
// app state
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
function renderCreateAccount() {}
// -----theme logic
function changeTheme() {
  const changeTheme = document.getElementById("theme-button");

  const setTheme = (theme) => {
    bodyElement.classList.remove("light-theme", "dark-theme");
    bodyElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    updateThemeButton(theme);
  };

  const updateThemeButton = (theme) => {
    changeTheme.setAttribute(
        "aria-label",
        `Switch to ${theme === "light-theme" ? "dark" : "light"} theme`
    );
  };

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    setTheme(storedTheme);
  } else {
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = prefersDark ? "dark-theme" : "light-theme";
    setTheme(initialTheme);
  }

  changeTheme.addEventListener("click", () => {
    const newTheme = bodyElement.classList.contains("light-theme")
        ? "dark-theme"
        : "light-theme";
    setTheme(newTheme);
  });

  window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          setTheme(e.matches ? "dark-theme" : "light-theme");
        }
      });
}

document.addEventListener("DOMContentLoaded", () => {
  changeTheme();
  stateManagement();
});
