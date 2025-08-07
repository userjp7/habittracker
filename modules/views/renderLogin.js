// -----login state
import {render} from "../utils/domElements.js";
import {loginHandler} from "../utils/loginHandler.js";

export function renderLogin() {
    render.innerHTML=`<div class="login-section">
<p>Login to your account</p>
<div class="circle-container">
<div class="circle-text"></div>
<form class="login-form"></div>
<label for="password"></label>
            <input
                class="login-section-input-password interactive-ui"
                id="password"
                placeholder="Enter Password"
                type="password"
                required
            />
            <button
                    type="submit"
                    class="login-button interactive-ui"
                    id="login-button"
                >
                    login
                </button>

</form>
    </div>`;
    loginHandler();

}