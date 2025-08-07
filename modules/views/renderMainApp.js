import { render } from "../utils/domElements.js";
import { getUser } from "../utils/stateManagement.js";

export function renderMainApp() {
    const user = getUser();
    render.innerHTML = `
        <div class="dashboard">
            <h2>Welcome, ${user.firstName}!</h2>
            <div class="dashboard-content">
                <p>Your dashboard is being set up. This feature is coming soon!</p>
            </div>
        </div>
    `;
}