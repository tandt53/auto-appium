import {W3cActions} from "../../../src/w3c_actions";
import {accessibilityId} from "../../../src/selector";

const w3cActions = new W3cActions();
describe('W3C Scroll', () => {

    it('should scroll down in View', async () => {
        await $(accessibilityId('Swipe')).click();
        await $(accessibilityId('Swipe-screen')).waitForDisplayed();
        await w3cActions.scrollDownInView(accessibilityId('Swipe-screen'));
        await w3cActions.scrollDownInView(accessibilityId('Swipe-screen'));
        await w3cActions.scrollDownInView(accessibilityId('Swipe-screen'));
        expect(await $(accessibilityId("WebdriverIO logo")).isDisplayed()).toBe(true);
    });

    it('should scroll up in View', async () => {
        await w3cActions.scrollUpInView(accessibilityId('Swipe-screen'));
        await w3cActions.scrollUpInView(accessibilityId('Swipe-screen'));
        await w3cActions.scrollUpInView(accessibilityId('Swipe-screen'));
        expect(await $(accessibilityId("WebdriverIO logo")).isDisplayed()).toBe(false);
    });

    it('should scroll down', async () => {
        await w3cActions.scrollDown();
        await w3cActions.scrollDown();
        await w3cActions.scrollDown();
        expect(await $(accessibilityId("WebdriverIO logo")).isDisplayed()).toBe(true);
    });

    it('should scroll up', async () => {
        await w3cActions.scrollUp();
        await w3cActions.scrollUp();
        await w3cActions.scrollUp();
        expect(await $(accessibilityId("WebdriverIO logo")).isDisplayed()).toBe(false);
    });


})
