javascript:(function(){function getElementByXPath(xpath){var result=document.evaluate(xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);return result.singleNodeValue;}function clickElement(xpath){var element=getElementByXPath(xpath);if(element){element.click();console.log(`Clicked on element with XPath: ${xpath}`);}else{console.log(`Element not found for XPath: ${xpath}`);}}function waitForElementAndClick(xpath){var checkExist=setInterval(function(){var element=getElementByXPath(xpath);if(element){clearInterval(checkExist);element.click();console.log(`Clicked on element with XPath: ${xpath}`);}},1000);}clickElement('/html/body/div/div[1]/div[2]/a[8]');waitForElementAndClick('/html/body/div/div[1]/div[4]/div[2]/div[2]/div/div/div[1]/div[1]/div/button');})();
