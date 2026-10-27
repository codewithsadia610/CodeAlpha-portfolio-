
document.addEventListener('DOMContentLoaded', function () {

    // Navigation links
    const navLinks = document.querySelectorAll('.navbar nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            console.log('Navigation clicked:', link.textContent.trim());
        });
    });

    // Reveal sections smoothly
    const sections = document.querySelectorAll('main section');

    // Show every section immediately as a safe default
    sections.forEach(function (section) {
        section.classList.add('visible');
    });

    // Update footer year automatically
    const footerYear = document.querySelector('footer p:last-child');

    if (footerYear) {
        footerYear.textContent =
            '© ' + new Date().getFullYear() +
            ' • Learning through code';
    }

});
