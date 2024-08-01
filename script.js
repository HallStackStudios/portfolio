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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible1'); // Adiciona a classe visível
                observer.unobserve(entry.target); // Para parar de observar após a animação
            }
        });
    }, {
        threshold: 0.1 // Percentual de visibilidade necessário para acionar a animação
    });

    // Selecione todos os elementos que quer animar
    const hiddenElements = document.querySelectorAll('.container, .container2, .container3');
    hiddenElements.forEach(el => observer.observe(el));
});