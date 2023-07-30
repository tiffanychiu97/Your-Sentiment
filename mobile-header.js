let hamburger = document.querySelector(".hb");
let menu = document.querySelector(".main-nav");
    hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');
    });