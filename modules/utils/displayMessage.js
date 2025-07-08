// -----display pop-up messages
export function displayMessage(
    message,
    type = "info", // Can be 'info', 'success', 'error', 'warning'
    duration = 3000, // How long it stays visible in milliseconds
    position = "top" // Can be "top" or "bottom"
) {
    const messageContainer = document.createElement("div");
    // Add base class and type-specific class
    messageContainer.className = `message-container ${type}`;
    messageContainer.textContent = message;

    // Basic positioning
    messageContainer.style.position = "fixed";
    messageContainer.style.left = "50%";
    messageContainer.style.transform = "translateX(-50%)";
    messageContainer.style.zIndex = "10000"; // Ensure it's on top of everything

    if (position === "top") {
        messageContainer.style.top = "20px"; // Distance from top
        messageContainer.style.bottom = "auto";
    } else {
        messageContainer.style.bottom = "20px"; // Distance from bottom
        messageContainer.style.top = "auto";
    }

    document.body.appendChild(messageContainer);

    // Remove the message after 'duration'
    setTimeout(() => {
        messageContainer.remove();
    }, duration);
}