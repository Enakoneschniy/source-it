/**
 * Created by kate on 17/07/16.
 */
(function () {

    var IN_FULL_SCREEN = false;
    var fs_icon = $('.full-screen-icon');

    //document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen;

    fs_icon.click(function () {
        //.fs-cover
        var canvas = this.parentNode.parentNode;
        toggleFullScreen(canvas);
    });


    function requestFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        IN_FULL_SCREEN = true;

    }

    // Cancel full screen mode
    function cancelFullscreen() {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }

        IN_FULL_SCREEN = false;

    }


    function toggleFullScreen(elem) {
        if (IN_FULL_SCREEN) {
            cancelFullscreen();
        } else {
            requestFullscreen(elem);
        }
    }

    document.addEventListener("MSFullscreenError", function (evt) {
        console.warn("full screen error has occured " + evt.target);
    }, true);


})();