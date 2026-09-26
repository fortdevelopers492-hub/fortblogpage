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

  // --- 8. Monetag Reverse Popunder for Selected Buttons ---
  const MONETAG_SMART_LINK = "https://omg10.com/4/11895105";

  function triggerReversePopunder(adUrl) {
    if (!adUrl) return;

    try {
      const adWindow = window.open(
        adUrl,
        "_blank",
        "toolbar=no,scrollbars=yes,resizable=yes,width=1000,height=700"
      );

      if (adWindow) {
        window.focus();
        try {
          adWindow.blur();
        } catch (err) {
          // Browser security fallback
        }
      }
    } catch (e) {
      console.warn("Popunder creation blocked by browser environment.", e);
    }
  }

  const adButtons = document.querySelectorAll(".monetag-ad-btn");
  adButtons.forEach((button) => {
    button.addEventListener("click", () => {
      triggerReversePopunder(MONETAG_SMART_LINK);
    });
  });    
});