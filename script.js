document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.use');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(imageContainer);
});
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible1');
            }
        });
    });

    // Selecione todas as divs que quer animar
    const hiddenElements = document.querySelectorAll('.container');
    hiddenElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible1');
            }
        });
    });

    // Selecione todas as divs que quer animar
    const hiddenElements = document.querySelectorAll('.container2');
    hiddenElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible1');
            }
        });
    });

    // Selecione todas as divs que quer animar
    const hiddenElements = document.querySelectorAll('.container3');
    hiddenElements.forEach(el => observer.observe(el));
});