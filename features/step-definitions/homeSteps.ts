import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page';
import LoginPage from '../pageobjects/login.page';

const pages = {
    login: LoginPage,
    home: HomePage
}

Given(/^I am on the home page$/, async () => {
    await pages.home.open()
    console.log("Executed Step 1");
});


When(/^I clicked SignIn link$/, async () => {
    await pages.home.clickSignIn()
    console.log("Executed Step 2");
});

Then(/^I should see Authentication page$/, async () => {
    await expect(HomePage.authenticationHeader).toBeExisting();
    console.log("Executed Step 3");
});

