window.addEventListener('scroll', function() {
    // This can be used to add any interactive behavior on scroll
    let button = document.querySelector('.whatsapp-button img');
    button.style.transform = 'scale(1.2)';
    
    setTimeout(function() {
        button.style.transform = 'scale(1)';
    }, 300);
});