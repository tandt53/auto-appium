import {FlutterElement} from "../../../packages/flutter";
import {FlutterActions} from "../../../packages/flutter";
import {byType, byValueKey, descendant} from "appium-flutter-finder";
import { setTimeout } from "timers/promises";

const element = new FlutterElement();
const actions = new FlutterActions();
describe('flutter element', function () {
    // it('click', async () => {
        // const invalidMaterial: string = byValueKey('materialCategoryHeader1');
        // await element.click(invalidMaterial);
        //
        // const material: string = byValueKey('materialCategoryHeader');
        // await element.click(material);
        //
        // await setTimeout(1000);
        // const materialList: string = byValueKey('materialDemoList');
        // expect(await element.isDisplayed(materialList)).toEqual(true);
    // });

    // it('getText', async () => {
    //     const headerTitle: string = descendant({
    //         of: byValueKey('header'),
    //         matching: byType('Text')
    //     });
    //     expect(await element.getText(headerTitle)).toEqual('Gallery');
    //
    // });

    // it('scroll into view', async function () {
    //     const material: string = byValueKey('materialCategoryHeader');
    //     await element.click(material);
    //
    //     const text = byValueKey('text-field@material')
    //     await FlutterActions.scrollIntoView(text);
    //     await setTimeout(1000);
    //     expect(await element.isDisplayed(text)).toBe(true);
    // });

    it('scroll down', async function () {
        const material: string = byValueKey('materialCategoryHeader');
        await element.click(material);

        const list = byValueKey('materialDemoList')
        await actions.scroll(list);
        await setTimeout(2000);
        const buttonItem = byValueKey('button@material')
        expect(await element.isDisplayed(buttonItem)).toBe(true);
    });


});
