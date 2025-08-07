import { render } from "../utils/domElements.js";
import { newAccountHandler } from "../utils/newAccountHandler.js";

export function renderCreateAccount() {
    render.innerHTML = `
    <div class="create-account-section">
        <p>Create Your Account</p>
        <p>Start a new journey</p>
        <form class="create-account-form">
            <label for="first-name">First Name</label>
            <input
                class="interactive-ui"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                type="text"
                autocomplete="given-name"
                required
            />

            <label for="last-name">Last Name</label>
            <input
                class="interactive-ui"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                type="text"
                autocomplete="family-name"
                required
            />

            <label for="date-of-birth">Date of birth</label>
            <input 
                class="interactive-ui" 
                id="date-of-birth" 
                type="date" 
                required 
            />

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
    </div>`;
    
    newAccountHandler();
}