document.addEventListener('DOMContentLoaded', function() {
    var viewButton = document.getElementById('viewButton');
    viewButton.addEventListener('click', function() {
        var url = "./img_vacancy/Презентация FAW J7.pdf";
        var a = document.createElement('a');
        a.href = url;
        a.download = 'Обзор FAW J7.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});