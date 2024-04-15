document.getElementById('menu__toggle').addEventListener('change', function() {
    var headerNav = document.querySelector('.header__nav');
    if (this.checked) {
        headerNav.classList.add('menu-open');
    } else {
        headerNav.classList.remove('menu-open');
    }
});