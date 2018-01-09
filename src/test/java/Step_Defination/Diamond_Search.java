package Step_Defination;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Page_Object.Filter_By_Diamond_page;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Diamond_Search {
	static final Logger logger = Logger.getLogger(Diamond_Search.class);
	public static WebDriver driver;

	@Given("^Open firefox and start application$")
	public void Open_firefox_and_start_application() throws Throwable {
		BasicConfigurator.configure();
		logger.info("Opening Browser");
		System.setProperty("webdriver.chrome.driver",chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		logger.info("Fetching URL and Opening the Url");

		driver.get("http://www.rarecarat.com");
		// Comment Ashu

	}

	@When("^User enters \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\"$")
	public void Filter_By_Diamond_TestCase(String price_left,
			String Carat_left, int Color_left_param, int Color_right_param,
			int Cut_left_param, int Cut_right_param, int Clarity_left_param,
			int Clarity_right_param, int flo_left_param, int flo_right_param)
			throws InterruptedException {
		BasicConfigurator.configure();
		Filter_By_Diamond_page fbd = new Filter_By_Diamond_page(driver);
		// System.out.println(price_left);
		logger.info("Clicking on Search by Retailer");
		fbd.filter_retailer().click();
		Thread.sleep(2000);
		logger.info("Removing Offline Retailer check");
		fbd.offline_check().click();
		// Filter By Diamond
		fbd.Filter_By_Diamond().click();
		Thread.sleep(2000);

		((JavascriptExecutor) driver).executeScript(
				"arguments[0].scrollIntoView();", fbd.Photo_Video());
		fbd.Photo_Video().click();
		// Thread.sleep(2000);
		// Click on Search Button
		long startTime = System.currentTimeMillis();
		logger.info("Test start Time" + startTime);

		fbd.Search().click();
		// Thread.sleep(2000);

		WebDriverWait wait = new WebDriverWait(driver, 15);
		WebElement element = wait
				.until(ExpectedConditions.elementToBeClickable(By
						.xpath("html/body/div[2]/div/section/div[3]/div/div[4]/div[1]/div/div/div[1]/div[1]/div[2]/div[1]/span/span")));
		element.click();
		// Thread.sleep(2000);
		String URl = driver.getCurrentUrl();
		// URL LINK ADDED by Abhishek
		logger.info("Url Link Clicked-->" + URl);

		long endTime = System.currentTimeMillis();
		long totalTime = endTime - startTime;
		System.out.println("Total Search Time taken: " + totalTime
				+ "milliseconds");
		logger.info("Total Search Time taken: " + totalTime + "milliseconds");

	}

	@Then("^Message displayed Search Successful$")
	public void Message_displayed_Login_Successfully() throws Throwable {
		logger.info("Search Successful");
	}

	@Then("^Application should be closed$")
	public void application_should_be_closed() throws Throwable {
		driver.quit();
	}

}
