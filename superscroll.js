// ==UserScript==
// @name SuperScroll
// @description 3 in 1 scroll
// @version 0.2
// @author Ulf3000
// @license MIT
// @include *
// ==/UserScript==






(function () {
    

    window.onwheel = function (e) {


        let dPR = window.devicePixelRatio; // everything must be converted by pixel ratio

        //scroll to the top and bottom of the screen
        if (window.innerWidth - e.pageX < 20 / dPR || e.shiftKey == true || e.buttons == 1) { // scrollbar in firefox is 20px wide 
            e.preventDefault();
            e.stopPropagation();
            if (e.wheelDeltaY > 10) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            if (e.wheelDeltaY < -10) {
                window.scrollTo({ top: window.scrollMaxY, behavior: 'smooth' });
            }

        }
        // fast scrolling,  by 1 "window height" up and down
        if (window.innerWidth - e.pageX < 100 / dPR && window.innerWidth - e.pageX > 20 / dPR || e.altKey == true || e.buttons == 2) { // 100 px wide strip for fast scrolling on right edge of document
            e.preventDefault();
            e.stopPropagation();

            if (e.wheelDeltaY > 10) {
                window.scrollTo({ top: window.scrollY - window.innerHeight + 100, behavior: 'smooth' });
            }
            if (e.wheelDeltaY < -10) {
                window.scrollTo({ top: window.scrollY + window.innerHeight - 100, behavior: 'smooth' });
            }
        }
    }

})();
