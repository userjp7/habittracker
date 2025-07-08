
// -----theme logic
const bodyElement = document.body;
export function changeTheme() {
    const changeTheme = document.getElementById("theme-button");

    const setTheme = (theme) => {
        bodyElement.classList.remove("light-theme", "dark-theme");
        bodyElement.classList.add(theme);
        localStorage.setItem("theme", theme);
        updateThemeButton(theme);
    };

    const updateThemeButton = (theme) => {
        changeTheme.setAttribute(
            "aria-label",
            `Switch to ${theme === "light-theme" ? "dark" : "light"} theme`
        );
    };

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        setTheme(storedTheme);
    } else {
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const initialTheme = prefersDark ? "dark-theme" : "light-theme";
        setTheme(initialTheme);
    }

    changeTheme.addEventListener("click", () => {
        const newTheme = bodyElement.classList.contains("light-theme")
            ? "dark-theme"
            : "light-theme";
        setTheme(newTheme);
    });

    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
            if (!localStorage.getItem("theme")) {
                setTheme(e.matches ? "dark-theme" : "light-theme");
            }
        });
}