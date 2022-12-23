import {RectReturn} from "@wdio/protocols/build/types";

interface Location {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}

interface RatioOptions {
    start: number;
    end: number;
}

interface ScrollOptions {
    ratio: RatioOptions;
    duration: number;
}

const defaultScrollDownOption: ScrollOptions = {
    ratio: {
        start: 0.8,
        end: 0.1
    },
    duration: 500
};

const defaultScrollUpOption: ScrollOptions = {
    ratio: {
        start: 0.1,
        end: 0.8
    },
    duration: 500
}

export class W3cActions {
    MIN_RATIO = 0.1;
    MAX_RATIO = 0.8;

    validateRatio(ratio: RatioOptions): boolean {
        return ratio.start < 1 && ratio.start > 0 && ratio.end < 1 && ratio.end > 0;
    }

    async scrollDown(options: ScrollOptions = defaultScrollDownOption) {
        if (this.validateRatio(options.ratio) && options.ratio.start < options.ratio.start) {
            throw new Error(`Invalid ratio: ${options.ratio.start} < ${options.ratio.end}`);
        }

        const rect = await driver.getWindowRect();
        const location = await this.getLocation(rect, options.ratio);
        await this.scroll2(location, options.duration);
    }

    async scrollUp(options: ScrollOptions = defaultScrollUpOption) {
        if (this.validateRatio(options.ratio) && options.ratio.start > options.ratio.start) {
            throw new Error(`Invalid ratio: ${options.ratio.start} > ${options.ratio.end}`);
        }
        const rect = await driver.getWindowRect();
        const location = await this.getLocation(rect, options.ratio);
        await this.scroll2(location, 500);
    }

    async scrollDownInView(selector: string, options: ScrollOptions = defaultScrollDownOption) {
        if (this.validateRatio(options.ratio) && options.ratio.start < options.ratio.start) {
            throw new Error(`Invalid ratio: ${options.ratio.start} < ${options.ratio.end}`);
        }
        const rect = await driver.getElementRect(await $(selector).elementId);
        const location = await this.getLocation(rect, options.ratio);
        await this.scroll2(location, options.duration);
    }

    async scrollUpInView(selector: string, options: ScrollOptions = defaultScrollUpOption) {
        if (this.validateRatio(options.ratio) && options.ratio.start > options.ratio.start) {
            throw new Error(`Invalid ratio: ${options.ratio.start} > ${options.ratio.end}`);
        }
        const rect = await driver.getElementRect(await $(selector).elementId);
        const location = await this.getLocation(rect, options.ratio);
        await this.scroll2(location, options.duration);
    }

    private async getLocation(rect: RectReturn, ratio: RatioOptions): Promise<Location> {
        const {start, end} = ratio;
        const startX = rect.x + rect.width / 2;
        const endX = startX;
        let startY = rect.y + rect.height * start;
        let endY = rect.y + rect.height * end;
        return {startX, startY, endX, endY};
    }

    /**
     * This method is used to scroll the screen
     * Referred from https://github.com/wswebcreation/swiping-your-way-through-appium
     * @param startX
     * @param startY
     * @param endX
     * @param endY
     * @param duration
     * @private
     */
    private async scroll(startX: number, startY: number, endX: number, endY: number, duration: number) {
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: {pointerType: 'touch'},
                actions: [
                    // Move finger into start position
                    {type: 'pointerMove', duration: 0, x: startX, y: startY},
                    // Finger comes down into contact with screen
                    {type: 'pointerDown', button: 0},
                    // Pause for a little bit
                    {type: 'pause', duration: 100},
                    // Finger moves to end position
                    // We move our finger from the center of the element to the
                    // starting position of the element.
                    // Play with the duration to make the scroll go slower / faster
                    {type: 'pointerMove', duration: duration, x: endX, y: endY},
                    // Finger gets up, off the screen
                    {type: 'pointerUp', button: 0}
                ]
            }
        ]);
    }

    private async scroll2(scrollOptions: Location, duration: number) {
        const {startX, startY, endX, endY} = scrollOptions;
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: {pointerType: 'touch'},
                actions: [
                    // Move finger into start position
                    {type: 'pointerMove', duration: 0, x: startX, y: startY},
                    // Finger comes down into contact with screen
                    {type: 'pointerDown', button: 0},
                    // Pause for a little bit
                    {type: 'pause', duration: 100},
                    // Finger moves to end position
                    // We move our finger from the center of the element to the
                    // starting position of the element.
                    // Play with the duration to make the scroll go slower / faster
                    {type: 'pointerMove', duration: duration, x: endX, y: endY},
                    // Finger gets up, off the screen
                    {type: 'pointerUp', button: 0}
                ]
            }
        ]);
    }
}
