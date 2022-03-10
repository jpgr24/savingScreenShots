const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const DynamicLoadingPage = require('../pageobjects/dynamic_loading.page');


describe('My Dynamic Loading Page', () => {
    DynamicLoadingPage.exist('dynamic_loading/1','#start button','start button exists')
     it('click', async () => {
       
        await DynamicLoadingPage.Click('dynamic_loading/1','#start button')
        
        await expect(DynamicLoadingPage.htest).toBeDisplayed();
        await browser.saveScreenshot('./screenshot/screenshot2.png');
    });
});



