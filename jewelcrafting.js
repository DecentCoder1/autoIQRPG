var jewelcraftingInterval;

function getElementByXPath(xpath) {
    try {
        return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    } catch (e) {
        console.error('Error evaluating XPath:', xpath, e);
        return null;
    }
}

function clickElement(xpath) {
    var element = getElementByXPath(xpath);
    if (element) {
        console.log('Clicking on element with XPath: ' + xpath);
        element.click();
    } else {
        console.warn('Element not found for XPath:', xpath);
    }
}

function waitForElement(xpath, callback) {
    var intervalId = setInterval(function () {
        if (getElementByXPath(xpath)) {
            clearInterval(intervalId);
            callback();
        }
    }, 1000);
}

function performActions() {
    var firstXPath = '/html/body/div/div[1]/div[2]/a[7]';
    clickElement(firstXPath);

    waitForElement('/html/body/div/div[1]/div[4]/div[2]/div[2]/div/p[2]/a', function () {
        clickElement('/html/body/div/div[1]/div[4]/div[2]/div[2]/div/p[2]/a');

        setTimeout(function () {
            var buttonXPath = '/html/body/div/div[1]/div[4]/div[2]/div[2]/div/p[2]/button';
            var inputXPath = '/html/body/div/div[1]/div[4]/div[2]/div[2]/div/form[1]/div/table/tr[2]/td[3]/input';

            if (getElementByXPath(buttonXPath)) {
                clickElement(buttonXPath);
            } else if (getElementByXPath(inputXPath)) {
                clickElement(inputXPath);

                setTimeout(function () {
                    var finalButtonXPath = '/html/body/div/div[1]/div[4]/div[2]/div[2]/div/form[1]/div/button';
                    clickElement(finalButtonXPath);
                }, 500);
            }

            // Call performActions again after 150 seconds
            jewelcraftingInterval = setTimeout(performActions, 150000);
        }, 1000);
    });
}

// Starts the jewelcrafting task
function startJewelcrafting() {
    console.log('Jewelcrafting task started');
    performActions();
}

// Stops the jewelcrafting task
function stopJewelcrafting() {
    console.log('Jewelcrafting task stopped');
    clearTimeout(jewelcraftingInterval); // Stops any further actions
}
