import FlutterElement from "../../../packages/flutter/element";
import FlutterActions from "../../../packages/flutter/actions";
import {byType, byValueKey, descendant} from "appium-flutter-finder";
import { setTimeout } from "timers/promises";

describe('flutter element', function () {
    // it('click', async () => {
        // const invalidMaterial: string = byValueKey('materialCategoryHeader1');
        // await FlutterElement.click(invalidMaterial);
        //
        // const material: string = byValueKey('materialCategoryHeader');
        // await FlutterElement.click(material);
        //
        // await setTimeout(1000);
        // const materialList: string = byValueKey('materialDemoList');
        // expect(await FlutterElement.isDisplayed(materialList)).toEqual(true);
    // });

    // it('getText', async () => {
    //     const headerTitle: string = descendant({
    //         of: byValueKey('header'),
    //         matching: byType('Text')
    //     });
    //     expect(await FlutterElement.getText(headerTitle)).toEqual('Gallery');
    //
    // });

    // it('scroll into view', async function () {
    //     const material: string = byValueKey('materialCategoryHeader');
    //     await FlutterElement.click(material);
    //
    //     const text = byValueKey('text-field@material')
    //     await FlutterActions.scrollIntoView(text);
    //     await setTimeout(1000);
    //     expect(await FlutterElement.isDisplayed(text)).toBe(true);
    // });

    it('scroll down', async function () {
        const material: string = byValueKey('materialCategoryHeader');
        await FlutterElement.click(material);

        const list = byValueKey('materialDemoList')
        await FlutterActions.scroll(list);
        await setTimeout(2000);
        const buttonItem = byValueKey('button@material')
        expect(await FlutterElement.isDisplayed(buttonItem)).toBe(true);
    });


});
