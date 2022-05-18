import Page from './page';

class AuthenticatePage extends Page {

    public get emailAddressTextBox(){ 
        return $('div input#email_create')
    }

    // public get clickSignLink(){
    //     return $('div[class="header_user_info"] a')
    // }

    public async enterEmail(email) {
        const emailTextBox = await $('div input#email_create');
        await emailTextBox.waitForDisplayed({timeout: 5000}); 
        await emailTextBox.setValue(email);
    }

    public get authenticationHeader(){
        return $('div span.navigation_page');
    }

    public async clickCreateAccountButton() {
        const createAccountButton = await $('div button#SubmitCreate');
        await createAccountButton.waitForDisplayed({timeout: 5000}); 
        await createAccountButton.click();
    }  

    /**
     * overwrite specific options to adapt it to page object
     */
     public open () {
        return super.open('index.php');
    }

}

export default new AuthenticatePage();