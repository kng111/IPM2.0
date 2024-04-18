$(document).ready(function() {
    $('.btn-header').click(function() {
        // Переключаем класс 'click', который управляет поведением кнопки
        $(this).toggleClass("click");
        $('.sidebar').toggleClass("show");

        // Проверяем наличие класса 'click' для определения, какую иконку показывать
        if ($(this).hasClass("click")) {
            // Показываем иконку "close" и скрываем "hamburger"
            $('#close-icon').addClass('show');
            $('#hamburger-icon').removeClass('show');
        } else {
            // Показываем иконку "hamburger" и скрываем "close"
            $('#hamburger-icon').addClass('show');
            $('#close-icon').removeClass('show');
        }
    });

    // Дополнительные функции для обработки других элементов меню
    $('.feat-btn').click(function() {
        $('.sidebar ul .feat-show').toggleClass("show");
        $('.sidebar ul .first').toggleClass("rotate");
    });

    $('.serv-btn').click(function() {
        $('.sidebar ul .serv-show').toggleClass("show1");
        $('.sidebar ul .second').toggleClass("rotate");
    });

    $('.sidebar ul li').click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
});