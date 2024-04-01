ymaps.ready(['Panel']).then(function() {
    var map = new ymaps.Map("map", {
        center: [55.733, 37.588],
        zoom: 9,
        controls: []

    });
    // Создадим контент для меток.
    var firstOffice = '<a href="https://bprum.ru/">Бизнес-парк «Румянцево». Офис нашей компании располагается здесь.</a>' +
        '<p><img style="width: 63%;margin-left:84px;object-fit: cover;border-radius: 26px;padding: 2%;" src="https://iter-design.com/wa-data/public/photos/93/18/1893/1893.1200.jpg"></p>' +
        '<p>Бизнес-парк «Румянцево» — крупнейший в Европе деловой комплекс на юго-западе Москвы </p>';

    // Создадим и добавим панель на карту.
    var panel = new ymaps.Panel();
    map.controls.add(panel, {
        float: 'left'
    });
    // Создадим коллекцию геообъектов.
    var collection = new ymaps.GeoObjectCollection(null, {
        // Запретим появление балуна.
        hasBalloon: false,
        iconColor: '#DE1919'
    });
    // Добавим геообъекты в коллекцию.
    collection
        .add(new ymaps.Placemark([55.635945, 37.437613], {
            balloonContent: firstOffice
        }));
    // Добавим коллекцию на карту.
    map.geoObjects.add(collection);
    // Подпишемся на событие клика по коллекции.
    collection.events.add('click', function(e) {
        // Получим ссылку на геообъект, по которому кликнул пользователь.
        var target = e.get('target');
        // Зададим контент боковой панели.
        panel.setContent(target.properties.get('balloonContent'));
        // Переместим центр карты по координатам метки с учётом заданных отступов.
        map.panTo(target.geometry.getCoordinates(), { useMapMargin: true });
    });
    map.events.add('boundschange', function(e) {
        var newZoom = e.get('newZoom');
        var center = e.get('newCenter');
        if (newZoom < 10) {
            map.setCenter(center, 9);
        }
        if (newZoom > 15) {
            map.setCenter(center, 20);
        }
    });
});