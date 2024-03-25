// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.getElementById('menu__toggle');
//     const headerNav = document.querySelector('.header__nav');



//     menuToggle.addEventListener('change', function() {
//         if (this.checked) {
//             headerNav.style.display = 'flex';
//             document.body.style.overflow = 'hidden'; // Запрещаем скроллинг основного контента
//         } else {
//             headerNav.style.display = 'none';
//             document.body.style.overflow = ''; // Разрешаем скроллинг основного контента
//         }
//     });
// });


var mySwiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: true,


    pagination: '.swiper-pagination',


    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',


    scrollbar: '.swiper-scrollbar',
})