document.addEventListener("DOMContentLoaded", function() {
    // Плавное появление текста
    const mainText = document.querySelector(".main__text");
    mainText.style.opacity = 1;

    // Плавное появление изображения
    const mainImage = document.querySelector(".main__image");
    mainImage.style.transform = "translateX(0)";
});