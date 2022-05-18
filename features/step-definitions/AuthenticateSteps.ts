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

Given(/^I am on the Authenticate page$/, async () => {
    await pages.home.open()
    await pages.home.clickSignIn()
    await expect(AuthenticatePage.authenticationHeader).toBeExisting();
    console.log("I am on the Authenticate page executed")
});


When(/^EmailID (.+) is entered and click create an account button$/, async (email) => {
    await pages.authenticate.enterEmail(email);
    await pages.authenticate.clickCreateAccountButton();
    console.log("click create an account button executed")
});

Then(/^Create an Account page is displayed$/, async () => {
   await pages.createAnAccount.waitProfilePageHeaderDisplay()
   await expect(CreateAnAccountPage.getProfilePageHeader).toBeDisplayed();
});

