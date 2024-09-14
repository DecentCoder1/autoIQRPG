var miningInterval;

function getElementByXPath(xpath) {
    try {
        return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    } catch (e) {
        console.error('Error evaluating XPath:', xpath, e);
        return null;
    }
}

function clickElementWithDelay(xpath) {
    var element = getElementByXPath(xpath);
    if (element) {
        console.log('Clicking on element with XPath: ' + xpath);
        var delay = Math.random() * 12500 + 3000; // Random delay between 3 and 15.5 seconds
        element.click();
        setTimeout(function () {
        }, delay);
    } else {
        console.warn('Element not found for XPath:', xpath);
    }
}

function performClick() {
    var defaultXPath = '/html/body/div/div[1]/div[4]/div[2]/div[1]/p/div/a[2]';
    var alternateXPath1 = '/html/body/div/div[1]/div[4]/div[3]/div[1]/div[2]/div/div/div[2]/a';
    var alternateXPath2 = '/html/body/div/div[1]/div[4]/div[3]/div[2]/div[2]/div/div/div[2]/a';

    if (getElementByXPath(alternateXPath1)) {
        clickElementWithDelay(alternateXPath1);
    } else if (getElementByXPath(alternateXPath2)) {
        clickElementWithDelay(alternateXPath2);
    } else {
        clickElementWithDelay(defaultXPath);
    }
}

function startMining() {
    console.log('Mining task started');
    // Run the first click without delay
    performClick();
    // Set interval for subsequent clicks every 180 seconds (3 minutes)
    miningInterval = setInterval(performClick, 180000);
}

function stopMining() {
    console.log('Mining task stopped');
    clearInterval(miningInterval); // Stop the mining task by clearing the interval
}
