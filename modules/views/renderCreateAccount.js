import {render} from "../utils/domElements.js";
import {displayMessage} from "../utils/displayMessage.js";
import {setAppState} from "../utils/setAppState.js";

// -----create account state
export function renderCreateAccount() {
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
    // const birthdate = document.getElementById("date-of-birth");
    // const male = document.getElementById("male");
    // const female = document.getElementById("female");
    // const password = document.getElementById("password");
    // const confirmPassword = document.getElementById("confirm-password");
    // const createButton = document.getElementById("create-button");
    // const backButton = document.getElementById("back-button");

    //   regex evaluation for the first name.
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
    // regex evaluation for the second name.
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