import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

const pages = {
    login: LoginPage,
    home: HomePage
}

// Given(/^I am on the home page$/,  () => {
//     pages.home.open()
//     console.log("Executed Step 1")
//     //await expect(HomePage.signInLink).toBeExisting();
// });

// When(/^I clicked SignIn link$/, async () => {
//     await pages.home.clickSignIn()
//     console.log("Executed Step 2")
// });

// Then(/^I should see Authentication page$/, async () => {
//     await expect(HomePage.authenticationHeader).toBeExisting();
//     console.log("Executed Step 3")
// });

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await chai.expect(SecurePage.flashAlert).toBeExisting();
//     await chai.expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });
