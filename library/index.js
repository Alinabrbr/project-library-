
let menuBurger = document.querySelector('.menu-burger-container');
let menu = document.querySelector('.menu-burger_list');

menuBurger.addEventListener('click', function(){
    menuBurger.classList.toggle('active');
    menu.classList.toggle('active');
})