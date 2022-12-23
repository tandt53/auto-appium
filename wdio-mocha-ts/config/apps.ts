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
    "appium:app": "/Users/tando/projects/automation-appium/apps/UICatalog.app",
    "appium:newCommandTimeout": 60000,
    "appium:showXcodeLog": true
}]

export const wdio_android =[{
    "appium:platformName": "Android",
    maxInstances: 1,
    "appium:deviceName": "emulator",
    "appium:platformVersion": "12",
    "appium:automationName": "UiAutomator2",
    "appium:app": "/Users/tando/projects/automation-appium/apps/Android-NativeDemoApp-0.4.1.apk",
    "appium:newCommandTimeout": 30000,
    'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity'
}];

export const wdio_ios = [{
    "platformName": "iOS",
    maxInstances: 1,
    "appium:deviceName": "iPhone 13 Pro",
    "appium:platformVersion": "15.5",
    "appium:automationName": "XCUITest",
    "appium:app": "/Users/tando/projects/automation-appium/apps/iOS-Simulator-NativeDemoApp-0.4.1.app",
    "appium:newCommandTimeout": 30000,
    "appium:showXcodeLog": true
}];
