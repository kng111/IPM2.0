document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
        // Указываете путь к файлу PDF
        var url = "./img_vacancy/Презентация FAW J7.pdf";

        // Запрос к файлу
        fetch(url)
            .then(response => response.blob()) // Преобразует ответ в blob
            .then(blob => {
                // Создает URL для blob
                var blobUrl = window.URL.createObjectURL(blob);
                var downloadLink = document.createElement('a');
                downloadLink.href = blobUrl;
                downloadLink.download = 'Презентация FAW J7.pdf'; // Имя файла для скачивания

                // Эмулирует клик по ссылке для скачивания
                document.body.appendChild(downloadLink);
                downloadLink.click();

                // Очистка после скачивания
                document.body.removeChild(downloadLink);
                window.URL.revokeObjectURL(blobUrl); // Освобождает URL
            })
            .catch(e => console.error('Ошибка при скачивании файла: ', e));
    });
});