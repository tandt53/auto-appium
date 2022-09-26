import { config } from "./wdio.conf";

const androidCaps = [
    {
        maxInstances: 1,
        'platformName': 'Android',
        'appium:automationName': "Flutter",
        'appium:deviceName': 'Google Pixel 3',
        'appium:platformVersion': "9.0",
        'appium:autoAcceptAlerts': true,
        'appium:newCommandTimeout': 20000,
        'appium:app': process.env.BROWSERSTACK_APP_ID ,
        'bstack:options': {
            'debug': true,
            'appiumVersion': '1.22.0',
            'buildName': 'Sample Build',
            'projectName': 'Mobile Store',
        }
    }
];

const iosCaps = [
    {
        maxInstances: 1,
        'platformName': 'iOS',
        'appium:automationName': "Flutter",
        'appium:deviceName': 'iPhone 11 Pro',
        'appium:platformVersion': '13',
        'appium:autoAcceptAlerts': true,
        'appium:newCommandTimeout': 20000,
        'appium:app': process.env.BROWSERSTACK_APP_ID,
        'bstack:options': {
            'debug': true,
            'appiumVersion': '1.22.0',
            'buildName': 'Sample Build',
            'projectName': 'Mobile Store',
        }
    }
];

const platform = process.env.PLATFORM || "android";

if (platform === "android") {
    config.capabilities = androidCaps;
} else if (platform === "ios") {
    config.capabilities = iosCaps;
} else
    throw new Error(`Invalid platform: ${platform}`);


config.services = ['shared-store',
    ['browserstack', {
        preferScenarioName: true
    }]
];

config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;

exports.config = config;
