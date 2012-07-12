function fid_134207103620382262664(ymaps) {
    var map = new ymaps.Map("ymaps-map-id_134207103620382262664", {
        center: [73.39157700000001, 54.97759290180148],
        zoom: 16,
        type: "yandex#map"
    });
    map.behaviors.enable('scrollZoom');
    map.controls
        .add("zoomControl")
        .add("mapTools")
        .add(new ymaps.control.TypeSelector(["yandex#map", "yandex#satellite", "yandex#hybrid", "yandex#publicMap"]));
    map.geoObjects
        .add(new ymaps.Placemark([73.391577, 54.976803], {
                balloonContent: "7bits"
            },
            {
                preset: "twirl#lightblueDotIcon"
            }
        ));
};