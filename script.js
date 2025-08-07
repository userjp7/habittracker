import {changeTheme} from './modules/utils/changeTheme.js'
import {stateManagement, debugState} from './modules/utils/stateManagement.js'

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    changeTheme();
    console.log("Theme initialized");
    stateManagement();
    console.log("State management initialized");
    
    // Debug: Log state on load
    debugState();
    
    // Debug: Monitor localStorage changes
    window.addEventListener('storage', (e) => {
        if (e.key === 'appState') {
            console.log('LocalStorage changed:', {
                oldValue: JSON.parse(e.oldValue || '{}'),
                newValue: JSON.parse(e.newValue || '{}')
            });
        }
    });
});