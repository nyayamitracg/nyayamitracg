// Minimal JS for NyayaMitra.cg - Static site interactivity
// Smooth scrolling for anchor links (e.g., hero buttons to sections)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Simple language toggle (if you want to add a toggle button later)
// Uncomment and add a button with id="lang-toggle" in HTML if needed
/*
document.getElementById('lang-toggle').addEventListener('click', function() {
    const elements = document.querySelectorAll('[data-hi], [data-en]');
    elements.forEach(el => {
        const current = el.textContent;
        el.textContent = el.getAttribute('data-hi') || el.getAttribute('data-en') || current;
    });
});
*/

// No heavy dependencies - keeps site fast on low-end devices