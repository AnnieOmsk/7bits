
var url = function (path) {
    return path? url.path + path : url.path;
};

url.path = window.location.pathname.slice(0, window.location.pathname.indexOf('/resources/prototypes/'));