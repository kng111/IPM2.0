const newsSection = document.querySelector('.news');
const newsTitle = document.querySelector('.news h1');
const newsCards = document.querySelector('.news_cards');
const newsItems = document.querySelectorAll('.news_item');

// Функция для показа заголовка с эффектом fade
function fadeIn(element) {
    element.style.opacity = '1';
    element.style.transition = 'opacity 1s ease-in-out';
}

// Функция для показа карточек с эффектом выпадения
function slideIn(element) {
    element.style.transform = 'translateX(0)';
    element.style.opacity = '1';
    element.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
}

// Функция для скрытия заголовка и карточек
function hideElements() {
    newsTitle.style.opacity = '0';
    newsTitle.style.transition = 'opacity 0.5s ease-in-out';
    newsItems.forEach(item => {
        item.style.transform = 'translateX(-100%)';
        item.style.opacity = '0';
        item.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    });
}

// Добавляем обработчик события прокрутки страницы
window.addEventListener('scroll', () => {
    const newsSectionTop = newsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (newsSectionTop < windowHeight * 0.75) {
        // Если блок "Новости" виден на экране, показываем заголовок и карточки
        fadeIn(newsTitle);
        newsItems.forEach((item, index) => {
            setTimeout(() => {
                slideIn(item);
            }, index * 200);
        });
    } else {
        // Если блок "Новости" скрыт за экраном, скрываем заголовок и карточки
        hideElements();
    }
});