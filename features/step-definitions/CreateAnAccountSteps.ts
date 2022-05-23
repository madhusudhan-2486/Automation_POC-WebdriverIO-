import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page';
import LoginPage from '../pageobjects/login.page';
import AuthenticatePage from '../pageobjects/authenticate.page';
import CreateAnAccountPage from '../pageobjects/CreateAnAccount.page'; 

const pages = {
    login: LoginPage,
    home: HomePage,
    authenticate: AuthenticatePage,
    createAnAccount: CreateAnAccountPage
}

Given(/^I am on the Create an Account page by providing email (.+)$/, async (emailId) => {
    await pages.home.open()
    await pages.home.clickSignIn()
    await expect(AuthenticatePage.authenticationHeader).toBeExisting();
    await pages.authenticate.enterEmail(emailId);
    await pages.authenticate.clickCreateAccountButton();
    await pages.createAnAccount.waitProfilePageHeaderDisplay();
    await expect(CreateAnAccountPage.getProfilePageHeader).toBeDisplayed();
    await pages.createAnAccount.selectTitle("Mr");
    await pages.createAnAccount.enterFirstName("John");
    CreateAnAccountPage.waitTime(30000);
    pages.createAnAccount.waitTime(30000);

});

When(/^Mandatory required fields (.+) (.+) (.+) (.+) (.+) (.+) (.+) (.+) (.+) (.+) (.+) (.+) (.+) is entered and Register button is clicked$/, 
async (Title, Fname, Lname, email, Pwd, Add_FName, Add_LName, Address, City, State, ZipCode, MobilePhone, AliasAddress) => {
        
    CreateAnAccountPage.waitTime(30000);
    pages.createAnAccount.waitTime(30000);    
    await pages.createAnAccount.selectTitle(Title);
    await pages.createAnAccount.enterFirstName(Fname);
    await pages.createAnAccount.enterLastName(Lname);
    await pages.createAnAccount.enterEmail(email);
    await pages.createAnAccount.enterPassword(Pwd);
    await pages.createAnAccount.enterAddressFirstName(Add_FName);
    await pages.createAnAccount.enterAddressLastName(Add_LName);
    await pages.createAnAccount.enterAddress(Address);
    await pages.createAnAccount.enterCity(City);
    await pages.createAnAccount.selectState(State);
    await pages.createAnAccount.enterZipCode(ZipCode);
    await pages.createAnAccount.enterMobilePhone(MobilePhone);
    CreateAnAccountPage.waitTime(30000);
    pages.createAnAccount.waitTime(30000);

    console.log(AliasAddress)
    await pages.createAnAccount.enterAliasAddress(AliasAddress);
        

        
});

// Then(/^CREATE AN ACCOUNT page is displayed$/, async () => {
//     await expect(CreateAnAccountPage.getProfilePageHeader).toBeDisplayed();
// });

