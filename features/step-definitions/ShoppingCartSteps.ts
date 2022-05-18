import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import AuthenticatePage from '../pageobjects/authenticate.page';
import ShoppingCartPage from '../pageobjects/ShoppingCart.page';

const pages = {
    login: LoginPage,
    home: HomePage,
    authenticate: AuthenticatePage,
    shoppingCart: ShoppingCartPage
}

Given(/^I am on the Shopping Cart page (.+) and (.+)$/, async (email, password) => {
    await pages.home.open()
    await expect(HomePage.signInLink).toBeDisplayed();
    await pages.home.clickSignIn()
    await expect(AuthenticatePage.authenticationHeader).toBeExisting();
    await LoginPage.login(email, password)
    await expect(HomePage.userName).toBeExisting();
    await pages.home.clickWomenCategoriesTab();
    await pages.home.selectFirstProduct();
    await pages.home.clickAddToCartButton();
    await pages.home.clickProceedToCheckoutButton();
    await expect(HomePage.myAccountHeader).toBeDisplayed();
    await expect(HomePage.myAccountHeader).toHaveTextContaining("Your shopping cart"); 
});

When(/^Click Summary Proceed to Checkout button$/, async () => {
    await expect(ShoppingCartPage.btnSummaryCheckout).toBeDisplayed(); 
    await pages.shoppingCart.clickSummaryCheckoutButton();
});

When(/^Navigate to Address$/, async () => {
    await expect(ShoppingCartPage.btnAddressCheckout).toBeDisplayed(); 
    await pages.shoppingCart.clickAddressCheckoutButton();
});

When(/^Navigate to Shipping and check the checkbox$/, async () => {
    await expect(ShoppingCartPage.checkboxTermService).toBeDisplayed(); 
    await pages.shoppingCart.clickTermServiceCheckbox();
});

When(/^Click Shipping checkout button$/, async () => {
    await expect(ShoppingCartPage.btnShippingCheckout).toBeDisplayed(); 
    await pages.shoppingCart.clickShippingCheckoutButton();
});

Then(/^I should see a payment methods$/, async () => {
    await pages.shoppingCart.waitPaymentOptionDisplayed();
    await expect(ShoppingCartPage.paymentOptionPayByBankWire).toBeDisplayed();
});