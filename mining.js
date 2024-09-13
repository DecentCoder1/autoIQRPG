(function() {
    function getElementByXPath(xpath) {
        var result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        return result.singleNodeValue;
    }

    function clickElementWithDelay(xpath) {
        var element = getElementByXPath(xpath);
        if (element) {
            var delay = Math.random() * 12500 + 3000;
            setTimeout(function() {
                element.click();
            }, delay);
        }
    }

    var xpath = '/html/body/div/div[1]/div[4]/div[2]/div[1]/p/div/a[2]'; // Example XPath for Mining
    function performClick() {
        clickElementWithDelay(xpath);
        var interval = 180000; // Repeat every 3 minutes
        setTimeout(performClick, interval);
    }

    // Expose a function to start the action
    window.startMining = function() {
        performClick();
    };
})();
