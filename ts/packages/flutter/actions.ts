
class FlutterActions implements Actions{

    async scroll(){

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

    scrollToView(): void {
        // TODO: implement scrollToView
    }
}

export default new FlutterActions();
