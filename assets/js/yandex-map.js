function fid_133999665283018323121(ymaps) {
    var map = new ymaps.Map("ymaps-map-id_133999665283018323121", {
        center: [73.39137049999992, 54.97788376683191],
        zoom: 16,
        type: "yandex#map"
    });

    map.behaviors.enable('scrollZoom');
    map.controls
        .add("zoomControl")
        .add("mapTools")
        .add(new ymaps.control.TypeSelector(["yandex#map", "yandex#satellite", "yandex#hybrid", "yandex#publicMap"]));
    map.geoObjects
        .add(new ymaps.Placemark([73.391371, 54.977279], {
        balloonContent: "7bits"
    }, {
        preset: "twirl#lightblueDotIcon"
    }));
};