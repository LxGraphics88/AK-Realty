document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.querySelector('.main-nav');
    const topBarHeight = document.querySelector('.top-bar').offsetHeight;

    window.addEventListener('scroll', () => {
        // Make the main navigation sticky after scrolling past the top bar
        if (window.scrollY > topBarHeight) {
            mainNav.classList.add('sticky');
        } else {
            mainNav.classList.remove('sticky');
        }
    });

    // Simple smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});