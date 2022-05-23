import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import AuthenticatePage from '../pageobjects/authenticate.page';

const pages = {
    login: LoginPage,
    home: HomePage,
    authenticate: AuthenticatePage
}

Given(/^I am on the home page$/, async () => {
    pages.home.open()
    await expect(HomePage.signInLink).toBeExisting();
});

When(/^I clicked SignIn link$/, async () => {
    await pages.home.clickSignIn()
});

Then(/^I should see Authentication page$/, async () => {
    await expect(AuthenticatePage.authenticationHeader).toBeExisting();
});

Given(/^I am on the login page$/, async () => {
    await pages.home.open()
    await expect(HomePage.signInLink).toBeDisplayed();
    await pages.home.clickSignIn()
    await expect(AuthenticatePage.authenticationHeader).toBeExisting();
    
});

When(/^I login with (.+) and (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

Then(/^I should see a My Account page user (.*) and Logout from the account$/, async (username) => {
    await expect(HomePage.userName).toBeExisting();
    await expect(HomePage.userName).toHaveTextContaining(username);
    await expect(HomePage.myAccountHeader).toBeExisting();
    await expect(HomePage.myAccountHeader).toHaveTextContaining("My account");
    await pages.home.clickLogout();
});

