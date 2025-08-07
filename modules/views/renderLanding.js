import {render} from "../utils/domElements.js";
import {setView} from "../utils/stateManagement.js";

// -----landing page state
export function renderLanding() {
    render.innerHTML = `
  <div class="body">
          <h1 class="heading-main">
            Make Every Idea Count. Every Task Completes.
          </h1>
          <p class="paragraph-main">
            Your ultimate workspace for productivity and brilliance. Our Todo &
            Notes app empowers you to plan, execute, and remember everything that
            drives you forward. Streamline your workflow, declutter your mind, and
            achieve your biggest goals with features designed for simplicity and
            power. Whether it's daily errands or long-term projects, you'll find
            everything you need to stay organized and on track. What will you
            achieve next?
          </p>
          <button class="start-button interactive-ui" id="start-button">
            Get Started
          </button>
        </div>`;
    const startButton = document.getElementById("start-button");
    if (startButton) {
        startButton.addEventListener("click", () => {
            setView("create-account");
        });
    }
}