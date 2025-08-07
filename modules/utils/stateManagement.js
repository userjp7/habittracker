// Define initial state structure
const initialState = {
    userData: {
        user: []
    },
    currentView: 'landing',
    currentUser: null,
    isLoggedIn: false
};

let appState = null;

function loadState() {
    try {
        const savedState = localStorage.getItem("appState");
        console.log("Loading state from localStorage:", savedState); // Debug log
        if (!savedState) {
            return { ...initialState };
        }
        return JSON.parse(savedState);
    } catch (error) {
        console.error("Error loading state:", error);
        return { ...initialState };
    }
}

function saveState() {
    try {
        console.log("Saving state:", appState); // Debug log
        localStorage.setItem("appState", JSON.stringify(appState));
        console.log("State saved successfully"); // Debug log
        return true;
    } catch (error) {
        console.error("Error saving state:", error);
        return false;
    }
}

export function createUserAccount(userData) {
    const username = userData.firstName.toLowerCase();
    
    // Initialize appState if it's null
    if (!appState) {
        appState = loadState();
    }
    
    // Check if a user exists
    if (appState.userData.user.includes(username)) {
        throw new Error('User already exists');
    }
    
    // Update the state with a new user
    appState.userData.user.push(username);
    appState.userData[username] = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        birthDate: userData.birthDate,
        gender: userData.gender,
        password: userData.password,
        notes: {},
        todos: {}
    };
    
    // Save the updated state
    saveState();
    console.log("User account created:", username); // Debug log
}

export function setUser(username) {
    const currentState = getAppState();
    if (!currentState.userData.user.includes(username)) {
        throw new Error('User not found');
    }
    
    setAppState({
        currentUser: username,
        isLoggedIn: true
    });
}

export function getUser() {
    const state = getAppState();
    return state.currentUser ? state.userData[state.currentUser] : null;
}

export function isUserLoggedIn() {
    const state = getAppState();
    return state.isLoggedIn && state.currentUser !== null;
}

import { renderLogin } from "../views/renderLogin.js";
import { renderLanding } from "../views/renderLanding.js";
import { renderCreateAccount } from "../views/renderCreateAccount.js";
import { renderMainApp } from "../views/renderMainApp.js";

export function stateManagement() {
    // Load the state
    appState = loadState();
    console.log("Initial state loaded:", appState); // Debug log
    
    // Check if there are any users
    if (appState.userData.user.length > 0 && !appState.isLoggedIn) {
        setView('login');
    } else {
        setView('landing');
    }
}

export function setView(viewName) {
    if (!appState) {
        appState = loadState();
    }
    appState.currentView = viewName;
    saveState();
    renderCurrentView();
}

export function getCurrentView() {
    return getAppState().currentView || 'landing';
}

export function logout() {
    setAppState({
        currentUser: null,
        isLoggedIn: false,
        currentView: 'login'
    });
    renderCurrentView();
}

export function clearAllData() {
    localStorage.removeItem("appState");
    appState = { ...initialState };
    saveState();
}

function renderCurrentView() {
    const view = getAppState().currentView || 'landing';
    switch (view) {
        case 'landing':
            renderLanding();
            break;
        case 'login':
            renderLogin();
            break;
        case 'create-account':
            renderCreateAccount();
            break;
        case 'dashboard':
            renderMainApp();
            break;
        default:
            renderLanding();
    }
}

// Debug function
export function debugState() {
    console.log("Current State:", {
        inMemory: appState,
        localStorage: JSON.parse(localStorage.getItem("appState") || '{}')
    });
}

// Add this function to your stateManagement.js
export function getAppState() {
    if (!appState) {
        appState = loadState();
    }
    return appState;
}

// Add this function to your stateManagement.js
export function setAppState(updates) {
    if (!appState) {
        appState = loadState();
    }
    
    // Deep merge the updates with the current state
    appState = {
        ...appState,
        ...updates,
        userData: {
            ...appState.userData,
            ...(updates.userData || {})
        }
    };
    
    // Save to localStorage
    saveState();
    
    return appState;
}

// Also update your debugAppState to use the exported function
window.debugAppState = {
    getState: () => getAppState(),
    localStorage: () => localStorage.getItem("appState"),
    clearState: () => {
        localStorage.removeItem("appState");
        appState = { ...initialState };
        saveState();
    }
};