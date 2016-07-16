//importScripts('geo2.js');
(function () {

    var tabs = $('li, .tabs');
    var content = $('.content-block');

    var strip = function (str) {
        return str.replace(/^\//, "").replace(/\/$/, "");
    };


    var showPage = function (item) {
        tabs.removeClass('active');
        tabs.find('li[data-tab=' + item + ']').addClass('active');
        content.hide();
        $('.content-block[data-content=' + item + ']').show();
    };

    var routes = {
        'default': function () {
        },
        'geolocation': function () {
            console.log(Geo);
            Geo.init(document.getElementById('map'));
        },
        'synccalculation': function () {
            "use strict";
          
        },
        'webworker': function () {
            var button = document.getElementById('start');
            var resultDiv = document.getElementById('worker').getElementsByTagName('tbody')[0];
            var form = document.getElementsByClassName('form-block')[0];
            var inputValues = form.getElementsByTagName('input');

            WebWorker.init('js/script.js',{
                button: button,
                resultDiv: resultDiv,
                form: form,
                inputValues: inputValues});
        },

        __all: function (route) {
            var pageName = typeof routes[route] === 'function' ? route : 'default';
            showPage(pageName);
        }
    };

    var navigate = function () {
        var pathName = strip(document.location.pathname);
        if (typeof routes[pathName] === 'function') {
            console.log('here');
            reset();
            routes[pathName](pathName);
            routes.__all(pathName);
        } else {
            history.replaceState(null, 'home', '/');
            routes.__all();
        }
    };

    var reset = function () {
      Geo.stopGeo();
    };

    document.addEventListener('DOMContentLoaded', function () {
        navigate();
    });

    document.addEventListener('click', function (e) {
        var target = e.target;
        if (target.nodeName.toLocaleLowerCase() !== 'a' || target.host !== location.host) {
            return true;
        }
        e.preventDefault();
        var pathName = strip(target.pathname);
        if (pathName !== strip(location.pathname)) {
            history.pushState(null, pathName, '/' + pathName);
            navigate();
        }
    });

    document.addEventListener('popstate', function (e) {
        navigate();
    });
})();