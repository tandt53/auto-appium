import { config } from "./wdio.shared.config";

const androidCaps = [
    {
        maxInstances: 1,
        'platformName': 'Android',
        'appium:automationName': "Flutter",
        'appium:deviceName': 'Google Pixel 3',
        'appium:platformVersion': "9.0",
        'appium:autoAcceptAlerts': true,
        'appium:newCommandTimeout': 20000,
        'appium:appPackage': 'co.xendit.business.dev',
        'appium:app': process.env.BROWSERSTACK_APP_ID || 'bs://2c053ba41cde2dd9af1d402ba325e6bc4a018528',
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
        'appium:app': process.env.BROWSERSTACK_APP_ID || 'bs://663759f9b3805fda8dec61fa738ec093eea47864',
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