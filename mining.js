var miningInterval;

function startMining() {
    var xpath = '/html/body/div/div[1]/div[4]/div[2]/div[1]/p/div/a[2]';
    function getElementByXPath(xpath) {
        var result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        return result.singleNodeValue;
    }
    function clickElementWithDelay(xpath) {
        var element = getElementByXPath(xpath);
        if (element) {
            var delay = Math.random() * 12500 + 3000;
            setTimeout(function () {
                element.click();
            }, delay);
        }
    }
    function performClick() {
        clickElementWithDelay(xpath);
    }
    miningInterval = setInterval(performClick, 180000); // Running every 3 minutes
}

function stopMining() {
    clearInterval(miningInterval); // Clear the interval to stop the mining task
}
