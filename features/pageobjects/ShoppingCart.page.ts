import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShoppingCartPage extends Page {

    public get btnSummaryCheckout(){
        return $('p[class="cart_navigation clearfix"] a[class="button btn btn-default standard-checkout button-medium"]');
    }

    public get btnAddressCheckout(){
        return $('button[name="processAddress"]');
    }

    public get checkboxTermService(){
        return $('#uniform-cgv#uniform-cgv span');
    }

    public get btnShippingCheckout(){
        return $('button[name="processCarrier"]');
    }

    public get paymentOptionPayByBankWire(){
        return $('div.row:nth-child(1) p.payment_module a');
    }

    public async waitPaymentOptionDisplayed(){
        await this. paymentOptionPayByBankWire.waitForDisplayed({setTimeout: 20000})
    }

    public async clickSummaryCheckoutButton(){
        await this.btnSummaryCheckout.waitForDisplayed({setTimeout: 10000});
        await this.btnSummaryCheckout.click();
    }

    public async clickAddressCheckoutButton() {
        await this.btnAddressCheckout.waitForDisplayed();
        await this.btnAddressCheckout.click();
    }

    public async clickTermServiceCheckbox() {
        await this.checkboxTermService.waitForDisplayed();
        await this.checkboxTermService.click();
    }

    public async clickShippingCheckoutButton() {
        await this.btnShippingCheckout.waitForDisplayed();
        await this.btnShippingCheckout.click();
    }

}

export default new ShoppingCartPage();
