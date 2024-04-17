document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
        var url = "./ВАКАНСИИ/img_vacancy.pdf"; // Замените эту строку на путь к вашему PDF файлу
        var a = document.createElement('a');
        a.href = url;
        a.download = 'Обзор FAW J7.pdf'; // Название файла, с которым он будет скачан
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});