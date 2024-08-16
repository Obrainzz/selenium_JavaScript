const { Builder, By, until } = require('selenium-webdriver');

async function searchHouseInRightmove() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    // Launch the browser and navigate to the Rightmove homepage
    await driver.get('https://www.rightmove.co.uk/');
    await driver.manage().window().maximize();

    // Add a delay to observe the actions
    await driver.sleep(2000);  // Wait for 2 seconds

    // Accept cookies (if applicable)
    let acceptCookiesButton = await driver.findElement(By.xpath("//*[@id='onetrust-accept-btn-handler']"));
      await acceptCookiesButton.click();

    // Add a delay to observe the actions
    await driver.sleep(2000);  // Wait for 2 seconds

    // Enter a location in the search box
    let searchBox = await driver.findElement(By.xpath('//input[@id="ta_searchInput"]'));
    await searchBox.sendKeys('London');

    // Add a delay to observe the actions
    await driver.sleep(2000);  // Wait for 2 seconds
/*
    // Select property type (For Sale or To Rent)
    let propertyTypeDropdown = await driver.findElement(By.id('buy'));
    await propertyTypeDropdown.click();
    await propertyTypeDropdown.findElement(By.css('option[value="buy"]')).click();

    // Add a delay to observe the actions
    await driver.sleep(2000);  // Wait for 2 seconds
*/
    // Click the search button
    let searchButton = await driver.findElement(By.xpath("//button[contains(text(), 'Find property')]"));
    await searchButton.click();

    // Add a delay to observe the actions
    await driver.sleep(2000);  // Wait for 2 seconds

    // Wait for the results page to load
    await driver.wait(until.elementLocated(By.className('searchResults')), 10000);

    // Add a delay to observe the actions
    await driver.sleep(2000);  // Wait for 2 seconds

    // Optional: Click on the first property in the list
    let firstProperty = await driver.findElement(By.css('.propertyCard a'));
    await firstProperty.click();

    // Add a delay to observe the actions
    await driver.sleep(2000);  // Wait for 2 seconds

    // Wait for the property details page to load
    await driver.wait(until.elementLocated(By.css('.property-header-title')), 10000);

    // Add a delay to observe the actions
    await driver.sleep(2000);  // Wait for 2 seconds

   // Verify that the property details page is displayed
   let propertyTitle = await driver.findElement(By.css('.property-header-title'));
   console.log(await propertyTitle.getText());

   // Close the browser
   await driver.sleep(2000);  // Wait for 2 seconds before closing
 } finally {
   await driver.quit();
 }
}

searchHouseInRightmove();
