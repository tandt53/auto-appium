export const gallery_android = [{
    "appium:platformName": "Android",
    maxInstances: 1,
    "appium:deviceName": "emulator",
    "appium:platformVersion": "12",
    "appium:automationName": "Flutter",
    "appium:app": "/Users/tando/projects/automation-appium/apps/app-debug.apk",
    "appium:newCommandTimeout": 30000,
}];

export const gallery_ios = [{
    "platformName": "iOS",
    maxInstances: 1,
    "appium:deviceName": "iPhone 13 Pro",
    "appium:platformVersion": "15.5",
    "appium:automationName": "Flutter",
    "appium:autoAcceptAlerts": true,
    "appium:app": "/Users/tando/projects/automation-appium/apps/Runner.app",
    "appium:newCommandTimeout": 30000,
    "appium:fullReset": true,
    "appium:bundleId": "io.flutter.demo.gallery",
    "appium:showXcodeLog": true
}];

export const apiDemo = [{
    "appium:platformName": "Android",
    maxInstances: 1,
    "appium:deviceName": "emulator",
    "appium:platformVersion": "12",
    "appium:automationName": "UiAutomator2",
    "appium:app": "/Users/tando/projects/automation-appium/apps/ApiDemos-debug.apk",
    "appium:newCommandTimeout": 30000,
}]

export const uiCatalog = [{
    "platformName": "iOS",
    maxInstances: 1,
    "appium:deviceName": "iPhone 13 Pro",
    "appium:platformVersion": "15.5",
    "appium:automationName": "XCUITest",
    "appium:autoAcceptAlerts": true,
    "appium:app": "/Users/tando/projects/automation-appium/apps/Runner.app",
    "appium:newCommandTimeout": 30000,
    "appium:fullReset": true,
    "appium:showXcodeLog": true
}]
