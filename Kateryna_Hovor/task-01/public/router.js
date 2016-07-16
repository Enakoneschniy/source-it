/**
 * Created by kate on 03/07/16.
 */
var Router = (function () {
    var routes;
    var data = {};
    var mode;
    var defaultAction = 'index';


    var init = function (options) {
        mode = options && options.mode && options.mode == 'history'
        && !!(window.history && history.pushState) ? 'history' : 'hash';
        routes = options && options.routes ? options.routes : [];
    };

    var strip = function (str) {
        return str.replace(/^\//, "").replace(/\/$/, "");
    };

    var setRoutes = function () {
    };

    var addRoutes = function () {
    };


    //if uri looks like controller/action/param/value
    var navigate = function () {
        var pathName = strip(document.location.pathname);
        for (var route in routes) {
            if (route === pathName) {
                return routes[route];
            } else if(pathName.split('/')%2==0){

            }else{

            }

                }

    };


    return {
        init: init
    }

})();