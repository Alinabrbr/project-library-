
let menuBurger = document.querySelector('.menu-burger');
let menu = document.querySelector('.menu-burger_list');
let icon = document.querySelector('.icon-profile');

menuBurger.addEventListener('click', function(){
    menuBurger.classList.toggle('active');
    menu.classList.toggle('active');
    icon.classList.toggle('active');
})