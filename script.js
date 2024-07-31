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
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.imagem-eu');

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
function movimento1() {
    var apagar1 = window.document.getElementById('bloco-front')
    apagar1.style.color = "whitesmoke"
}
function sair1() {
    var sair1 = window.document.getElementById('bloco-front')
    sair1.style.color = ""
}
function movimento2() {
    var apagar2 = window.document.getElementById('bloco-back')
    apagar2.style.color = "whitesmoke"
}
function sair2() {
    var sair2 = window.document.getElementById('bloco-back')
    sair2.style.color = ""
}