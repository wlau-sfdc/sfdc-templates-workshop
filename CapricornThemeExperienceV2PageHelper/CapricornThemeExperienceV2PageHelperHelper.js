({
    updateBackgroundClass : function() {
        var containerClassName = "capricornContainer";
        var containerSelector = "." + containerClassName;
        var layoutElem = document.querySelector(containerSelector);
        var path = window.location.pathname;
        var sitePathSuffix = '/s/';

        if (layoutElem) {
            if (path.indexOf(sitePathSuffix, path.length - sitePathSuffix.length) === -1) {
                layoutElem.className = containerClassName;
            } else {
                layoutElem.className = containerClassName + " capricornHome";
            }
        }
    }
})