package stepDefinitions;

import Cucumber.Automation.Base;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Base{

	@Before("@MobileTest")
	public void beforevaldiation() {
		System.out.println("HOOKS - Before Mobile  hook");
	}

	@After("@SmokeTest")
	public void Aftervaldiation() {
		driver.close();
	}

	@After("@RegressionTest")
	public void AfterSeleniumTest() {
		driver.close();
	}
	
	@Before("@WebTest")
	public void beforeWebvaldiation() {
		System.out.println("Before Web  hook");
	}

	@After("@WebTest")
	public void AfterWebvaldiation() {
		System.out.println("  After Web before hook");
	}
	
	@After("@SeleniumTest1")
	public void AfterSeleniumvaldiation() {
		driver.close();
	}
}
