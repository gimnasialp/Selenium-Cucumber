package stepDefinitions;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Cucumber.Automation.Base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import pageObjects.CheckOutPage;
import pageObjects.HomePage;

@RunWith(Cucumber.class)
public class MyStepDefinitions {
	
	public WebDriver driver;
	public CheckOutPage cp;
	HomePage home;

    @Given("^User is on greencart Landing Page$")
    public void user_is_on_greencart_landing_page() throws Throwable {
      
        driver = Base.getDriver();
       // driver.get("https://rahulshettyacademy.com/seleniumPractise/#/");
        
    }

    @When("^User searched for (.+) Vegetable$")
    public void user_searched_for_something_vegetable(String strArg1) throws Throwable {
    	
    	home = new HomePage(driver);
    	home.getSearch().sendKeys(strArg1);
    	//
    	//driver.findElement(By.xpath("//input[@type='search']")).sendKeys(strArg1);
    	
    	Thread.sleep(3000);
    }

    @Then("^\"([^\"]*)\" results are displayed$")
    public void something_results_are_displayed(String strArg1) throws Throwable {
    	Assert.assertTrue(driver.findElement(By.cssSelector("h4.product-name")).getText().contains(strArg1));
    	    	
    }
    
    @And("^Added items to cart$")
    public void added_items_to_cart() throws Throwable {
    	driver.findElement(By.cssSelector("a.increment")).click();
    	driver.findElement(By.cssSelector("a.increment")).click();
    	driver.findElement(By.xpath("//button[contains(text(),'ADD TO CART')]")).click();
    }

    @And("^User proceeded to Checkout for purchase$")
    public void user_proceeded_to_checkout_for_purchase() throws Throwable {
    	driver.findElement(By.xpath("//header/div[1]/div[3]/a[4]/img[1]")).click();
    	driver.findElement(By.xpath("//button[contains(text(),'PROCEED TO CHECKOUT')]")).click();
    }
    

//    @Then("^verify selected \"([^\"]*)\" items are displayed in Check out page$")
//    public void verify_selected_something_items_are_displayed_in_check_out_page(String strArg1) throws Throwable {
//    	Assert.assertTrue(driver.findElement(By.cssSelector("p.product-name")).getText().contains(strArg1));
//    }
    
    @Then("^verify selected (.+) items are displayed in Check out page$")
    public void verify_selected_items_are_displayed_in_check_out_page(String name) throws Throwable {
       cp = new CheckOutPage(driver);
       Assert.assertTrue(cp.getProductName().getText().contains(name));
    }
    
}