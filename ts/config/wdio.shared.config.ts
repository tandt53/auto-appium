import { getValue, setValue } from '@wdio/shared-store-service'

export const config: WebdriverIO.Config = {
    framework: "cucumber",
    specs: [
        './tests/features/qris/*.feature',
    ],
    capabilities: [],
    logLevel: "debug",
    waitforTimeout: 20000,
    // connectionRetryTimeout: 120000,

    services: ['appium', 'shared-store'],
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: true,
        }],
        ['cucumberjs-json', {
            jsonFolder: '.tmp/json/',
            language: 'en',
        }
        ]
    ],
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['tests/stepDefinitions/**/*.ts'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 120000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },

    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step             step data
     * @param {IPickle}            scenario         scenario pickle
     * @param {Object}             result           results object containing scenario results
     * @param {boolean}            result.passed    true if scenario has passed
     * @param {string}             result.error     error stack if scenario failed
     * @param {number}             result.duration  duration of scenario in milliseconds
     * @param {Object}             context          Cucumber World object
     */
    // @ts-ignore
    afterStep: async function (step, scenario, result, context) {
        console.log("afterStep");
        if (!result.passed) {
            await browser.takeScreenshot();
        }
    },

    // @ts-ignore
    beforeFeature: async function (uri, feature) {
        await setValue('uri', ''); // reset stored value in every before new feature
    },

    // @ts-ignore
    beforeScenario: async function (world, context) {
        const stored = await getValue('uri');
        if (stored === `${world.pickle.uri}`) {
            await driver.reloadSession();
        } else
            await setValue('uri', `${world.pickle.uri}`);
    }

}