import FlutterElement from "../../../packages/flutter/element";
import FlutterActions from "../../../packages/flutter/actions";
import {byType, byValueKey, descendant} from "appium-flutter-finder";
import { setTimeout } from "timers/promises";

describe('flutter element', function () {
    it('click', async () => {
        const material: string = byValueKey('materialCategoryHeader');
        await FlutterElement.click(material);

        const materialList: string = byValueKey('materialDemoList');
        expect(await FlutterElement.isDisplayed(materialList)).toEqual(true);
    });

    it('getText', async () => {
        const headerTitle: string = descendant({
            of: byValueKey('header'),
            matching: byType('Text')
        });
        expect(await FlutterElement.getText(headerTitle)).toEqual('Gallery');

    });


});
