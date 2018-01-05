package Page_Object;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

	public class Filter_By_Diamond_page {
		public static WebDriver driver;
		
		public Filter_By_Diamond_page(WebDriver driver){
			this.driver=driver;	
		}
		By Filter_By_Diamond =By.xpath(".//*[@id='tabDiamond']/a");
		By Certification = By.xpath("html/body/div[2]/div/section/div[1]/div[1]/div[5]/div[1]/div/div[2]/div[1]/div/div/div[9]/div[2]/div[2]");
		By pricetext = By.xpath(".//*[@id='priceMin']");
		By Carat = By.xpath(".//*[@id='caratMin']");
		By Color_Right = By.xpath(".//*[@id='thelist']/div[6]/div[2]/div[1]/span/span[6]");
		By Color_left= By.xpath(".//*[@id='thelist']/div[6]/div[2]/div[1]/span/span[7]");
		By Clarity_Right = By.xpath(".//*[@id='thelist']/div[7]/div[2]/div[1]/span/span[6]");
		By Clarity_left= By.xpath(".//*[@id='thelist']/div[7]/div[2]/div[1]/span/span[7]");
		By Cut_left = By.xpath(".//*[@id='thelist']/div[5]/div[2]/div[1]/span/span[7]");
		By Cut_right = By.xpath(".//*[@id='thelist']/div[5]/div[2]/div[1]/span/span[6]");
		By flo_right = By.xpath(".//*[@id='thelist']/div[8]/div[2]/div[1]/span/span[6]");
		By flo_left = By.xpath(".//*[@id='thelist']/div[8]/div[2]/div[1]/span/span[7]");
		By Photo_Video = By.xpath(".//*[@id='thelist']/div[11]/div/label/div");
		By Search = By.xpath(".//*[@id='divSearchBtn']/div[2]");
		By filter_retailer=By.xpath(".//*[@id='tabRetailer']/a");
		By offline_check= By.xpath(".//*[@id='retailerScroll']/div[1]/div[1]/label");
		//By diamond_visible= By.xpath("html/body/div[2]/div/section/div[3]/div/div[4]/div[1]/div/div/div[1]/div/div[2]/div[1]/span/span");
		
		public WebElement Certification(){
			return driver.findElement(Certification);
		}
		
		public WebElement Filter_By_Diamond(){
			return driver.findElement(Filter_By_Diamond);
		}
				
		public WebElement pricetext(){
			return driver.findElement(pricetext);
		}
		public WebElement Carat(){
			return driver.findElement(Carat);
		}
		public WebElement Color_Right(){
			return driver.findElement(Color_Right);
		}
		public WebElement Color_left(){
			return driver.findElement(Color_left);
		}
		public WebElement Clarity_Right(){
			return driver.findElement(Clarity_Right);
		}
		public WebElement Clarity_left(){
			return driver.findElement(Clarity_left);
		}
		public WebElement Cut_left(){
			return driver.findElement(Cut_left);
		}
		public WebElement Cut_right(){
			return driver.findElement(Cut_right);
		}
		public WebElement flo_right(){
			return driver.findElement(flo_right);
		}
		public WebElement flo_left(){
			return driver.findElement(flo_left);
		}
		public WebElement Photo_Video(){
			return driver.findElement(Photo_Video);
		}
		public WebElement Search(){
			return driver.findElement(Search);
		}
		
		public WebElement filter_retailer(){
			return driver.findElement(filter_retailer);
		}
		public WebElement offline_check(){
			return driver.findElement(offline_check);
		}
		

}
