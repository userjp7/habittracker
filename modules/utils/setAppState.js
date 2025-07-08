export const appState = JSON.parse(localStorage.getItem("appState")) || {};
export const user = JSON.parse(localStorage.getItem("user")) || {};

// ----- app state updater
export function setAppState(updates) {
    Object.assign(appState, updates);
    localStorage.setItem("appState", JSON.stringify(appState));
}
