import { bodyElement } from "./domElements.js";
import { setAppState, getAppState } from "./stateManagement.js";

// Theme logic using state management instead of direct localStorage
export function changeTheme() {
    const themeButton = document.getElementById("theme-button");

    const setTheme = (theme) => {
        bodyElement.classList.remove("light-theme", "dark-theme");
        bodyElement.classList.add(theme);

        // Store theme in state management
        setAppState({ currentTheme: theme });
        updateThemeButton(theme);
    };

    const updateThemeButton = (theme) => {
        if (themeButton) {
            themeButton.setAttribute(
                "aria-label",
                `Switch to ${theme === "light-theme" ? "dark" : "light"} theme`
            );
        }
    };

    // Get stored theme from state
    const currentState = getAppState();
    const storedTheme = currentState.currentTheme;
    if (storedTheme) {
        setTheme(storedTheme);
    } else {
        // Check system preference
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const initialTheme = prefersDark ? "dark-theme" : "light-theme";
        setTheme(initialTheme);
    }

    // Add click event listener if button exists
    if (themeButton) {
        themeButton.addEventListener("click", () => {
            const newTheme = bodyElement.classList.contains("light-theme")
                ? "dark-theme"
                : "light-theme";
            setTheme(newTheme);
        });
    }

    // Listen for system theme changes
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
            // Only auto-change if user hasn't manually set a theme
            const currentState = getAppState();
            if (!currentState.currentTheme) {
                setTheme(e.matches ? "dark-theme" : "light-theme");
            }
        });
}