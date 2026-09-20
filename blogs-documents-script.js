// --- Theme Switcher Logic (Shared ID: fort_theme) ---
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const themeToggleIcon = document.getElementById("theme-toggle-icon");
    const themeToggleText = document.getElementById("theme-toggle-text");

    function updateToggleUI(isDark) {
        if (isDark) {
            if (themeToggleIcon) {
                themeToggleIcon.classList.remove("fa-moon");
                themeToggleIcon.classList.add("fa-sun");
            }
            if (themeToggleText) {
                themeToggleText.textContent = "Light";
            }
        } else {
            if (themeToggleIcon) {
                themeToggleIcon.classList.remove("fa-sun");
                themeToggleIcon.classList.add("fa-moon");
            }
            if (themeToggleText) {
                themeToggleText.textContent = "Dark";
            }
        }
    }

    // Sync initial button icon and text state
    const isCurrentlyDark = document.documentElement.getAttribute("data-theme") === "dark";
    updateToggleUI(isCurrentlyDark);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const isDark = document.documentElement.getAttribute("data-theme") === "dark";

            if (isDark) {
                document.documentElement.removeAttribute("data-theme");
                localStorage.setItem("fort_theme", "light");
                updateToggleUI(false);
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("fort_theme", "dark");
                updateToggleUI(true);
            }
        });
    }
});