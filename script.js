document.addEventListener('DOMContentLoaded', function () {
    const buttonUp = document.querySelector('.button-up');


    if (buttonUp) {
        window.onscroll = function () {
            buttonUp.classList.toggle('visible', window.scrollY > 100);
        };

        buttonUp.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});