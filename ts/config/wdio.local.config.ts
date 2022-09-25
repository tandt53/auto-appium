import { config } from "./wdio.shared.config";
import { join } from "path";

const androidCaps = [
    {
        "appium:platformName": "Android",
        maxInstances: 1,
        "appium:deviceName": "emulator",
        "appium:platformVersion": "12",
        "appium:automationName": "Flutter",
        "appium:app": "/Users/tando/projects/xendit-for-business-mobile/build/app/outputs/flutter-apk/app-debug.apk",
        "appium:appPackage": "co.xendit.business.dev",
        "appium:newCommandTimeout": 50000,
    },
];

const iosCaps = [
    {
        "platformName": "iOS",
        maxInstances: 1,
        "appium:deviceName": "iPhone 13 Pro Max",
        "appium:platformVersion": "15.5",
        "appium:automationName": "Flutter",
        "appium:autoAcceptAlerts": true,
        "appium:app": "/Users/tando/projects/xendit-for-business-mobile/build/ios/iphonesimulator/Runner.app",
        "appium:newCommandTimeout": 20000,
        "appium:fullReset": true
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
