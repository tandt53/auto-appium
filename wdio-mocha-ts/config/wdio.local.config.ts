import {config} from "./wdio.conf";

const androidCaps = [
    {
        "appium:platformName": "Android",
        maxInstances: 1,
        "appium:deviceName": "emulator",
        "appium:platformVersion": "12",
        "appium:automationName": "Flutter",
        "appium:app": "/Users/tando/projects/gallery/build/app/outputs/apk/debug/app-debug.apk",
        "appium:newCommandTimeout": 50000,
    },
];

const iosCaps = [
    {
        "platformName": "iOS",
        maxInstances: 1,
        "appium:deviceName": "iPhone 14 Pro Max",
        "appium:platformVersion": "16.0",
        "appium:automationName": "Flutter",
        "appium:autoAcceptAlerts": true,
        "appium:app": "/Users/tando/projects/gallery/build/ios/Debug-iphonesimulator/Runner.app",
        "appium:newCommandTimeout": 20000,
    },
];


const platform = process.env.PLATFORM || "android";

// selecting capabilities based on platform
if (platform === "android") {
    config.capabilities = androidCaps;
} else if (platform === "ios") {
    config.capabilities = iosCaps;
} else
    throw new Error(`Invalid platform: ${platform}`);

config.hostname = "127.0.0.1";
config.port = 4723;
config.path = "/wd/hub";


config.services = ["shared-store",
];


exports.config = config;
