const { Builder, By, Key, until } = require('selenium-webdriver');

async function searchHouseInRightmove() {
  // Initialize the Firefox WebDriver
  let driver = await new Builder().forBrowser('firefox').build();

  try {
    // Open Rightmove website
    await driver.get('https://www.rightmove.co.uk/');
    
    // Maximize the browser window
    await driver.manage().window().maximize();

    // Add a delay to observe the actions
    await driver.sleep(2000);  // Wait for 2 seconds

     // Accept cookies (if applicable)
     let acceptCookiesButton = await driver.findElement(By.xpath("//*[@id='onetrust-accept-btn-handler']"));
     await acceptCookiesButton.click();

    // Add a delay to observe the actions
    await driver.sleep(2000);  // Wait for 2 seconds

    // Find the search box and enter a location
    let searchBox = await driver.findElement(By.id('ta_searchInput'));
    await searchBox.click();
    await searchBox.sendKeys('London', Key.RETURN);
    
    // Add a delay to observe the actions
    await driver.sleep(2000);  // Wait for 2 seconds

    let saleButton = await driver.findElement(By.className("dsrm_button_content"));
    await saleButton.click();
/*
    // Wait for the page to load and the For Sale button to be clickable
    await driver.wait(until.elementLocated(By.id('buy')), 10000);
    let forSaleButton = await driver.findElement(By.id('buy'));
    await forSaleButton.click();
*/
    // Set search criteria
    await driver.findElement(By.id('locationIdentifier')).sendKeys('London');
    await driver.findElement(By.id('radius')).sendKeys('Within 10 miles');
    await driver.findElement(By.id('minPrice')).sendKeys('100,000');
    await driver.findElement(By.id('maxPrice')).sendKeys('250,000');
    await driver.findElement(By.id('minBedrooms')).sendKeys('1');
    await driver.findElement(By.id('maxBedrooms')).sendKeys('3');
    await driver.findElement(By.id('displayPropertyType')).sendKeys('Houses');


    // Click the 'Include Under Offer, Sold STC...' button
    let includeSTCButton = await driver.findElement(By.className('tickbox--indicator'));
    await includeSTCButton.click();

      // Add a delay to observe the actions
      await driver.sleep(2000);  // Wait for 2 seconds

    // Click the 'Find properties' button
    let findPropertyButton = await driver.findElement(By.id('submit'));
    await findPropertyButton.click();
/*
    // Wait for the results page to load
    await driver.wait(until.titleContains('Houses For Sale in London'), 10000);
*/
    // Verify the search title
    let searchTitle = await driver.findElement(By.className('searchTitle-heading')).getText();
    if (searchTitle === "Houses For Sale in London") {
        console.log('Search criteria are correct.');
    } else {
        console.log('Search criteria do not match.');
    }


 } finally {
    // Close the browser
    await driver.quit();
  }
}

searchHouseInRightmove();
