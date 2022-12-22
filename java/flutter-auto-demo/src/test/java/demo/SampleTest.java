package demo;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import org.junit.Test;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;
import pro.truongsinh.appium_flutter.FlutterFinder;
import pro.truongsinh.appium_flutter.finder.FlutterElement;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;

public class SampleTest {

    @Test
    public void test() throws MalformedURLException, InterruptedException {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("platformName", "android");
        capabilities.setCapability("platformVersion", "13");
        capabilities.setCapability("deviceName", "emulator");
        capabilities.setCapability("noReset", true);
        capabilities.setCapability("app", System.getProperty("user.dir") + "/apps/gallery.apk");
        capabilities.setCapability("automationName", "Flutter");
        capabilities.setCapability("retryBackoffTime", 500);

        AppiumDriver driver = new AndroidDriver(new URL("http://localhost:4723/wd/hub"), capabilities);
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofMillis(5000));

        driver.executeScript("flutter:waitForFirstFrame");

        FlutterFinder finder = new FlutterFinder(driver);
//        FlutterElement es = finder.byValueKey("materialCategoryHeader");
        FlutterElement es = finder.bySemanticsLabel("MATERIAL");
//        es.click();
//        System.out.println(es.getText());
        System.out.println(es.getRawMap());

//        FlutterElement cupertino = finder.byValueKey("cupertinoCategoryHeader");
//        cupertino.click();

        Thread.sleep(5000);
        driver.quit();
    }
}
