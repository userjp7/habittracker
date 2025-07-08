import {setAppState}from "./setAppState.js";
import {renderLogin}from "../views/renderLogin.js"
import {renderLanding}from "../views/renderLanding.js"


// -----startup logic for initial rendering
export function stateManagement() {
    if (localStorage.getItem("user")) {
        setAppState({ currentView: "login", isLoggedIn: false });
        renderLogin();
    } else {
        setAppState({ currentView: "landing", isLoggedIn: false });
        renderLanding();
    }
}