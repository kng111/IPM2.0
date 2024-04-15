// Выбираем элементы DOM
const actualSection = document.querySelector('.actual');
const actualTitle = document.querySelector('.actual h1');
const cards = document.querySelectorAll('.cards_item .card');


// Функция для отображения заголовка и анимации карточек
function showCards() {
    actualTitle.style.opacity = '1'; // Показываем заголовок
    actualTitle.style.transform = 'translateY(0)'; // Сдвигаем заголовок вверх
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'translateX(0)'; // Сдвигаем карточку вправо
            card.style.opacity = '1'; // Показываем карточку
        }, index * 200); // Добавляем задержку для каждой карточки
    });
}

// Функция для скрытия заголовка и анимации карточек
function hideCards() {
    actualTitle.style.opacity = '0'; // Скрываем заголовок
    actualTitle.style.transform = 'translateY(100%)'; // Сдвигаем заголовок вниз
    cards.forEach((card, index) => {
        card.style.transform = 'translateX(100%)'; // Сдвигаем карточку за экран
        card.style.opacity = '0'; // Скрываем карточку
    });
}
// Добавляем обработчик события прокрутки страницы
window.addEventListener('scroll', () => {
    const actualSectionTop = actualSection.getBoundingClientRect().top;
    if (actualSectionTop < window.innerHeight * 0.75) {
        actualTitle.classList.add('h1-visible'); // Если блок "Актуальное" виден на экране, добавляем класс для появления заголовка
    } else {
        actualTitle.classList.remove('h1-visible'); // Если блок "Актуальное" скрыт за экраном, удаляем класс
    }
});
// Добавляем обработчик события прокрутки страницы
window.addEventListener('scroll', () => {
    const actualSectionTop = actualSection.getBoundingClientRect().top;
    if (actualSectionTop < window.innerHeight * 0.75) {
        showCards(); // Если блок "Актуальное" виден на экране, показываем карточки
    } else {
        hideCards(); // Если блок "Актуальное" скрыт за экраном, скрываем карточки
    }
});

// Добавляем обработчики событий для каждой карточки
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('highlighted'); // Добавляем класс для выделения карточки
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('highlighted'); // Удаляем класс для выделения карточки
    });
});

const actualCards = document.querySelector('.actual_cards');

window.addEventListener('resize', () => {
    if (window.innerWidth <= 609) {
        actualCards.scrollLeft = 0; // Сбрасываем прокрутку при изменении размера окна
    }
});