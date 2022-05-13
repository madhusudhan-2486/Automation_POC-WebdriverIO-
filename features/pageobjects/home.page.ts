import Page from './page';

class HomePage extends Page {

    public get signInLink(){ 
        return $('div a.login')
    }

    // public get clickSignLink(){
    //     return $('div[class="header_user_info"] a')
    // }

    public async clickSignIn() {
        const Sign = await $('div a.login');
        await Sign.waitForDisplayed({timeout: 5000}); 
        await Sign.click();
    }

    public get authenticationHeader(){
        return $('div span.navigation_page');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
     public open () {
        return super.open('index.php');
    }

}

export default new HomePage();