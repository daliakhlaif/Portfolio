document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Loaded');

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    const skillBars = document.querySelectorAll('.skill-bar');

    window.addEventListener('scroll', () => {
        skillBars.forEach(skillBar => {
            const skillTop = skillBar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (skillTop < windowHeight) {
                skillBar.style.setProperty('--skill-level', skillBar.getAttribute('data-skill') + '%');
            }
        });
    });
});
