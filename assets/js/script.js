// Noura‑Lamora site JavaScript
// This file contains simple enhancements such as dynamically updating the
// copyright year. If you wish to add more interactivity, you can expand this
// script.

// Update the copyright year in the footer automatically
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const yearSpanAr = document.getElementById('year-ar');
    const currentYear = new Date().getFullYear();
    if (yearSpan) yearSpan.textContent = currentYear;
    if (yearSpanAr) yearSpanAr.textContent = currentYear;
});
