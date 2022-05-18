import Page from './page';

class HomePage extends Page {

    public get signInLink(){ 
        return $('div a.login')
    }

    // public get clickSignLink(){
    //     return $('div[class="header_user_info"] a')
    // }

    public get userName() {
        return $('a.account span')
    }

    public async clickSignIn() {
        const Sign = await $('div a.login');
        await Sign.waitForDisplayed({timeout: 5000}); 
        await Sign.click();
    }

    public get womenCategoriesTab() {
        return $('li a[title="Women"]');
    }
    public get firstProduct() {
        return $('ul[class="product_list grid row"] li:nth-child(1) div.product-container')
    }

    public get buttonAddtoCart() {
        return $('button.exclusive')
    }

    public get myAccountHeader() {
        return $('span.navigation_page')
    }

    public get ProceedToCheckout() {
        return $('div.clearfix a.btn.btn-default.button.button-medium')
    }


    public async clickWomenCategoriesTab(){
        await this.womenCategoriesTab.waitForDisplayed();
        await this.womenCategoriesTab.click();
    }

    public async selectFirstProduct() {
        await this.firstProduct.waitForDisplayed();
        await this.firstProduct.scrollIntoView()
        await this.firstProduct.moveTo();
        await this.firstProduct.click();
    }

    public async clickAddToCartButton() {
        await this.buttonAddtoCart.waitForDisplayed();
        await this.buttonAddtoCart.click();
    }

    public async clickProceedToCheckoutButton() {
        await this.ProceedToCheckout.waitForDisplayed();
        await this.ProceedToCheckout.click();
    }

    


    /**
     * overwrite specific options to adapt it to page object
     */
     public open () {
        return super.open('index.php');
    }

}

export default new HomePage();