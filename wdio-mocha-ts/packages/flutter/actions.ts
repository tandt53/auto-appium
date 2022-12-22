export class FlutterActions {

    async scroll(listViewSelector: string) {
        await driver.execute('flutter:scroll', listViewSelector, {
            dx: 50,
            dy: -100,
            durationMilliseconds: 2000,
            frequency: 30
        })
    }

    async scrollIntoView(selector: string) {
        await driver.execute('flutter:scrollIntoView', selector, {alignment: 0.1})
    }

    async tap(selector: string) {
        // @ts-ignore
        await driver.touchAction({
            action: 'tap',
            element:
                {
                    elementId: selector
                }
        })
    }

}


