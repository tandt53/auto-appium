export class FlutterElement {

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
        } catch (e) {
            return false;
        }
    }

    /**
     *
     * @param selector
     * @param text
     */
    async enterText(selector: string, text: string, timeout?: number) {
        if (!await this.isDisplayed(selector, timeout)) {
            throw new Error(`Unable to find element using current selector ${selector}`)
        }
        await driver.elementClick(selector);
        await driver.execute('flutter:enterText', text);
    }

    async click(selector: string, timeout?: number) {
        if (!await this.isDisplayed(selector, timeout))
            throw new Error(`Unable to find element using current selector ${selector}`)
        await driver.elementClick(selector);
    }

    async getText(selector: string, timeout?: number) {
        if (!await this.isDisplayed(selector, timeout))
            throw new Error(`Unable to find element using current selector ${selector}`)
        return await driver.getElementText(selector);
    }


}

