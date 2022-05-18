import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page';
import LoginPage from '../pageobjects/login.page';
import AuthenticatePage from '../pageobjects/authenticate.page';

const pages = {
    login: LoginPage,
    home: HomePage,
    authenticate: AuthenticatePage
}

Given(/^I am on the home page$/, async () => {
    await pages.home.open()
});


When(/^I clicked SignIn link$/, async () => {
    await pages.home.clickSignIn()
});

Then(/^I should see Authentication page$/, async () => {
    await expect(AuthenticatePage.authenticationHeader).toBeExisting();
});




Given(/^I have logged in with (.+) and (.+)$/, async (email, password) => {
    await pages.home.open()
    await expect(HomePage.signInLink).toBeDisplayed();
    await pages.home.clickSignIn()
    await expect(AuthenticatePage.authenticationHeader).toBeExisting();
    await LoginPage.login(email, password)
    await expect(HomePage.userName).toBeExisting();
});

When(/^I select the product$/, async () => {
    await pages.home.clickWomenCategoriesTab();
    await pages.home.selectFirstProduct();
});

When(/^Add to the cart$/, async () => {
    await pages.home.clickAddToCartButton();
    await pages.home.clickProceedToCheckoutButton();
});

When(/^Your shopping cart page should be displayed$/, async () => {
    await expect(HomePage.myAccountHeader).toBeDisplayed();
    await expect(HomePage.myAccountHeader).toHaveTextContaining("Your shopping cart");
});

