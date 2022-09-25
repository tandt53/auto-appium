class FlutterElement {

    /**
     * This method is to check an element to be displayed.
     * @param selector
     * @param timeout
     * @returns
     */
    async isDisplayed(selector: string, timeout?: number): Promise<boolean> {
        try {
            await driver.execute('flutter:waitFor', selector, timeout || 10);
            return true;
        } catch (exception) {
            return false;
        }
    }


    /**
     *
     * @param selector
     * @param text
     */
    async enterText(selector: string, text: string) {
        await driver.elementClick(selector);
        await driver.execute('flutter:enterText', text);
    }

    async click(selector: string) {
        await driver.elementClick(selector);
    }



    async getText(selector: string) {
        return await driver.getElementText(selector);
    }


}
export default new FlutterElement();
