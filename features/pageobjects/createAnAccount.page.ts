import Page from './page';

class CreateAnAccount extends Page {

    public async waitProfilePageHeaderDisplay(){
        const createAnAccount = await $('div.account_creation:nth-child(1) > h3.page-subheading')
        await createAnAccount.waitForDisplayed();
    }

    public get getProfilePageHeader(){
        return $('div.account_creation:nth-child(1) > h3.page-subheading');
    }

    public async selectTitle(Title: string) {
        const MrTitleRadioButton = await $('div[class="radio-inline"] label[for="id_gender1"]')
        MrTitleRadioButton.waitForDisplayed();
        const MrTitle = await $('#id_gender1')
        const MrsTitle = await $('#id_gender2')
        if(Title == "Mr")
            await MrTitle.click();
        else
            await MrsTitle.click();
    }

    public async enterFirstName(Fname: string){
        const firstName = await $('div input[id="customer_firstname"]')
        await firstName.waitForDisplayed();
        await firstName.setValue(Fname);
    }

    public async enterLastName(Lname: string){
        const lastName = await $('div input[id="customer_lastname"]')
        await lastName.waitForDisplayed();
        await lastName.setValue(Lname);
    }

    public async enterEmail(email: string){
        const emailField = await $('#email')
        await emailField.waitForDisplayed();
        await emailField.setValue(email);
    }

    public async enterPassword(Pwd: string){
        const password = await $('#passwd')
        await password.waitForDisplayed();
        await password.setValue(Pwd);
    }

    public async enterAddressFirstName(Add_Fname: string){
        const addressFirstName = await $('#firstname')
        await addressFirstName.waitForDisplayed();
        await addressFirstName.setValue(Add_Fname);
    }

    public async enterAddressLastName(Add_Lname: string){
        const addressLastName = await $('#lastname')
        await addressLastName.waitForDisplayed();
        await addressLastName.setValue(Add_Lname);
    }

    public async enterAddress(Address: string){
        const addressField = await $('#address1')
        await addressField.setValue(Address);
    }

    public async enterCity(City: string){
        const cityField = await $('#city')
        await cityField.setValue(City);
        await cityField.scrollIntoView();
    }

    public async selectState(State: string){
        const stateField = await $('div#uniform-id_state')
        await stateField.waitForDisplayed();
        await stateField.selectByVisibleText(State)
    }

    public async enterZipCode(ZipCode: string){
        const zipCodeField = await $('#postcode')
        await zipCodeField.setValue(ZipCode)
    }

    public async selectCountry(Country: string){
        const countryField = await $('div [id="uniform-id_country"] select');
        await countryField.selectByVisibleText(Country)
        await countryField.selectByAttribute("value", "21")
    }

    public async enterMobilePhone(MobilePhone: string){
        const mobilePhoneField = await $('#phone_mobile');
        await mobilePhoneField.setValue(MobilePhone);
    }

    public async enterAliasAddress(AliasAddress: string){
        const aliasAddressField = await $('input#alias');
        await aliasAddressField.setValue(AliasAddress);
        
    }




    
    public waitTime (time: number) {
        super.waitTime (30000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
     public open () {
        return super.open('index.php');
    }

}

export default new CreateAnAccount();