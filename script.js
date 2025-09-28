// script.js

// Selectors
const toggleBtn = document.getElementById("toggleMode");
const htmlEl = document.documentElement;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  htmlEl.setAttribute("data-theme", savedTheme);
  updateBtnText(savedTheme);
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  const currentTheme = htmlEl.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  htmlEl.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateBtnText(newTheme);
});

// Helper: update button label/icon
function updateBtnText(theme) {
  if (theme === "dark") {
    toggleBtn.textContent = "☀️ Light Mode";
    toggleBtn.setAttribute("aria-pressed", "true");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    toggleBtn.setAttribute("aria-pressed", "false");
  }
}

// Example: (optional) Add function for PDF download
const downloadBtn = document.getElementById("downloadPdf");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    alert("This is where PDF export logic would go.");
    // In production you can integrate html2pdf.js or a backend service
  });
}
