//import browser from "webdriverio/build/commands/browser";

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`http://automationpractice.com/${path}`)
    }

    public async waitTime(wait: number){
        await browser.pause(wait);
    }
}
